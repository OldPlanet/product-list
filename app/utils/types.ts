export interface Product {
  code: number
  name: string
  imageUrl: string
  dropRatio: number
  price: number
  countOfPrices: number
  followCount: number
  url: string
}

export interface ProductDetail {
  mkName: string
  productName: string
  badge: string
  rating: number
  imageUrl: string
  storageOptions: string[]
  countOfPrices: number
  price: number
  freeShipping: boolean
  lastUpdate: string
}