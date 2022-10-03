interface Identification {
    id: string
}

interface Name {
    name: string
}

interface Product extends Identification, Name {
    image: string
    price: number
}

interface Category extends Name {
    products: string[]
}

interface ProductTally extends Identification {
    tally: number
}

interface Items {
    value: ProductTally[]
    findProduct(id: string): ProductTally
    addProduct(id: string): void
    removeProduct(id: string): void
    reset(): void
}

export type {
    Product,
    Category,
    Items,
    ProductTally
}
