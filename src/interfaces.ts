interface Food {
    name: string
}

interface Category {
    name: string
}

interface Items {
    value: Food[]
    increment(food: Food): void
    decrement(food: Food): void
    reset(): void
}

export type {
    Food,
    Category,
    Items
}
