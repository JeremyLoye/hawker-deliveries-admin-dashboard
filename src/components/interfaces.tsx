import React from "react";
import { Moment } from "moment";

export interface Listing {
  address: string;
  code: string;
  date: string;
  image: string;
  meal: string;
  name: string;
  orderAvailable: boolean;
  stalls: Stall[];
  message: string;
}

export interface Stall {
  available: boolean;
  food: Food[];
  image: string;
  name: string;
  stallId: string;
  minQty: number;
  minPrice: number;
  type: any[]
}

export interface Food {
  available: boolean;
  description: string;
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

export interface CartItem {
  id: string;
  stallId: string;
  name: string;
  price: number;
  margin: number;
  quantity: number;
}

export interface Transaction {
  _id: string;
  awsId: string;
  cart: CartItem[];
  date: string;
  dateTime: string;
  meal: string;
  paid: boolean;
  paymentMethod: string;
  paymentUsername: string;
  totalPrice: number;
}

interface Payment {
  method: string;
  username: string;
}

export interface User {
  awsId: string;
  dateJoined: string;
  email: string;
  name: string;
  phone: string;
  paymentInfo: Payment[];
}