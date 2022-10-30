import "./BagStyle.scss";
import React from 'react';
import OrderProduct from "./BagBuild/OrderProduct";

const Bag: React.FC = () => {
  return (
    <section className='bag-section'>
        <div className="bag-section__container">
            <h1 className="bag-section__container__title">Your list</h1>
            <div className="bag-section__container__content">
                {/* <OrderProduct /> */}
            </div>
        </div>
    </section>
  )
}

export default Bag