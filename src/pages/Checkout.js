import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import addidas from '../assets/images/trainer.jpg';
import Container from '../Component/Container';
import CustomInput from '../Component/CustomInput';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useSelector } from 'react-redux';

let shippingSchema = yup.object({
  firstName: yup.string().required('First Name is Required'),
  lastName: yup.string().required('Last Name is Required'),
  address: yup.string().required('Address Details are Required'),
  state: yup.string().required('State is Required'),
  city: yup.string().required('City is Required'),
  country: yup.string().required('Country is Required'),
  pinCode: yup.number().required('PinCode is Required'),
  other: yup.string(),
});

function Checkout() {
  const [totalAmount, setTotalAmount] = useState(null);
  const [shippingInfo, setShippingInfo] = useState(null);
  const cartState = useSelector((state) => state?.auth?.getProductCarts);
  console.log(cartState);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      address: '',
      state: '',
      city: '',
      country: '',
      pinCode: '',
      other: '',
    },
    validationSchema: shippingSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values));
      setShippingInfo(values);
    },
  });

  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < cartState?.length; index++) {
      sum = sum + Number(cartState[index].quantity) * cartState[index].price;
      // console.log(sum);
      setTotalAmount(sum);
    }
  }, [cartState]);

  return (
    <>
      <Container className="checkout-wrapper py-5">
        <div className="container">
          <div className="checkout-left-data">
            <h3 className="wesites-name">Dev corner</h3>
            <nav>
              <ol className="flex">
                <li>
                  <Link href="/cart">Cart</Link>
                </li>
                &nbsp;/<li>information</li>
                &nbsp;/
                <li>
                  <Link to="/shipping">Shipping</Link>
                </li>
                &nbsp;/
                <li>
                  <Link to="/payment">payment</Link>
                </li>
              </ol>
            </nav>
            <h4>Contact information</h4>
            <p className="user-detail">Sean (sean@gmail.com)</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <form
                  onSubmit={formik.handleSubmit}
                  action=""
                  className="flex gap-4 justify-between flex-wrap"
                >
                  <div className="w-[100%]">
                    <select className="form-control form-select w-[100%]">
                      <option
                        name="country"
                        onChange={formik.handleChange('country')}
                        onBlur={formik.handleBlur('country')}
                        value={formik.values.country}
                        selected
                        disabled
                      >
                        Select Country
                      </option>
                      <option value="Nigeria">Nigeria</option>
                    </select>
                    <div className="text-red-500 text-start text-[.8rem]">
                      {formik.touched.country && formik.errors.country ? (
                        <div>{formik.errors.country}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="flex-1">
                    <CustomInput
                      type="text"
                      placeholder="First Name"
                      className="form-control w-[100%] border"
                      name="firstName"
                      onChange={formik.handleChange('firstName')}
                      onBlur={formik.handleBlur('firstName')}
                      value={formik.values.firstName}
                    />
                    <div className="text-red-500 text-start text-[.8rem]">
                      {formik.touched.firstName && formik.errors.firstName ? (
                        <div>{formik.errors.firstName}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="form-control w-[100%] border"
                      name="lastName"
                      onChange={formik.handleChange('lastName')}
                      onBlur={formik.handleBlur('lastName')}
                      value={formik.values.lastName}
                    />
                    <div className="text-red-500 text-start text-[.8rem]">
                      {formik.touched.lastName && formik.errors.lastName ? (
                        <div>{formik.errors.lastName}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="w-[100%]">
                    <input
                      type="text"
                      placeholder="Address"
                      className="form-control w-[100%] border"
                      name="address"
                      onChange={formik.handleChange('address')}
                      onBlur={formik.handleBlur('address')}
                      value={formik.values.address}
                    />
                  </div>
                  <div className="text-red-500 text-start text-[.8rem]">
                    {formik.touched.address && formik.errors.address ? (
                      <div>{formik.errors.address}</div>
                    ) : null}
                  </div>
                  <div className="w-[100%]">
                    <input
                      type="text"
                      placeholder="Apartment Suite etc"
                      className="form-control w-[100%] border"
                      name="other"
                      onChange={formik.handleChange('other')}
                      onBlur={formik.handleBlur('other')}
                      value={formik.values.other}
                    />
                    <div className="text-red-500 text-start text-[.8rem]">
                      {formik.touched.other && formik.errors.other ? (
                        <div>{formik.errors.other}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <input
                      type="text"
                      placeholder="City"
                      className="form-control w-[100%] border"
                      name="city"
                      onChange={formik.handleChange('city')}
                      onBlur={formik.handleBlur('city')}
                      value={formik.values.city}
                    />
                    <div className="text-red-500 text-start text-[.8rem]">
                      {formik.touched.city && formik.errors.city ? (
                        <div>{formik.errors.city}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <select className="form-control form-select w-[100%]">
                      <option
                        name="state"
                        onChange={formik.handleChange('state')}
                        onBlur={formik.handleBlur('state')}
                        value={formik.values.state}
                        selected
                        disabled
                      >
                        Select State
                      </option>
                      <option value="Lagos">Lagos</option>
                    </select>
                    <div className="text-red-500 text-start text-[.8rem]">
                      {formik.touched.state && formik.errors.state ? (
                        <div>{formik.errors.state}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <input
                      type="text"
                      placeholder="Zipcode"
                      className="form-control w-[100%] border"
                      name="pinCode"
                      onChange={formik.handleChange('pinCode')}
                      onBlur={formik.handleBlur('pinCode')}
                      value={formik.values.pinCode}
                    />
                    <div className="text-red-500 text-start text-[.8rem]">
                      {formik.touched.pinCode && formik.errors.pinCode ? (
                        <div>{formik.errors.pinCode}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="w-[100%]">
                    <div className="flex justify-between items-center">
                      <Link to="/cart">
                        <button>Return ro Cart</button>
                      </Link>
                      <Link to="/shipping">
                        <button>Continiue Shipping</button>
                      </Link>
                    </div>
                    <button className="btn my-4" type="submit">
                      Place Order
                    </button>
                  </div>
                </form>
              </div>
              <div className="">
                {cartState &&
                  cartState?.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="flex gap-2 items-center justify-between mb-4 relative"
                      >
                        <span
                          style={{ top: '-10px', right: '2px' }}
                          className="absolute bg-yellow-500 rounded p-2"
                        >
                          {item?.quantity}
                        </span>
                        <img
                          src={addidas}
                          alt="ima"
                          className="w-[150px] h-[150px]"
                        />
                        <div>
                          <h5>{item?.productId?.title}</h5>
                          <h4>
                            <ul className="color p-0">
                              color:
                              <li
                                style={{ backgroundColor: item?.color?.title }}
                              ></li>
                            </ul>
                          </h4>
                        </div>
                        <div>
                          <h5>{item?.price * item?.quantity}</h5>
                        </div>
                      </div>
                    );
                  })}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p>SubTotal</p>
                    <p>${totalAmount ? totalAmount : 0}</p>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <p>Shipping</p>
                    <p>$5</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-bold">Total</h3>
                    <h4 className="text-2xl font-bold">
                      ${totalAmount ? totalAmount + 5 : 0}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Checkout;
