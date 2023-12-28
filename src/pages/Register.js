import React from 'react';
import Meta from '../Component/Meta';
import BreadCrum from '../Component/BreadCrum';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import CustomInput from '../Component/CustomInput';
import { useDispatch } from 'react-redux';
import { registerUser } from '../features/users/userSlice';

let registerSchema = Yup.object().shape({
  firstname: Yup.string().required('First Name Required'),
  lastname: Yup.string().required('Last Name Required'),
  email: Yup.string()
    .email('Email must be valid')
    .required('Email is Required'),
  password: Yup.string().required('Password is Required'),
  mobile: Yup.string().required('Mobile No is required'),
});
function Register() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      mobile: '',
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      dispatch(registerUser(values));
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <Meta title="Register" />
      <BreadCrum title="Register" />
      <div className="login-wrapper py-5 home-wrapper">
        <div className="container">
          <div className="auth-card">
            <h3>SignUp</h3>
            <form onSubmit={formik.handleSubmit}>
              <CustomInput
                type="text"
                name="firstname"
                label="First Name"
                id="firstName"
                className="form-control"
                val={formik.values.firstname}
                onCh={formik.handleChange('firstname')}
              />
              <div className="text-red-500 text-start text-[.8rem]">
                {formik.touched.firstname && formik.errors.firstname ? (
                  <div>{formik.errors.firstname}</div>
                ) : null}
              </div>
              <CustomInput
                type="text"
                name="lastname"
                label="Last Name"
                id="lastName"
                className="form-control"
                val={formik.values.lastname}
                onCh={formik.handleChange('lastname')}
              />
              <div className="text-red-500 text-start text-[.8rem]">
                {formik.touched.lastname && formik.errors.lastname ? (
                  <div>{formik.errors.lastname}</div>
                ) : null}
              </div>
              <CustomInput
                type="email"
                name="Email"
                label="Email"
                id="email"
                className="form-control"
                val={formik.values.email}
                onCh={formik.handleChange('email')}
              />
              <div className="text-red-500 text-start text-[.8rem]">
                {formik.touched.email && formik.errors.email ? (
                  <div>{formik.errors.email}</div>
                ) : null}
              </div>
              <CustomInput
                type="tel"
                name="Mobile"
                label="Mobile"
                id="mobile"
                className="form-control"
                val={formik.values.mobile}
                onCh={formik.handleChange('mobile')}
              />
              <div className="text-red-500 text-start text-[.8rem]">
                {formik.touched.mobile && formik.errors.mobile ? (
                  <div>{formik.errors.mobile}</div>
                ) : null}
              </div>
              <CustomInput
                type="password"
                name="password"
                label="Password"
                id="password"
                className="form-control"
                val={formik.values.password}
                onCh={formik.handleChange('password')}
              />
              <div className="text-red-500 text-start text-[.8rem]">
                {formik.touched.password && formik.errors.password ? (
                  <div>{formik.errors.password}</div>
                ) : null}
              </div>
              <div>
                <div className="flex justify-center gap-4 items-center">
                  <button type="submit bg-blue-500">SignUp</button>
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
