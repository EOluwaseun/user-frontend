import React from 'react';
import addidas from '../assets/images/addidas2.webp';
import addidasLogo from '../assets/images/addiLogo.webp';
import ReactStars from 'react-rating-stars-component';
import { BiSearch } from 'react-icons/bi';
import { Link, useLocation } from 'react-router-dom';

function ProductCard(props) {
  //this will location of all d card on every page location on navition
  const location = useLocation();
  const { grid } = props;
  // console.log(location);
  return (
    // if pathname location of pathname is /store, display it according ot grid and if not display grid-2
    <>
      <div
        className={`${
          location.pathname === '/product' ? `gr-cols-${grid}` : 'grid-cols-2'
        }`}
      >
        <Link
          to={`${
            location.pathname === '/'
              ? '/product/:id'
              : location.pathname === '/product/:id'
              ? '/product/:id'
              : ':id'
          }`}
          className="product-card relative"
        >
          <div className="wishlist-icon absolute">
            <BiSearch />
          </div>
          <div className="product-image">
            <img src={addidas} alt="alt-img" />
            <img src={addidasLogo} alt="alt-img" />
          </div>
          <div className="product-details ">
            <h6 className="brand">Mavels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={30}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`${grid === 12 ? 'block' : 'hidden'}`}>
              Kids headphones bulk 10 multi colored for students Kids headphones
              bulk 10 multi colored for students Kids headphones bulk 10 multi
              colored for students
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar absolute top-[20%] right-[-25px] bg-white p-2">
            <div className="flex flex-col gap-2 items-center">
              <Link>
                <BiSearch />
              </Link>
              <Link>
                <BiSearch />
              </Link>
              <Link>
                <BiSearch />
              </Link>
              <Link>
                <BiSearch />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={`${
          location.pathname === '/product' ? `gr-cols-${grid}` : 'grid-cols-2'
        }`}
      >
        <Link
          to={`${
            location.pathname === '/'
              ? '/product/:id'
              : location.pathname === '/product/:id'
              ? '/product/:id'
              : ':id'
          }`}
          className="product-card relative"
        >
          <div className="wishlist-icon absolute">
            <BiSearch />
          </div>
          <div className="product-image">
            <img src={addidas} alt="alt-img" />
            <img src={addidasLogo} alt="alt-img" />
          </div>
          <div className="product-details ">
            <h6 className="brand">Mavels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={30}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`${grid === 12 ? 'block' : 'hidden'} `}>
              Kids headphones bulk 10 multi colored for students Kids headphones
              bulk 10 multi colored for students Kids headphones bulk 10 multi
              colored for students
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar absolute top-[20%] right-[-25px] bg-white p-2">
            <div className="flex flex-col gap-2 items-center">
              <Link>
                <BiSearch />
              </Link>
              <Link>
                <BiSearch />
              </Link>
              <Link>
                <BiSearch />
              </Link>
              <Link>
                <BiSearch />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default ProductCard;
