import "./ProductsStyle.scss";
import Product from './BuildProducts.tsx/Product';
import React, { useEffect, useState } from 'react';
import { useGetProductsData } from '../Functions/DataAction';

interface getDataProps {
  _id: string,
  img: string,
  name: string,
  price: number,
  brand: string,
  __v?: string | number,
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<getDataProps[]>();
  const data = useGetProductsData("http://localhost:5000/products");
  useEffect(() => {
    data.then(el => setProducts(el));
  }, [data])
  return (
    <section className='products-section'>
        <div className="products-section__container">
          {products?.map((el, idx) => <Product key={idx} data={el} />)}
        </div>
    </section>
  )
}

export default Products