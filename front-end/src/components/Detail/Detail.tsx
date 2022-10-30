import "./DetailStyle.scss";
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useGetProductsData } from "../Functions/DataAction";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { useOrders } from "../../someContext/Orders";

interface getDataProps {
    _id: string,
    img: string,
    name: string,
    price: number,
    brand: string,
    __v?: string | number,
}

const Detail: React.FC = () => {
    const { id } = useParams();
    const [count, setCount] = useState<number>(0);
    const { products, setProducts } = useOrders();
    const [product, setProduct] = useState<getDataProps>();
    const data = useGetProductsData(`http://localhost:5000/products/${id}`);
    
    const reduceCount = () => {
        if(count === 0) return;
        setCount(count - 1);
    }

    const inBag = () => {
        if(count === 0) return;
        setProducts({...products, ...product, amount: count});
    }

    useEffect(() => {
        (async() => {
            try {
                const aProduct = await data;
                setProduct(aProduct[0]);
            } catch (error) {
                console.log("error of Detail", error);
            }
        })()
    }, [data])
    return (
        <section className='detail-section'>
            <div className="detail-section__container">
                <img src={product?.img} alt="" />
                <div className="detail-section__container__content">
                    <h1>{product?.name}</h1>
                    <div className='product-amount'>
                        <h2>{count}</h2>
                        <div>
                            <button onClick={() => setCount(count + 1)}>
                                <AiOutlineArrowUp />
                            </button>
                            <button onClick={reduceCount}>
                                <AiOutlineArrowDown />
                            </button>
                        </div>
                        <h2>{product?.price}</h2>
                    </div>
                    <button onClick={inBag}>Add to List</button>
                </div>
            </div>
        </section>
    )
}

export default Detail