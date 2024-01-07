import React, { useEffect } from 'react';
import Meta from '../Component/Meta';
import BreadCrum from '../Component/BreadCrum';
import addidas from '../assets/images/trainer.jpg';
import { GiCancel } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';
import { getProductWhislist } from '../features/users/userSlice';

function Wishlist() {
  const dispatch = useDispatch();

  // once this page loads, it dispatch d wishlist to the user auth

  useEffect(() => {
    getProductWhislistFromdb();
  }, []);

  const getProductWhislistFromdb = () => {
    dispatch(getProductWhislist());
  };

  // get d wishlist from user auth
  const wishlistState = useSelector((state) => state.auth.wishlist.whishlist);
  console.log(wishlistState);
  return (
    <div>
      <Meta title={'Wishlist'} />
      <BreadCrum title="Wishlist" />
      <div className="wishlist-wrapper home-wrapper py-5">
        <div className="container">
          <div className="flex flex-col">
            <div className="wishlist-card-img relative w-[300px] h-[250px]">
              <div className="absolute cursor-pointer">
                <GiCancel />
              </div>
              <img src={addidas} alt="whislist" className="w-[100%] h-[100%]" />
            </div>
            <div className="title mt-2">
              <h5>Honor Ti 7.0 6g RAM 8 GB ROM 1inch with WIFI</h5>
              <h6 className="price">$100</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
