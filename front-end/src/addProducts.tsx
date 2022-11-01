import axios from 'axios';
import React, { useState } from 'react';

// const url: string = "http://localhost:5000/products";
const url = "http://localhost:5000/products";

const AddProducts: React.FC = () => {
    const [img, setImg] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [brand, setBrand] = useState<string>("");
    const [price, setPrice] = useState<number>();

    const pushData = async () => {
        try {
            const obj = {img, name, price, brand};
            const data = await axios.post(url, obj);
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div style={{ paddingTop: "14vh" }}>
        <input type="text" placeholder='image...' onChange={e => setImg(e.target.value)} />
        <input type="number" placeholder='price...' onChange={e => setPrice(+e.target.value)} />
        <input type="text" placeholder='brand...' onChange={e => setBrand(e.target.value)} /> 
        <input type="text" placeholder='name...' onChange={e => setName(e.target.value)} />
        <button onClick={pushData}>click</button>
    </div>
  )
}

export default AddProducts;