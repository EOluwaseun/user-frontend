import React from 'react';
import Meta from '../Component/Meta';
import BreadCrum from '../Component/BreadCrum';
import { Link } from 'react-router-dom';
import CustomInput from '../Component/CustomInput';

function Register() {
  return (
    <div>
      <Meta title="Register" />
      <BreadCrum title="Register" />
      <div className="login-wrapper py-5 home-wrapper">
        <div className="container">
          <div className="auth-card">
            <h3>SignUp</h3>
            <form action="">
              <CustomInput
                type="name"
                name="name"
                placeholder="Name"
                className="form-control"
              />
              <CustomInput
                type="email"
                name="email"
                placeholder="Email"
                className="form-control"
              />
              <CustomInput
                type="tel"
                name="mobile"
                placeholder="Mobile"
                className="form-control"
              />
              <CustomInput
                type="password"
                name="password"
                placeholder="Password"
                className="form-control"
              />
              <CustomInput
                type="name"
                name="name"
                placeholder="Name"
                className="form-control"
              />
              <div>
                <div className="flex justify-center gap-4 items-center">
                  <button className="button border-0">SignUp</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
