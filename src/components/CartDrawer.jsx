import React, { useState } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Minus, Plus, Trash2, AlertTriangle } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { LoginModal } from './LoginModal';
import { OrderConfirmation } from './OrderConfirmation';

export function CartDrawer() {
  const { items, isOpen, setCartOpen, updateQuantity, removeItem, total } = useCart();
  const { user } = useAuth();
  const [showLogin, setShowLogin] = useState(false);
  const [showOrderConfirmation, setShowOrderConfirmation] = useState(false);

  const deliveryCharge = total < 100 ? total * 0.5 : 0;
  const finalTotal = total + deliveryCharge;
  const minOrderWarning = total < 100;

  const handlePlaceOrder = () => {
    if (!user) {
      setShowLogin(true);
    } else {
      setShowOrderConfirmation(true);
    }
  };

  const handleOrderComplete = () => {
    setShowOrderConfirmation(false);
    setCartOpen(false);
  };

  if (showOrderConfirmation) {
    return (
      <OrderConfirmation 
        isOpen={showOrderConfirmation}
        onClose={() => setShowOrderConfirmation(false)}
        onComplete={handleOrderComplete}
      />
    );
  }

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setCartOpen}>
        <SheetContent className="w-full sm:max-w-lg">
          <SheetHeader>
            <SheetTitle>Shopping Cart</SheetTitle>
          </SheetHeader>
          
          <div className="flex flex-col h-full">
            {items.length === 0 ? (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-muted-foreground">Your cart is empty</p>
                  <Button
                    variant="ghost"
                    onClick={() => setCartOpen(false)}
                    className="mt-4"
                  >
                    Continue Shopping
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto py-4">
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div key={item.id} className="flex items-center space-x-4 p-3 bg-gradient-card rounded-lg shadow-card">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-md"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium">{item.name}</h4>
                          <p className="text-sm text-muted-foreground">₹{item.price} {item.unit}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="h-8 w-8"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <Badge variant="secondary" className="px-3">
                            {item.quantity}
                          </Badge>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-8 w-8"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeItem(item.id)}
                            className="h-8 w-8 text-destructive hover:text-destructive"
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">₹{item.price * item.quantity}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-4 space-y-4">
                  {minOrderWarning && (
                    <div className="flex items-start space-x-2 p-3 bg-warning/10 border border-warning/20 rounded-lg">
                      <AlertTriangle className="h-4 w-4 text-warning mt-0.5" />
                      <div className="text-sm">
                        <p className="font-medium text-warning-foreground">Minimum order is ₹100</p>
                        <p className="text-warning-foreground/80">50% delivery charges will be applied for orders below ₹100</p>
                      </div>
                    </div>
                  )}
                  
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
                      <span>Total:</span>
                      <span>₹{finalTotal}</span>
                    </div>
                  </div>

                  <Button
                    variant="default"
                    size="lg"
                    onClick={handlePlaceOrder}
                    className="w-full"
                    disabled={items.length === 0}
                  >
                    Place Order
                  </Button>
                </div>
              </>
            )}
          </div>
        </SheetContent>
      </Sheet>

      <LoginModal
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
        onSuccess={() => {
          setShowLogin(false);
          setShowOrderConfirmation(true);
        }}
      />
    </>
  );
}