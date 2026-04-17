

'use client';
import { useCart } from "../context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import EmptyState from "../components/EmptyState";

export default function CheckoutPage() {
  const { cart, totalPrice, clearCart } = useCart();
  const router = useRouter();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    email: "",
    phoneno: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const [showAllItems, setShowAllItems] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [authDialog, setAuthDialog] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;

    if (name === "postalCode") {
      value = value.replace(/\D/g, "");
      if (value.length > 6) return;
    }

    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  const paymentOptions = [
    { value: "credit", label: "Credit / Debit Card" },
    { value: "upi", label: "UPI / Wallet" },
    { value: "cod", label: "Cash on Delivery" },
  ];

  const isPostalValid = /^\d{6}$/.test(shippingInfo.postalCode);

  const isFormValid =
    Object.values(shippingInfo).every((value) => value.trim() !== "") &&
    paymentMethod !== "" &&
    isPostalValid;

  //  Prevent showing empty cart during success flow
  useEffect(() => {
    if (!cart.length && !isSuccess) {
      setDialogMessage("Cart is empty!");
      setIsSuccess(false);
      setDialogOpen(true);
    }
  }, [cart, isSuccess]);

  //  Handle success + redirect
  useEffect(() => {
    if (!dialogOpen) return;

    let timer: NodeJS.Timeout;

    if (isSuccess) {
      timer = setTimeout(() => {
        clearCart();
        router.push("/");
      }, 2000);
    } else {
      timer = setTimeout(() => {
        setDialogOpen(false);
      }, 2000);
    }

    return () => clearTimeout(timer);
  }, [isSuccess, dialogOpen]);

  const handlePlaceOrder = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setAuthDialog(true);
      return;
    }

    if (!cart.length) {
      setDialogMessage("Your cart is empty 🛒");
      setIsSuccess(false);
      setDialogOpen(true);
      return;
    }

    if (!isPostalValid) {
      setDialogMessage("Postal Code must be exactly 6 digits!");
      setIsSuccess(false);
      setDialogOpen(true);
      return;
    }

    if (!isFormValid) {
      setDialogMessage("Please complete all fields!");
      setIsSuccess(false);
      setDialogOpen(true);
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/orders`,
        {
          shippingInfo,
          cart,
          totalPrice,
          paymentMethod,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setDialogMessage(res.data.message || "Order placed successfully!");
      setIsSuccess(true);
      setDialogOpen(true);

    } catch (error: any) {
      setDialogMessage(
        error.response?.data?.message || "Something went wrong"
      );
      setIsSuccess(false);
      setDialogOpen(true);

    } finally {
      setLoading(false);
    }
  };


  if (!cart.length && !isSuccess) {
    return (
      <div className="text-center mt-20">
        <EmptyState onAdd={function (): void {
          throw new Error("Function not implemented.");
        }} />
      </div>
    );
  }

  const displayedItems = showAllItems ? cart : cart.slice(0, 3);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-12 mt-15 ">
      <h1 className="text-3xl font-bold mb-8 text-center lg:text-left">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Shipping Information */}
        <Card className="shadow-lg rounded-xl p-6">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Shipping Information</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <Input type="text" name="name" placeholder="Full Name" value={shippingInfo.name} onChange={handleChange} />
            <Input type="email" name="email" placeholder="Email Address" value={shippingInfo.email} onChange={handleChange} />
            <Input type="text" name="phoneno" placeholder="Phone Number" value={shippingInfo.phoneno} onChange={handleChange} />
            <Input type="text" name="address" placeholder="Address" value={shippingInfo.address} onChange={handleChange} />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input type="text" name="city" placeholder="City" value={shippingInfo.city} onChange={handleChange} />
              <Input
                type="text"
                name="postalCode"
                placeholder="Postal Code"
                value={shippingInfo.postalCode}
                onChange={handleChange}
                maxLength={6}
              />
            </div>

            {shippingInfo.postalCode && !isPostalValid && (
              <p className="text-red-500 text-sm">
                Postal Code must be exactly 6 digits
              </p>
            )}

            <Input type="text" name="country" placeholder="Country" value={shippingInfo.country} onChange={handleChange} />
          </CardContent>
        </Card>

        {/* Order Summary */}
        <Card className="shadow-lg rounded-xl p-6 lg:sticky lg:top-24">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Order Summary</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">

            <div className={`max-h-96 overflow-y-auto ${cart.length > 3 ? "mb-2" : ""}`}>
              {displayedItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between border-b border-gray-200 pb-4">
                  <div className="flex items-center gap-4">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-gray-500">{item.quantity} x ₹ {item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <p className="font-bold">₹ {(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>

            {cart.length > 3 && (
              <Button
                variant="link"
                className="text-blue-600 hover:underline"
                onClick={() => setShowAllItems(!showAllItems)}
              >
                {showAllItems ? "Show Less" : `Show ${cart.length - 3} More Item(s)`}
              </Button>
            )}

            <div className="pt-4 flex justify-between font-semibold text-lg border-t border-gray-300">
              <span>Total</span>
              <span>₹ {totalPrice.toFixed(2)}</span>
            </div>

            <div className="mt-6 space-y-2">
              <p className="font-semibold mb-2">Payment Method</p>

              {paymentOptions.map((option) => (
                <Button
                  key={option.value}
                  variant={paymentMethod === option.value ? "default" : "outline"}
                  className="w-full"
                  onClick={() => setPaymentMethod(option.value)}
                >
                  {option.label}
                </Button>
              ))}

              {paymentMethod === "credit" && (
                <div className="mt-4 space-y-2">
                  <Input type="text" placeholder="Card Number" />
                  <div className="grid grid-cols-2 gap-4">
                    <Input type="text" placeholder="Expiry MM/YY" />
                    <Input type="text" placeholder="CVV" />
                  </div>
                  <Input type="text" placeholder="Cardholder Name" />
                </div>
              )}

              {paymentMethod === "upi" && (
                <Input type="text" placeholder="Enter UPI ID / Wallet" className="mt-4" />
              )}
            </div>

            <Button
              className={`w-full mt-6 ${isFormValid ? "bg-green-600 hover:bg-green-700" : "bg-gray-400 cursor-not-allowed"} text-white shadow-lg`}
              onClick={handlePlaceOrder}
              disabled={!isFormValid || loading}
            >
              {loading ? "Placing Order..." : "Place Order"}
            </Button>

          </CardContent>
        </Card>
      </div>

      {/* Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-[400px] text-center">
          <DialogHeader>
            <DialogTitle className={`text-lg font-semibold ${isSuccess ? "text-green-600" : "text-red-600"}`}>
              {isSuccess ? "Success " : "Error "}
            </DialogTitle>
          </DialogHeader>

          <p className="text-gray-700">{dialogMessage}</p>


        </DialogContent>
      </Dialog>

      {/* Auth Dialog */}
      <Dialog open={authDialog} onOpenChange={setAuthDialog}>
        <DialogContent className="sm:max-w-[400px] text-center">
          <DialogHeader>
            <DialogTitle className="text-red-600">
              Login Required
            </DialogTitle>
          </DialogHeader>

          <p className="text-gray-700">
            Please login or register before placing an order.
          </p>

          <div className="flex gap-3 mt-4 justify-center">
            <Button className="bg-green-600" onClick={() => router.push("/login")}>
              Login
            </Button>

            <Button variant="outline" onClick={() => router.push("/signup")}>
              Register
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}