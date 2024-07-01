import React, { useEffect } from 'react';
import BreadCrum from '../Component/BreadCrum';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../features/users/userSlice';

function Orders() {
  const dispatch = useDispatch();
  const orderState = useSelector((state) => state?.auth?.OrderProducts?.orders);
  console.log(orderState);

  useEffect(() => {
    dispatch(getOrders());
  }, []);
  return (
    <div>
      <BreadCrum title="My Order" />
      <div className="container">
        <div className="">
          <div>
            <div className="flex w-full border justify-between gap-4">
              <div>
                <h1 className="font-bold text-base">Order Id</h1>
              </div>
              <div>
                <h1 className="font-bold text-base">Total Amount</h1>
              </div>
              <div>
                <h1 className="font-bold text-base">
                  Total A mount after Discount
                </h1>
              </div>
              <div>
                <h1 className="font-bold text-base">Status</h1>
              </div>
            </div>
            <div>
              {orderState &&
                orderState?.map((item, index) => {
                  return (
                    <>
                      <div>
                        <div
                          key={index}
                          className="flex w-full justify-between gap-4 p-4 bg-gray-100"
                        >
                          <div>
                            <h1 className="">{item._id}</h1>
                          </div>
                          <div>
                            <h1 className="">{item.totalPrice}</h1>
                          </div>
                          <div>
                            <h1 className="">{item.totalPriceAfterDiscount}</h1>
                          </div>
                          <div>
                            <h1 className="">{item.orderStatus}</h1>
                          </div>
                        </div>
                        <div className="flex w-full justify-between gap-4 p-4 bg-gray-100">
                          <div>
                            <h1 className="font-bold text-base">
                              Product Name
                            </h1>
                          </div>
                          <div>
                            <h1 className="font-bold text-base">Quantity</h1>
                          </div>
                          <div>
                            <h1 className="font-bold text-base">Price</h1>
                          </div>
                          <div>
                            <h1 className="font-bold text-base">Color</h1>
                          </div>
                        </div>
                        <div>
                          {item.orderItems?.map((i, index) => {
                            return (
                              <div
                                key={index}
                                className="flex w-full justify-between gap-4 p-4 bg-gray-100"
                              >
                                <div>
                                  <h1 className="font-bold text-base">
                                    {i?.product?.title}
                                  </h1>
                                </div>
                                <div>
                                  <h1 className="font-bold text-base">
                                    {i?.quantity}
                                  </h1>
                                </div>
                                <div>
                                  <h1 className="font-bold text-base">
                                    {i?.price}
                                  </h1>
                                </div>
                                <div>
                                  <h1 className="font-bold text-base">
                                    <ul className="color p-0">
                                      color:
                                      <li
                                        style={{
                                          backgroundColor: i?.color?.title,
                                        }}
                                      ></li>
                                    </ul>
                                  </h1>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
