import React from 'react';
import addidas from '../assets/images/addidas2.webp';
import addidasLogo from '../assets/images/addiLogo.webp';
import ReactStars from 'react-rating-stars-component';
import { BiSearch } from 'react-icons/bi';
import { FcLike } from 'react-icons/fc';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addTowishlist } from '../features/products/productSlice';

function ProductCard(props) {
  const { grid, data } = props;
  const dispatch = useDispatch();

  const location = useLocation();
  const addToWish = (id) => {
    alert(id);
    dispatch(addTowishlist(id));
  };
  return (
    <>
      {data?.map((item, index) => {
        return (
          <div
            key={index}
            className={`${
              location.pathname === '/product'
                ? `gr-cols-${grid}`
                : 'grid-cols-2'
            }`}
          >
            <Link
              // to={`${
              //   location.pathname === '/'
              //     ? '/product/:id'
              //     : location.pathname === '/product/:id'
              //     ? '/product/:id'
              //     : ':id'
              // }`}
              className="product-card relative"
            >
              <div
                className="wishlist-icon absolute"
                onClick={(e) => addToWish(item?._id)}
              >
                <FcLike />
              </div>
              <div className="product-image">
                <img src={addidas} alt="alt-img" />
                <img src={addidasLogo} alt="alt-img" />
              </div>
              <div className="product-details ">
                <h6 className="brand">{item?.brand}</h6>
                <h5 className="product-title">{item?.title}</h5>
                <ReactStars
                  count={5}
                  size={30}
                  value={item?.ratings.toString()}
                  edit={false}
                  activeColor="#ffd700"
                />
                <p
                  className={`${grid === 12 ? 'block' : 'hidden'}`}
                  dangerouslySetInnerHTML={{ __html: item?.description }}
                ></p>
                <p className="price">${item?.price}</p>
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
        );
      })}
    </>
  );
}

export default ProductCard;
