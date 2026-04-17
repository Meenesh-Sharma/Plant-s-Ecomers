
"use client";

import  { useEffect, useState } from "react";
import axios from "axios";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

interface Review {
  _id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: "pending" | "accepted" | "frozen";
  createdAt: string;
}

export default function ReviewsPage() {
  const API =
    process.env.NEXT_PUBLIC_API_BASE_URL;

  const [reviews, setReviews] = useState<Review[]>([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentAction, setCurrentAction] = useState<
    "accept" | "reject" | "freeze" | "unfreeze" | null
  >(null);
  const [selectedReview, setSelectedReview] =
    useState<Review | null>(null);

  const [expandedId, setExpandedId] = useState<string | null>(null);

  // FETCH DATA
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get(`${API}/api/reviews/all`);
        setReviews(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchReviews();
  }, [API]);

  // DIALOG
  const openConfirmDialog = (
    review: Review,
    action: "accept" | "reject" | "freeze" | "unfreeze"
  ) => {
    setSelectedReview(review);
    setCurrentAction(action);
    setOpenDialog(true);
  };

  // ACTION HANDLER
  const handleAction = async () => {
    if (!selectedReview || !currentAction) return;

    try {
      const id = selectedReview._id;

      if (currentAction === "accept") {
        await axios.put(`${API}/api/reviews/${id}`, {
          status: "accepted",
        });
        setReviews((prev) =>
          prev.map((r) =>
            r._id === id ? { ...r, status: "accepted" } : r
          )
        );
      }

      if (currentAction === "freeze") {
        await axios.put(`${API}/api/reviews/${id}`, {
          status: "frozen",
        });
        setReviews((prev) =>
          prev.map((r) =>
            r._id === id ? { ...r, status: "frozen" } : r
          )
        );
      }

      if (currentAction === "unfreeze") {
        await axios.put(`${API}/api/reviews/${id}`, {
          status: "pending",
        });
        setReviews((prev) =>
          prev.map((r) =>
            r._id === id ? { ...r, status: "pending" } : r
          )
        );
      }

      if (currentAction === "reject") {
        await axios.delete(`${API}/api/reviews/${id}`);
        setReviews((prev) =>
          prev.filter((r) => r._id !== id)
        );
      }

      setOpenDialog(false);
    } catch (err) {
      console.error(err);
      alert("Action failed");
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">User Feedback</h1>

      {reviews.length === 0 && (
        <p className="text-gray-500">No feedback available</p>
      )}

      {/* CARD LIST */}
      <div className="grid md:grid-cols-2 gap-6">
        {reviews.map((review) => {
          const isExpanded = expandedId === review._id;
          const shortText =
            review.message.length > 120
              ? review.message.slice(0, 120) + "..."
              : review.message;

          return (
            <Card
              key={review._id}
              className="shadow-lg rounded-2xl"
            >
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">
                      {review.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {review.email}
                    </p>
                  </div>

                  {/* STATUS BADGE */}
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold
                    ${
                      review.status === "accepted"
                        ? "bg-green-100 text-green-700"
                        : review.status === "frozen"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {review.status}
                  </span>
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-3">
                <p className="font-medium text-sm text-gray-700">
                  {review.subject}
                </p>

                {/* MESSAGE */}
                <p className="text-sm text-gray-600">
                  {isExpanded ? review.message : shortText}
                </p>

                {review.message.length > 120 && (
                  <button
                    onClick={() =>
                      setExpandedId(
                        isExpanded ? null : review._id
                      )
                    }
                    className="text-green-600 text-xs font-semibold"
                  >
                    {isExpanded ? "Show Less" : "Read More"}
                  </button>
                )}

                <p className="text-xs text-gray-400">
                  {new Date(
                    review.createdAt
                  ).toLocaleDateString()}
                </p>

                {/* ACTIONS */}
                <div className="flex gap-2 pt-2">
                  {review.status === "pending" && (
                    <>
                      <Button
                        size="sm"
                        className="bg-green-600 text-white"
                        onClick={() =>
                          openConfirmDialog(
                            review,
                            "accept"
                          )
                        }
                      >
                        Accept
                      </Button>

                      <Button
                        size="sm"
                        className="bg-gray-500 text-white"
                        onClick={() =>
                          openConfirmDialog(
                            review,
                            "freeze"
                          )
                        }
                      >
                        Freeze
                      </Button>

                      <Button
                        size="sm"
                        className="bg-red-600 text-white"
                        onClick={() =>
                          openConfirmDialog(
                            review,
                            "reject"
                          )
                        }
                      >
                        Reject
                      </Button>
                    </>
                  )}

                  {review.status === "frozen" && (
                    <>
                      <Button
                        size="sm"
                        className="bg-blue-600 text-white"
                        onClick={() =>
                          openConfirmDialog(
                            review,
                            "unfreeze"
                          )
                        }
                      >
                        Unfreeze
                      </Button>

                      <Button
                        size="sm"
                        className="bg-red-600 text-white"
                        onClick={() =>
                          openConfirmDialog(
                            review,
                            "reject"
                          )
                        }
                      >
                        Reject
                      </Button>
                    </>
                  )}
                </div>
              </CardContent>
              <Button
                        size="sm"
                        className="bg-red-600 text-white"
                        onClick={() =>
                          openConfirmDialog(
                            review,
                            "reject"
                          )
                        }
                      >
                        Reject
                      </Button>
            </Card>
          );
        })}
      </div>

      {/* DIALOG */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Confirm Action
            </DialogTitle>
          </DialogHeader>

          <p>
            Are you sure you want to{" "}
            <strong>{currentAction}</strong> this
            feedback?
          </p>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setOpenDialog(false)}
            >
              Cancel
            </Button>
            <Button onClick={handleAction}>
              Confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}