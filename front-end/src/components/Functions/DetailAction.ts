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

export const useGetDetailData = async (path: string) => {
    const [data, setData] = useState<getDataProps>();

    useEffect(() => {
        (async() => {
            const products = await axios.get(path);
            setData(products.data[0]);
            return () => products;
        })()
    }, [])
    return data;
}