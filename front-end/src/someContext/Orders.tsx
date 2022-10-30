import { createContext, FC, ReactNode, useContext, useState } from "react";

interface DataProps {
    _id: string,
    img: string,
    name: string,
    price: number,
    brand: string,
    __v?: string | number,
}

interface Provider {
    children: JSX.Element
}

const Orders = createContext<{ } | undefined>(undefined);

export const OrdersProvider = ({ children }: Provider) => {
    const [products, setProducts] = useState<DataProps[] | []>([]);
    return (
        <Orders.Provider value={{ products, setProducts }}>
            { children }
        </Orders.Provider>
    )
}

export const useOrders = () => useContext(Orders);