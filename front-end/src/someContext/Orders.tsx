import { createContext, FC } from "react";

interface DataProps {
    _id: string,
    img: string,
    name: string,
    price: number,
    brand: string,
    __v?: string | number,
}

type Props = {
    orders: DataProps,
}

interface Provider {
    children: JSX.Element
}

const Orders = createContext<Props | null>(null);

export const OrdersProvider = ({ children }: Provider) => {
    return (
        <Orders.Provider value={{  }}>
            { children }
        </Orders.Provider>
    )
}