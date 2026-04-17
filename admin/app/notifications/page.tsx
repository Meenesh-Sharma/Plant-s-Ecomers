
'use client';

import React, { useEffect, useState } from 'react';
import { Bell, Package, Truck, MessageSquare } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

import io, { Socket } from 'socket.io-client';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL as string;

interface Notification {
  _id: string;
  type: 'order' | 'delivery' | 'review';
  message: string;
  createdAt: string;
  isRead: boolean;
}

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState<number>(0);

  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [currentNotif, setCurrentNotif] = useState<Notification | null>(null);

  useEffect(() => {
    const socket: Socket = io(API_URL);

    const fetchNotifications = async () => {
      try {
        const token = localStorage.getItem('token');

        const res = await axios.get(`${API_URL}/api/notifications`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setNotifications(res.data);
        setUnreadCount(
          res.data.filter((n: Notification) => !n.isRead).length
        );
      } catch (err) {
        console.error(err);
      }
    };

    fetchNotifications();

    socket.on('newNotification', (notif: Notification) => {
      setNotifications((prev) => [notif, ...prev]);
      setUnreadCount((prev) => prev + 1);

      setCurrentNotif(notif);
      setOpenDialog(true);
    });

    return () => {
      socket.off('newNotification');
      socket.disconnect();
    };
  }, []);

  const handleMarkAsRead = async (id: string) => {
    try {
      await axios.put(`${API_URL}/api/notifications/${id}`, {
        isRead: true,
      });

      setNotifications((prev) =>
        prev.map((n) =>
          n._id === id ? { ...n, isRead: true } : n
        )
      );

      setUnreadCount((prev) => (prev > 0 ? prev - 1 : 0));
    } catch (err) {
      console.error(err);
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'order':
        return <Package className="text-blue-600" size={18} />;
      case 'delivery':
        return <Truck className="text-green-600" size={18} />;
      case 'review':
        return <MessageSquare className="text-yellow-600" size={18} />;
      default:
        return <Bell size={18} />;
    }
  };

  return (
    <div className="p-6 md:p-10 min-h-screen bg-linear-to-br from-gray-50 to-gray-100">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Bell className="text-indigo-600" />
          Notifications
        </h1>

        <div className="relative">
          <Button variant="outline" size="icon" className="rounded-full">
            <Bell />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs px-1.5 rounded-full">
                {unreadCount}
              </span>
            )}
          </Button>
        </div>
      </div>

      <Separator className="mb-4" />

      <div className="space-y-4">
        {notifications.map((notif) => (
          <Card
            key={notif._id}
            className={notif.isRead ? 'bg-white' : 'bg-indigo-50'}
          >
            <CardHeader className="flex flex-row justify-between items-start">
              <div className="flex gap-3">
                <div className="p-2 bg-gray-100 rounded-full">
                  {getIcon(notif.type)}
                </div>

                <div>
                  <CardTitle className="text-sm">
                    {notif.message}
                  </CardTitle>
                  <p className="text-xs text-gray-500">
                    {new Date(notif.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>

              {!notif.isRead && (
                <Badge className="bg-red-100 text-red-600">
                  New
                </Badge>
              )}
            </CardHeader>

            <CardContent className="flex justify-end">
              {!notif.isRead ? (
                <Button onClick={() => handleMarkAsRead(notif._id)}>
                  Mark as Read
                </Button>
              ) : (
                <Button disabled variant="outline">
                  Read
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>🔔 New Notification</DialogTitle>
          </DialogHeader>

          {currentNotif && (
            <div className="space-y-2">
              <p className="font-medium">
                {currentNotif.message}
              </p>
              <p className="text-sm text-gray-500">
                {new Date(currentNotif.createdAt).toLocaleString()}
              </p>

              <Button
                className="mt-4 w-full"
                onClick={() => setOpenDialog(false)}
              >
                Close
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}