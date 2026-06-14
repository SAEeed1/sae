export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  icon: string;
  admin: string;
  rating?: number;
  reviews?: number;
}

export interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  company: string;
  productCategory: string;
  description: string;
  budget: string;
  timeline: string;
  status: 'pending' | 'approved' | 'completed';
  createdAt: Date;
}

export interface Admin {
  id: string;
  name: string;
  email: string;
  company: string;
  avatar?: string;
  productsCount: number;
}
