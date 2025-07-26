import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Truck } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/hooks/use-toast';

export function OrderConfirmation({ isOpen, onClose, onComplete }) {
  const { items, total, clearCart } = useCart();
  const { user } = useAuth();
  const { toast } = useToast();

  const deliveryCharge = total < 100 ? total * 0.5 : 0;
  const finalTotal = total + deliveryCharge;

  const handleConfirmOrder = () => {
    toast({
      title: "Order Placed Successfully!",
      description: "Your order has been confirmed and will be delivered soon.",
    });
    clearCart();
    onComplete();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-success" />
            <span>Order Confirmation</span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Customer Info */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Delivery Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p><span className="font-medium">Customer:</span> {user?.name || user?.email}</p>
                <p><span className="font-medium">Email:</span> {user?.email}</p>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Truck className="h-4 w-4" />
                  <span>Cash on Delivery</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Order Items */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-muted-foreground">
                          ₹{item.price} × {item.quantity}
                        </p>
                      </div>
                    </div>
                    <Badge variant="secondary">
                      ₹{item.price * item.quantity}
                    </Badge>
                  </div>
                ))}
              </div>

              <Separator className="my-4" />

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-semibold">₹{total}</span>
                </div>
                {deliveryCharge > 0 && (
                  <div className="flex justify-between text-warning-foreground">
                    <span>Delivery charges:</span>
                    <span className="font-semibold">₹{deliveryCharge}</span>
                  </div>
                )}
                <Separator />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total Amount:</span>
                  <span>₹{finalTotal}</span>
                </div>
              </div>

              <div className="mt-4 p-3 bg-accent/50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Truck className="h-4 w-4 text-success" />
                  <span className="text-sm font-medium">Payment Method: Cash on Delivery</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Pay when your order is delivered to your doorstep
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="flex space-x-3">
            <Button variant="outline" onClick={onClose} className="flex-1">
              Back to Cart
            </Button>
            <Button variant="success" onClick={handleConfirmOrder} className="flex-1">
              Confirm Order
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
