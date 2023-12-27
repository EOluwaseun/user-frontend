import React from 'react';
import { Link } from 'react-router-dom';
import addidas from '../assets/images/trainer.jpg';
import Container from '../Component/Container';
import CustomInput from '../Component/CustomInput';

function Checkout() {
  return (
    <>
      <Container class1="checkout-wrapper py-5">
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
                  action=""
                  className="flex gap-4 justify-between flex-wrap"
                >
                  <div className="w-[100%]">
                    <select className="form-control form-select w-[100%]">
                      <option value="" selected disabled>
                        Select Country
                      </option>
                    </select>
                  </div>
                  <div className="flex-1">
                    <CustomInput
                      type="text"
                      placeholder="First Name"
                      className="form-control w-[100%] border"
                    />
                  </div>
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="form-control w-[100%] border"
                    />
                  </div>
                  <div className="w-[100%]">
                    <input
                      type="text"
                      placeholder="Address"
                      className="form-control w-[100%] border"
                    />
                  </div>
                  <div className="w-[100%]">
                    <input
                      type="text"
                      placeholder="Apartment Suite etc"
                      className="form-control w-[100%] border"
                    />
                  </div>
                  <div className="flex-grow">
                    <input
                      type="text"
                      placeholder="City"
                      className="form-control w-[100%] border"
                    />
                  </div>
                  <div className="flex-grow">
                    <select
                      name=""
                      className="form-control form-select w-[100%]"
                    >
                      <option value="" selected disabled>
                        Select State
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow">
                    <input
                      type="text"
                      placeholder="Zipcode"
                      className="form-control w-[100%] border"
                    />
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
                  </div>
                </form>
              </div>
              <div className="">
                <div className="flex gap-2 items-center justify-between mb-4 relative">
                  <span
                    style={{ top: '-10px', right: '2px' }}
                    className="absolute bg-yellow-500 rounded p-2"
                  >
                    1
                  </span>
                  <img
                    src={addidas}
                    alt="ima"
                    className="w-[150px] h-[150px]"
                  />
                  <div>
                    <h5>$100</h5>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p>SubTotal</p>
                    <p>$1000</p>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <p>Shipping</p>
                    <p>$1000</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-bold">Total</h3>
                    <h4 className="text-2xl font-bold">$1000</h4>
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
