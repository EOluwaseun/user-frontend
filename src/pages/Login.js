import React from 'react';
import Meta from '../Component/Meta';
import BreadCrum from '../Component/BreadCrum';
import { Link } from 'react-router-dom';
import CustomInput from '../Component/CustomInput';

function Login() {
  return (
    <div>
      <Meta title="Login" />
      <BreadCrum title="Login" />
      <div className="login-wrapper py-5 home-wrapper">
        <div className="container">
          <div className="auth-card">
            <h3>Login</h3>
            <form action="">
              <CustomInput
                type="email"
                name="email"
                placeholder="Email"
                className="form-control"
              />
              <CustomInput
                type="password"
                name="password"
                placeholder="Password"
                className="form-control"
              />

              <div>
                <Link to="/forgot-password" className="text-blue-500">
                  Forgot Password
                </Link>
                <div className="flex justify-center gap-4 items-center">
                  <button className="button border-0">Login</button>
                  <Link to="/register">
                    <button className="button signup text-white">SignUp</button>
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

export default Login;
