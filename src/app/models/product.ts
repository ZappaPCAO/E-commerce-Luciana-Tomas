import { Category } from "./category"

export interface Product {
    id?: Number,
    title: String,
    price: Number,
    description: String,
    categoryId?: Number,
    category: Category,
    images: String []
}