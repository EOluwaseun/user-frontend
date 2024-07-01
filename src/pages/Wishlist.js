import React, { useEffect } from 'react';
import Meta from '../Component/Meta';
import BreadCrum from '../Component/BreadCrum';
import addidas from '../assets/images/trainer.jpg';
import { GiCancel } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';
import { getProductWhislist } from '../features/users/userSlice';
import { addTowishlist } from '../features/products/productSlice';

function Wishlist() {
  const dispatch = useDispatch();
  useEffect(() => {
    getProductWhislistFromdb();
  }, []);

  const getProductWhislistFromdb = () => {
    dispatch(getProductWhislist());
  };

  // get d wishlist from user auth
  const wishlistState = useSelector((state) => state.auth?.wishlist?.whishlist);
  const wishlistStates = useSelector((state) => state.auth?.wishlist);

  // console.log(wishlistState);
  // console.log(wishlistStates);

  const removeWishList = (id) => {
    dispatch(addTowishlist(id));
    setTimeout(() => {
      dispatch(getProductWhislist());
    }, 300);
  };
  return (
    <div>
      <Meta title={'Wishlist'} />
      <BreadCrum title="Wishlist" />
      <div className="wishlist-wrapper home-wrapper py-5">
        <div className="container">
          <div className="flex flex-row gap-4">
            {wishlistState && wishlistState?.length === 0 && (
              <div className="mx-auto py-4">No item in the wishlist</div>
            )}
            {wishlistState &&
              wishlistState?.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="wishlist-card-img relative w-[300px] h-[250px]">
                      <div
                        onClick={() => {
                          removeWishList(item?._id);
                        }}
                        className="absolute cursor-pointer"
                      >
                        <GiCancel />
                      </div>
                      <img
                        src={
                          item?.images[0]?.url ? item?.images[0]?.url : addidas
                        }
                        alt="whislist"
                        className="w-[100%] h-[100%]"
                      />
                    </div>
                    <div className="title mt-2">
                      <p
                        dangerouslySetInnerHTML={{ __html: item?.description }}
                      ></p>
                      <h6 className="price">${item?.price}</h6>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
