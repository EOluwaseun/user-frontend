import React from 'react';
import BreadCrum from '../Component/BreadCrum';
import Meta from '../Component/Meta';

function ShippingPolicy() {
  return (
    <div>
      <Meta title="Shipping Policy" />
      <BreadCrum title="Shipping Policy" />
      <section className="policy-wrapper py-5 home-wrapper">
        <div className="container">
          <div>
            <div className="policy"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ShippingPolicy;
