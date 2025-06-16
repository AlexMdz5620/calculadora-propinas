import { useState } from "react"
import type { MenuItem, OrderType } from "../types"


export default function useOrder() {
    const [order, setOrder] = useState<OrderType[]>([]);
    const [tip, setTip] = useState(0);

    const addItem = (item: MenuItem) => {
        const itemExist = order.find(orderItem => orderItem.id === item.id);
        if (itemExist) {
            const updateItem = order.map(orderItem => orderItem.id === item.id
                ? { ...orderItem, quantity: orderItem.quantity + 1 }
                : orderItem
            );
            setOrder(updateItem);
        } else {
            const newOrder: OrderType = { ...item, quantity: 1 };
            setOrder([...order, newOrder]);
        }
    }

    const removeItem = (id: MenuItem['id']) => {
        setOrder(order.filter(item => item.id !== id));
    }

    const placeOrder = () => {
        setOrder([]);
        setTip(0);
    }

    return {
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        placeOrder,
    }
}