import React from 'react';
import addidas from '../assets/images/trainer.jpg';
import ReactStars from 'react-rating-stars-component';
import { Link, useNavigate } from 'react-router-dom';

function SpecialProduct(props) {
  const { title, brand, sold, quantity, id, totalsrating, price } = props;
  return (
    <div className="">
      <div className="special-product-card rounded-md flex justify-between gap-4  bg-white">
        <div className="special-product-img">
          <img src={addidas} alt="special_product w-[100%] h-[100%]" />
        </div>
        <div className="special-product-content">
          <h5 className="brand">Mavels</h5>
          <h6 className="title">{title}</h6>
          {/* ratings */}
          <ReactStars
            count={5}
            size={30}
            value={3}
            edit={false}
            activeColor="#ffd700"
          />
          <p className="price">
            <span className="">
              $1000 &nbsp;<strike>$1200</strike>
            </span>
          </p>
          <div className="discount-till flex gap-2">
            <p>
              <b>5 Days</b>
            </p>
            <div className="flex gap-2">
              <span className="bg-red-500 text-center w-[20px] h-[20px] rounded-full">
                1
              </span>
              <span className="bg-red-500 text-center w-[20px] h-[20px] rounded-full">
                2
              </span>
              <span className="bg-red-500 text-center w-[20px] h-[20px] rounded-full">
                3
              </span>
            </div>
          </div>
          <div className="my-2">
            <b>Product:{quantity}</b>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 ">
              {/* <div
                className="bg-green-600 h-2.5 rounded-full"
                style={{ width: '50%' }}
              ></div> */}
              <div
                className="bg-green-600 h-2.5 rounded-full"
                role="progressbar"
                style={{ width: quantity / quantity + sold * 100 + '%' }}
                aria-valuenow={quantity / quantity + sold * 100}
                aria-valuemin={quantity}
                aria-valuemax={sold + quantity}
              ></div>
            </div>
          </div>
          <Link>
            <Link to={'/product/' + id} className="link">
              View
            </Link>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SpecialProduct;
