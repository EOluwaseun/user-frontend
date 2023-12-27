import React from 'react';
import BreadCrum from '../Component/BreadCrum';
import Meta from '../Component/Meta';

function PrivacyPolicy() {
  return (
    <div>
      <Meta title="Privacy Policy" />
      <BreadCrum title="Privacy Policy" />
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

export default PrivacyPolicy;
