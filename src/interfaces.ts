interface Product {
    id: string
    name: string
    image: string
    price: number
}

interface Category {
    name: string
    products: string[]
}

interface Items {
    value: Product[]
    increment(product: Product): void
    decrement(product: Product): void
    reset(): void
}

export type {
    Product,
    Category,
    Items
}
