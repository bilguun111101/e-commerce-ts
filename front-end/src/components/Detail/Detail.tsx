import "./DetailStyle.scss";
import { useParams } from 'react-router-dom';
import { DataProps } from "../Types/DataType";
import React, { useEffect, useState } from 'react';
import { useOrders } from "../../someContext/Orders";
import { useGetDetailData } from "../Functions/DetailAction";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

const Detail: React.FC = () => {
    const { id } = useParams();
    const [count, setCount] = useState<number>(0);
    const { products, setProducts } = useOrders();
    const [product, setProduct] = useState<DataProps>();
    const data = useGetDetailData(`http://localhost:5000/products/${id}`);
    
    const reduceCount = () => {
        if(count === 0) return;
        setCount(count - 1);
    }

    const inBag = () => {
        if(count === 0) return;
        const order = { ...product, amount: count };
        setCount(0);
    }

    useEffect(() => {
        (async() => {
            try {
                setProduct(await data);
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
                    </div>
                    <h2>{product?.price}</h2>
                    <button onClick={inBag}>Add to List</button>
                </div>
            </div>
        </section>
    )
}

export default Detail