import React from 'react';
import Meta from '../Component/Meta';
import BreadCrum from '../Component/BreadCrum';
import { useLocation } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import CustomInput from '../Component/CustomInput';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../features/users/userSlice';

function ResetPassword() {
  const dispatch = useDispatch();
  const location = useLocation();
  const getToken = location.pathname.split('/')[2];

  let resetSchema = Yup.object().shape({
    password: Yup.string().required('Password is Required'),
  });

  const formik = useFormik({
    initialValues: {
      password: '',
    },
    validationSchema: resetSchema,
    onSubmit: (values) => {
      dispatch(values);
      // setTimeout(() => {
      //   if (authState?.isSuccess) {
      //     navigate('/');
      //   }
      // }, 300);
    },
  });

  return (
    <div>
      <Meta title="Reset-password" />
      <BreadCrum title="Reset-password" />
      <div className="login-wrapper py-5 home-wrapper">
        <div className="container">
          <div className="auth-card">
            <h3>Reset-Password</h3>
            <form onSubmit={formik.handleSubmit} action="">
              <div>
                <CustomInput
                  type="password"
                  name="password"
                  label="Password"
                  val={formik.values.password}
                  onCh={formik.handleChange('password')}
                  onbl={formik.handleBlur('password')}
                  className="form-control"
                />
                <div className="text-red-500 text-start text-[.8rem]">
                  {formik.touched.password && formik.errors.password ? (
                    <div>{formik.errors.password}</div>
                  ) : null}
                </div>
              </div>
              {/* <div>
                <CustomInput
                  type="password"
                  name="confirmpassword"
                  label="Confirm-password"
                  className="form-control"
                />
                 <div className="text-red-500 text-start text-[.8rem]">
                  {formik.touched.password && formik.errors.password ? (
                    <div>{formik.errors.password}</div>
                  ) : null}
                </div>
              </div> */}
              <div>
                <div className="flex justify-center gap-4 items-center">
                  <button type="submit" className="button border-0">
                    Reset-password
                  </button>
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
