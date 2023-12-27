import React from 'react';
import Meta from '../Component/Meta';
import BreadCrum from '../Component/BreadCrum';

function ResetPassword() {
  return (
    <div>
      <Meta title="Reset-password" />
      <BreadCrum title="Reset-password" />
      <div className="login-wrapper py-5 home-wrapper">
        <div className="container">
          <div className="auth-card">
            <h3>Reset-Password</h3>
            <form action="">
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="form-control"
                />
              </div>
              <div>
                <input
                  type="password"
                  name="confirmpassword"
                  placeholder="Confirm-password"
                  className="form-control"
                />
              </div>
              <div>
                <div className="flex justify-center gap-4 items-center">
                  <button className="button border-0">Reset-password</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
