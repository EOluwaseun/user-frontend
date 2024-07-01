import React, { useEffect } from 'react';
import Meta from '../Component/Meta';
import BreadCrum from '../Component/BreadCrum';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import CustomInput from '../Component/CustomInput';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../features/users/userSlice';

let loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email must be valid')
    .required('Email is Required'),
  password: Yup.string().required('Password is Required'),
});

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authState = useSelector((state) => state?.auth);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      dispatch(loginUser(values));
      setTimeout(() => {
        if (authState?.isSuccess) {
          navigate('/');
        }
      }, 300);
    },
  });

  // useEffect(() => {
  //   if (authState?.isSuccess) {
  //     navigate('/');
  //   } else {
  //     navigate('');
  //   }
  // });

  return (
    <div>
      <Meta title="Login" />
      <BreadCrum title="Login" />
      <div className="login-wrapper py-5 home-wrapper">
        <div className="container">
          <div className="auth-card">
            <h3>Login</h3>
            <form onSubmit={formik.handleSubmit}>
              <CustomInput
                type="email"
                name="email"
                className="form-control"
                label="Enter Email"
                id="email"
                val={formik.values.email}
                onCh={formik.handleChange('email')}
                onbl={formik.handleBlur('email')}
              />
              <div className="text-red-500 text-start text-[.8rem]">
                {formik.touched.email && formik.errors.email ? (
                  <div>{formik.errors.email}</div>
                ) : null}
              </div>
              <CustomInput
                type="password"
                name="password"
                className="form-control"
                label="Enter Password"
                id="password"
                val={formik.values.password}
                onCh={formik.handleChange('password')}
                onbl={formik.handleBlur('password')}
              />
              <div className="text-red-500 text-start text-[.8rem]">
                {formik.touched.password && formik.errors.password ? (
                  <div>{formik.errors.password}</div>
                ) : null}
              </div>
              <div>
                <Link to="/forgot-password" className="text-blue-500">
                  Forgot Password
                </Link>
                <div className="flex justify-center gap-4 items-center">
                  <button type="submit" className="bg-blue-500 border-0">
                    Login
                  </button>
                  <Link to="/register" className="btn bg-blue-500 text-white">
                    SignUp
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
