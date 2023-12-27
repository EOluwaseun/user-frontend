import React from 'react';
import Meta from '../Component/Meta';
import BreadCrum from '../Component/BreadCrum';
import { Link } from 'react-router-dom';
import CustomInput from '../Component/CustomInput';

function ForgotPassword() {
  return (
    <div>
      <Meta title="Forgot-password" />
      <BreadCrum title="Forgot-password" />
      <div className="login-wrapper py-5 home-wrapper">
        <div>
          <div className="auth-card">
            <h3>Reset Password</h3>
            <p className="text-center my-2">
              we will send you an email to rest your password
            </p>
            <form action="">
              <CustomInput
                type="email"
                name="email"
                placeholder="Email"
                className="form-control"
              />

              <div>
                <div className="flex justify-center gap-4 items-center flex-col">
                  <button className="button border-0">Submit</button>
                  <Link to="/login">
                    <button className="button">Cancel</button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
