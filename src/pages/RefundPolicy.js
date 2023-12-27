import React from 'react';
import BreadCrum from '../Component/BreadCrum';
import Meta from '../Component/Meta';

function RefundPolicy() {
  return (
    <div>
      <Meta title="Refund Policy" />
      <BreadCrum title="Refund Policy" />
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

export default RefundPolicy;
