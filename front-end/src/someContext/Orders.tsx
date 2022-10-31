import { createContext, Dispatch, FC, ReactNode, SetStateAction, useContext, useState } from "react";
import { DataProps } from "../components/Types/DataType";

interface Provider {
    children: JSX.Element
}

type createContextTyoe = {
    products: DataProps[],
    setProducts: Dispatch<SetStateAction<DataProps[]>> | []
}

const Orders = createContext<createContextTyoe>({
    products: [],
    setProducts : []
}

);

export const OrdersProvider = ({ children }: Provider) => {
    const [products, setProducts] = useState<DataProps[] | []>([]);
    return (
        <Orders.Provider value={{ products, setProducts }}>
            {children}
        </Orders.Provider>
    )
}

export const useOrders = () => useContext(Orders);