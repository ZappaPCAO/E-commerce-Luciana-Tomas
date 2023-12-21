import { Category } from "./category"

export interface Product {
    id?: Number,
    cant?: number,
    title: String,
    price: number,
    description: String,
    categoryId?: Number,
    category: Category,
    images: String []
}