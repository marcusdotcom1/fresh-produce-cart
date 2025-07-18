import React from 'react';
import { Vegetable } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/hooks/use-toast';

interface VegetableCardProps {
  vegetable: Vegetable;
}

export function VegetableCard({ vegetable }: VegetableCardProps) {
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addItem(vegetable);
    toast({
      title: "Added to cart",
      description: `${vegetable.name} added to your cart`,
    });
  };

  return (
    <Card className="group hover:shadow-hover transition-all duration-300 cursor-pointer bg-gradient-card border-0 overflow-hidden">
      <div className="aspect-square overflow-hidden">
        <img
          src={vegetable.image}
          alt={vegetable.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <CardContent className="p-4">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg text-foreground">{vegetable.name}</h3>
          <p className="text-sm text-muted-foreground">{vegetable.description}</p>
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-primary">₹{vegetable.price}</span>
              <span className="text-sm text-muted-foreground">{vegetable.unit}</span>
            </div>
            <Button
              variant="cart"
              size="sm"
              onClick={handleAddToCart}
              className="ml-auto"
            >
              <Plus className="h-4 w-4" />
              Add to Cart
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}