export type MenuItem = {
    id: number;
    name: string;
    price: number;
}

export type OrderType = MenuItem & {
    quantity: number;
}