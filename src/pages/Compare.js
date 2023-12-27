import React from 'react';
import Meta from '../Component/Meta';
import BreadCrum from '../Component/BreadCrum';
import addidas from '../assets/images/trainer.jpg';
import { GiCancel } from 'react-icons/gi';
import Color from '../Component/Color';

function Compare() {
  return (
    <div>
      <Meta title="Compare" />
      <BreadCrum title="Compare" />
      <div className="compare-product-wrapper py-5 home-wrapper">
        <div className="container">
          <div>
            <div className="compare-product-card cursor-pointer">
              <div className="absolute ">
                <GiCancel size={25} />
              </div>
              <div className="product-card-img w-[100%] h-[60%] ">
                <img
                  src={addidas}
                  alt="compare"
                  className="w-full h-[100%] bg-contain"
                />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Honor Ti 7.0 6g RAM 8 GB ROM 1inch with WIFI
                </h5>
                <h6 className="price mb-3">$100</h6>

                <div>
                  <div className="product-detail mt-2">
                    <h5>Brand</h5>
                    <p>Mavels</p>
                  </div>
                  <div className="product-detail mt-2">
                    <h5>Type</h5>
                    <p>Watch</p>
                  </div>
                  <div className="product-detail mt-2">
                    <h5>Availability</h5>
                    <p>In-stock</p>
                  </div>{' '}
                  <div className="product-detail mt-2">
                    <h5>Color</h5>
                    <Color />
                  </div>{' '}
                  <div className="product-detail mt-2">
                    <h5>Size</h5>
                    <div>
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Compare;
