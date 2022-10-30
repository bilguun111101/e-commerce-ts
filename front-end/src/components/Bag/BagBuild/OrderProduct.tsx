import React from 'react';
import "./OrderStyle.scss";
import { IoCloseSharp } from "react-icons/io5";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

interface Props {
  img: string,
  name: string,
  total: number,
  brand: string,
}

const OrderProduct: React.FC = () => {
  return (
    <div className="order-section">
        <img src="https://lp2.hm.com/hmgoepprod?set=source[/40/71/4071b4a39844344e1de770b4a494ba7e3078219d.jpg],origin[dam],category[men_tshirtstanks_shortsleeve],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]" alt="" />
        <button>
          <IoCloseSharp />
        </button>
        <div className="order-section__document">
          <h1>T-Shirt</h1>
          <h3>brand: nick</h3>
          <div className='total-section'>
            <RiMoneyDollarCircleFill />
            <p>15</p>
          </div>
        </div>
    </div>
  )
}

export default OrderProduct