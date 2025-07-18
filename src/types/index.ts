export interface Vegetable {
  id: string;
  name: string;
  price: number;
  image: string;
  unit: string;
  description?: string;
}

export interface CartItem extends Vegetable {
  quantity: number;
}

export interface User {
  id: string;
  email: string;
  name?: string;
}

export interface Order {
  id: string;
  userId: string;
  customerName: string;
  items: CartItem[];
  subtotal: number;
  deliveryCharge: number;
  total: number;
  status: 'pending' | 'confirmed' | 'delivered';
  createdAt: Date;
}