import React from 'react'
import "../ProductsStyle.scss";
import { useNavigate } from 'react-router-dom';

interface Props {
  data: {
    _id: string,
    img: string,
    name: string,
    price: number,
    brand: string,
    __v?: string | number,
  }
}

const Product: React.FC<Props> = props => {
  const { data } = props;
  const navigate = useNavigate();
  const navigateTo: (path: string) => void = (path) => {
    navigate(path);
  }
  return (
    <div className='product-section' onClick={() => navigateTo(data._id)}>
        <img src={data.img} alt="" />
        <div className='product-section__content'>
            <h1>{`$${data.price}`}</h1>
        </div>
    </div>
  )
}

export default Product