import React, { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { toast } from "sonner"
import { CheckCircle, Package } from "lucide-react"

const mockOrders = [
  {
    id: 1,
    name: "Fresh Spinach",
    quantity: 3,
    status: "pending",
    image: "/assets/spinach.jpg",
    createdAt: new Date(),
  },
  {
    id: 2,
    name: "Organic Carrots",
    quantity: 5,
    status: "confirmed",
    image: "/assets/carrots.jpg",
    createdAt: new Date(),
  },
]

export default function AdminPanel() {
  const [orders, setOrders] = useState(mockOrders)

  const handleConfirm = (id) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, status: "confirmed" } : order
      )
    )
    toast.success("Order confirmed!")
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {orders.map((order) => (
        <Card key={order.id} className="relative group">
          <CardHeader>
            <img
              src={order.image}
              alt={order.name}
              className="w-full h-40 object-cover rounded-md"
            />
          </CardHeader>
          <CardContent>
            <CardTitle className="text-lg font-semibold">{order.name}</CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              Quantity: {order.quantity}
            </CardDescription>
            <CardDescription className="text-sm text-muted-foreground">
              Ordered on:{" "}
              {order.createdAt.toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </CardDescription>
            <div className="mt-2">
              <Badge
                className={
                  order.status === "confirmed"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }
              >
                {order.status.toUpperCase()}
              </Badge>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            {order.status === "pending" ? (
              <Button
                size="sm"
                onClick={() => handleConfirm(order.id)}
                className="text-sm"
              >
                Confirm Order
              </Button>
            ) : (
              <div className="flex items-center text-green-600 text-sm">
                <CheckCircle className="w-4 h-4 mr-1" />
                Order Confirmed
              </div>
            )}
            <Package className="w-5 h-5 text-muted-foreground" />
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
