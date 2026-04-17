'use client';

import { useCart } from "../context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { CreditCard, Wallet, Zap } from "lucide-react";

export default function PaymentPage() {
  const { cart, totalPrice } = useCart();

  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [cardNumber, setCardNumber] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [upiId, setUpiId] = useState("");

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Payment Successful!\nTotal Paid: $${totalPrice.toFixed(2)}\nMethod: ${paymentMethod}`);
    // Here you can integrate real payment gateway like Stripe, Razorpay, or PayPal
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-6">Payment & Place Order</h2>

      {/* Order Summary */}
      <div className="mb-8">
        <h3 className="font-bold text-xl mb-4">Order Summary</h3>
        <div className="space-y-2">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between bg-gray-100 p-2 rounded-lg">
              <span>{item.name} x {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-between font-bold text-lg">
          <span>Total:</span>
          <span>₹{totalPrice.toFixed(2)}</span>
        </div>
      </div>

      {/* Payment Methods */}
      <form onSubmit={handlePayment} className="space-y-6 max-w-lg">
        <h3 className="font-bold text-xl mb-2">Choose Payment Method</h3>
        <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-2">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="credit" id="credit" />
            <label htmlFor="credit" className="flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-green-600" /> Credit/Debit Card
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="upi" id="upi" />
            <label htmlFor="upi" className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-green-600" /> UPI
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="wallet" id="wallet" />
            <label htmlFor="wallet" className="flex items-center gap-2">
              <Wallet className="w-5 h-5 text-green-600" /> Wallet
            </label>
          </div>
        </RadioGroup>

        {/* Conditional Forms */}
        {paymentMethod === "credit" && (
          <div className="space-y-4 mt-4">
            <Input
              placeholder="Card Number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
            <Input
              placeholder="Name on Card"
              value={nameOnCard}
              onChange={(e) => setNameOnCard(e.target.value)}
              required
            />
            <div className="flex gap-4">
              <Input
                placeholder="Expiry MM/YY"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                required
              />
              <Input
                placeholder="CVV"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                required
              />
            </div>
          </div>
        )}

        {paymentMethod === "upi" && (
          <div className="mt-4">
            <Input
              placeholder="Enter your UPI ID"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              required
            />
          </div>
        )}

        {paymentMethod === "wallet" && (
          <div className="mt-4 text-gray-600">
            You will be redirected to your wallet app to complete the payment.
          </div>
        )}

        <Button type="submit" className="bg-green-500 hover:bg-green-600 text-white mt-6 w-full">
          Pay ₹{totalPrice.toFixed(2)}
        </Button>
      </form>
    </div>
  );
}
