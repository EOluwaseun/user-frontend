import React from 'react';
import Meta from '../Component/Meta';
import BreadCrum from '../Component/BreadCrum';

function TermsAndCondition() {
  return (
    <div>
      <Meta title={'Terms and Condition'} />
      <BreadCrum title="Terms and Condition" />
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

export default TermsAndCondition;
