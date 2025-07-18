import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, CheckCircle, Clock, Package } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Order } from '@/types';
import { useToast } from '@/hooks/use-toast';

// Mock orders data
const mockOrders: Order[] = [
  {
    id: 'ORD001',
    userId: '1',
    customerName: 'John Doe',
    items: [
      {
        id: '1',
        name: 'Fresh Tomatoes',
        price: 40,
        image: '/src/assets/tomatoes.jpg',
        unit: 'per kg',
        quantity: 2
      },
      {
        id: '2',
        name: 'Bell Peppers',
        price: 60,
        image: '/src/assets/bell-peppers.jpg',
        unit: 'per kg',
        quantity: 1
      }
    ],
    subtotal: 140,
    deliveryCharge: 70,
    total: 210,
    status: 'pending',
    createdAt: new Date('2024-01-15T10:30:00')
  },
  {
    id: 'ORD002',
    userId: '2',
    customerName: 'Jane Smith',
    items: [
      {
        id: '4',
        name: 'Spinach',
        price: 25,
        image: '/src/assets/spinach.jpg',
        unit: 'per bunch',
        quantity: 3
      },
      {
        id: '6',
        name: 'Broccoli',
        price: 80,
        image: '/src/assets/broccoli.jpg',
        unit: 'per piece',
        quantity: 1
      }
    ],
    subtotal: 155,
    deliveryCharge: 0,
    total: 155,
    status: 'confirmed',
    createdAt: new Date('2024-01-15T09:15:00')
  }
];

export default function AdminPanel() {
  const [orders, setOrders] = useState<Order[]>(mockOrders);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleConfirmOrder = (orderId: string) => {
    setOrders(prevOrders =>
      prevOrders.map(order =>
        order.id === orderId
          ? { ...order, status: 'confirmed' as const }
          : order
      )
    );
    
    toast({
      title: "Order Confirmed",
      description: `Order ${orderId} has been confirmed`,
    });
  };

  const getStatusIcon = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return <Clock className="h-4 w-4" />;
      case 'confirmed':
        return <CheckCircle className="h-4 w-4" />;
      case 'delivered':
        return <Package className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return 'bg-warning text-warning-foreground';
      case 'confirmed':
        return 'bg-success text-success-foreground';
      case 'delivered':
        return 'bg-primary text-primary-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center space-x-4 mb-8">
          <Button variant="ghost" onClick={() => navigate('/')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Store
          </Button>
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Admin Panel
          </h1>
        </div>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Package className="h-5 w-5" />
                <span>Order Management</span>
              </CardTitle>
            </CardHeader>
          </Card>

          {orders.length === 0 ? (
            <Card>
              <CardContent className="flex items-center justify-center py-12">
                <div className="text-center">
                  <Package className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">No orders found</p>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {orders.map((order) => (
                <Card key={order.id} className="shadow-card hover:shadow-hover transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Badge variant="outline" className="font-mono">
                          {order.id}
                        </Badge>
                        <Badge className={getStatusColor(order.status)}>
                          {getStatusIcon(order.status)}
                          <span className="ml-1 capitalize">{order.status}</span>
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {order.createdAt.toLocaleDateString()} {order.createdAt.toLocaleTimeString()}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Customer Details</h4>
                        <p className="text-sm">
                          <span className="font-medium">Name:</span> {order.customerName}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Customer ID: {order.userId}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Order Items</h4>
                        <div className="space-y-2">
                          {order.items.map((item, index) => (
                            <div key={index} className="flex justify-between items-center text-sm">
                              <span>{item.name} × {item.quantity}</span>
                              <span className="font-medium">₹{item.price * item.quantity}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <Separator className="my-4" />

                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-4 text-sm">
                          <span>Subtotal: ₹{order.subtotal}</span>
                          {order.deliveryCharge > 0 && (
                            <span className="text-warning-foreground">
                              Delivery: ₹{order.deliveryCharge}
                            </span>
                          )}
                        </div>
                        <div className="text-lg font-bold">
                          Total: ₹{order.total}
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        {order.status === 'pending' && (
                          <Button
                            variant="success"
                            onClick={() => handleConfirmOrder(order.id)}
                          >
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Confirm Order
                          </Button>
                        )}
                        {order.status === 'confirmed' && (
                          <Badge variant="secondary" className="px-3 py-1">
                            Order Confirmed
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}