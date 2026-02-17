import { ObjectId } from "mongodb";

export interface Item {
  _id: ObjectId;
  title: string;
  description: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ItemClient {
  _id: string;
  title: string;
  description: string;
  price: number;
  createdAt: string;
  updatedAt: string;
}

export interface CreateItemDTO {
  title: string;
  description: string;
  price: number;
}

export interface UpdateItemDTO {
  title?: string;
  description?: string;
  price?: number;
}
