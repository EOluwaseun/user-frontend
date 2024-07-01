import React, { useEffect, useState } from 'react';
import BreadCrum from '../Component/BreadCrum';
import Meta from '../Component/Meta';
import { AiFillDelete } from 'react-icons/ai';
import addidas from '../assets/images/trainer.jpg';
import { Link } from 'react-router-dom';
import Container from '../Component/Container';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteACartProduct,
  getUserCart,
  updateACartProduct,
} from '../features/users/userSlice';

function Cart() {
  const dispatch = useDispatch();
  const [productUpdateDetail, setProductUpdateDetail] = useState(null);
  const [totalAmount, setTotalAmount] = useState(null);
  const userCartState = useSelector((state) => state?.auth?.getProductCarts);
  // const userCartStates = useSelector((state) => state?.auth);

  console.log(userCartState);

  useEffect(() => {
    dispatch(getUserCart());
  }, []);

  useEffect(() => {
    // updateCartProduct(productUpdateDetail);
    if (productUpdateDetail !== null) {
      dispatch(
        updateACartProduct({
          cartItemId: productUpdateDetail?.cartItemId,
          quantity: productUpdateDetail?.quantity,
        })
      );
      setTimeout(() => {
        dispatch(getUserCart());
      }, 100);
    }
  }, [productUpdateDetail]);

  // total sum of the cart
  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < userCartState?.length; index++) {
      sum =
        sum +
        Number(userCartState[index].quantity) * userCartState[index].price;
      // console.log(sum);
      setTotalAmount(sum);
    }
  }, [userCartState]);

  const deleteCartProduct = (id) => {
    dispatch(deleteACartProduct(id));
    setTimeout(() => {
      dispatch(getUserCart());
    }, 100);
  };

  // const updateCartProduct = (productUpdateDetail) => {};

  // console.log(userCartState);
  return (
    <div>
      <Meta title={'Cart'} />
      <BreadCrum title="Cart" />
      <Container class1="cart-wrapper home-wrapper">
        <div className="container">
          <div className="flex justify-between items-center cart-header py-3 cart">
            <h4 className="cart-cols-1">Product</h4>
            <h4 className="cart-cols-2">Price</h4>
            <h4 className="cart-cols-1">Quantity</h4>
            <h4 className="cart-cols-1">Total</h4>
          </div>

          {userCartState &&
            userCartState?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-between items-center cart-header py-3"
                >
                  <div className="flex gap-2">
                    <img
                      src={addidas}
                      alt="ima"
                      className="w-[150px] h-[150px]"
                    />
                    <div>
                      <p>{item?.productId.title}</p>
                      {/* <h4>color:{item?.color?.title}</h4> */}
                      <h4>
                        <ul className="color p-0">
                          color:
                          <li
                            style={{ backgroundColor: item?.color?.title }}
                          ></li>
                        </ul>
                      </h4>
                    </div>
                  </div>
                  <div className="price">{item?.productId?.price}</div>

                  <div className="flex gap-1">
                    <input
                      type="number"
                      min={1}
                      max={10}
                      name=""
                      id=""
                      value={
                        // productUpdateDetail?.quantity
                        //   ? productUpdateDetail?.quantity
                        //   :
                        item?.quantity
                      }
                      onChange={(e) =>
                        setProductUpdateDetail({
                          cartItemId: item?._id,
                          quantity: e.target.value,
                        })
                      }
                    />

                    <AiFillDelete
                      onClick={() => deleteCartProduct(item?._id)}
                    />
                  </div>
                  <div>
                    <h5>${item?.price * item.quantity}</h5>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="py-2 mt-4">
          <div className="flex justify-between items-baseline">
            <Link to="/product" className="btn">
              Continue Shopping
            </Link>
            {(totalAmount !== null || totalAmount !== 0) && (
              <div className="flex flex-col items-end">
                <h4 className="font-bold text-2xl">SubTotal: ${totalAmount}</h4>
                <p>Taxes and shipping calculated at checkout</p>
                <Link to="/checkout" className="btn">
                  Checkout
                </Link>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Cart;
