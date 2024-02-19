/// <reference types="vite/client" />

export interface View {
  id: number
  name: string
  route: string
  description: string
}

export interface Category {
  id: number
  name: string
  view_id: number
  description: string
}

export interface Product {
  id: number
  name: string
  view_id: number
  category_id: number
  price: number
  description: string
}