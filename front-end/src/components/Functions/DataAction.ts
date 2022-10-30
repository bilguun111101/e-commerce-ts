import axios from "axios"
import { useEffect, useState } from "react"

interface getDataProps {
    _id: string,
    img: string,
    name: string,
    price: number,
    brand: string,
    __v?: string | number,
}

export const useGetProductsData = async (path: string) => {
    const [data, setData] = useState<getDataProps[]>([]);

    useEffect(() => {
        (async() => {
            const products = await axios.get(path);
            setData(products.data);
            return () => products;
        })()
    }, [])
    return data;
}