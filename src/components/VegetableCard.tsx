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
      <CardContent className="p-3">
        <div className="space-y-1.5">
          <h3 className="font-semibold text-base text-foreground">{vegetable.name}</h3>
          <p className="text-xs text-muted-foreground line-clamp-2">{vegetable.description}</p>
          <div className="flex items-center justify-between pt-1">
            <div className="flex flex-col">
              <span className="text-lg font-bold text-primary">₹{vegetable.price}</span>
              <span className="text-xs text-muted-foreground">{vegetable.unit}</span>
            </div>
            <Button
              variant="cart"
              size="sm"
              onClick={handleAddToCart}
              className="ml-auto text-xs px-2 py-1 h-7"
            >
              <Plus className="h-3 w-3 mr-1" />
              Add
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}