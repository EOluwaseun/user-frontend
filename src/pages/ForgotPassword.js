import React from 'react';
import Meta from '../Component/Meta';
import BreadCrum from '../Component/BreadCrum';
import { Link } from 'react-router-dom';
import CustomInput from '../Component/CustomInput';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { forgotAPassToken } from '../features/users/userSlice';
import { useDispatch } from 'react-redux';

let forgotSchema = yup.object({
  email: yup
    .string()
    .email('Email must be valid')
    .required('Email is Required'),
});

function ForgotPassword() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: forgotSchema,
    onSubmit: (values) => {
      dispatch(forgotAPassToken(values));
    },
  });
  return (
    <div>
      <Meta title="Forgot-password" />
      <BreadCrum title="Forgot-password" />
      <div className="login-wrapper py-5 home-wrapper">
        <div>
          <div className="auth-card">
            <h3>Reset Password</h3>
            <p className="text-center my-2">
              we will send you an email to reset your password
            </p>
            <form action="" onSubmit={formik.handleSubmit}>
              <CustomInput
                type="email"
                name="email"
                placeholder="Email"
                onCh={formik.handleChange('email')}
                onbl={formik.handleBlur('email')}
                val={formik.values.email}
                className="form-control"
              />
              <div className="text-red-500 text-start text-[.8rem]">
                {formik.touched.email && formik.errors.email ? (
                  <div>{formik.errors.email}</div>
                ) : null}
              </div>

              <div>
                <div className="flex justify-center gap-4 items-center flex-col">
                  <button type="submit" className="btn border-0">
                    Submit
                  </button>
                  <Link to="/login">
                    <button type="button" className="bg-blue-500">
                      Cancel
                    </button>
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
