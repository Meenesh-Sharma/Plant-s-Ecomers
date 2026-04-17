
'use client';

import { useCart } from "../context/CartContext";
import { Button } from "@/components/ui/button";
import { Trash, Plus, Minus } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import EmptyState from "../components/EmptyState";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function CartPage() {
    const router = useRouter();
    const { cart, incrementQuantity, decrementQuantity, removeFromCart, totalPrice } = useCart();

    const [authDialog, setAuthDialog] = useState(false);

    const handleCheckout = () => {
        if (cart.length === 0) return;

        const token = localStorage.getItem("token");

     
        if (!token) {
            setAuthDialog(true);
            return;
        }

        router.push("/checkout");
    };

    if (cart.length === 0) {
        return (
            <div className="container mx-auto px-6 py-12 text-center mt-15">
                <EmptyState onAdd={function (): void {
                    throw new Error("Function not implemented.");
                }} />
                <Link href="/shop">
                    <Button className="mt-4 bg-green-500 hover:bg-green-600 text-white">
                        Go to Shop
                    </Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-6 py-12 mt-15">
            <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

            <div className="space-y-6">
                {cart.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-center justify-between bg-white p-4 rounded-xl shadow-md"
                    >
                        <div className="flex items-center space-x-4">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-20 h-20 object-cover rounded-lg"
                            />
                            <div>
                                <h3 className="font-semibold">{item.name}</h3>
                                <p className="text-gray-500">₹ {item.price}</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <Button
                                size="sm"
                                variant="outline"
                                onClick={() => decrementQuantity(item.id)}
                            >
                                <Minus />
                            </Button>
                            <span>{item.quantity}</span>
                            <Button
                                size="sm"
                                variant="outline"
                                onClick={() => incrementQuantity(item.id)}
                            >
                                <Plus />
                            </Button>
                            <Button
                                size="sm"
                                variant="destructive"
                                onClick={() => removeFromCart(item.id)}
                            >
                                <Trash />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6 flex justify-between items-center">
                <span className="text-xl font-bold">Total: ₹ {totalPrice}</span>

                <Button
                    className={`bg-green-500 hover:bg-green-600 text-white ${
                        cart.length === 0 ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    onClick={handleCheckout}
                    disabled={cart.length === 0}
                >
                    Checkout
                </Button>
            </div>

           
            <Dialog open={authDialog} onOpenChange={setAuthDialog}>
                <DialogContent className="sm:max-w-[400px] text-center">
                    <DialogHeader>
                        <DialogTitle className="text-red-600">
                            Login Required 
                        </DialogTitle>
                    </DialogHeader>

                    <p className="text-gray-700">
                        Please login or register before proceeding to checkout.
                    </p>

                    <div className="flex gap-3 mt-4 justify-center">
                        <Button
                            className="bg-green-600"
                            onClick={() => router.push("/login")}
                        >
                            Login
                        </Button>

                        <Button
                            variant="outline"
                            onClick={() => router.push("/signup")}
                        >
                            Register
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}