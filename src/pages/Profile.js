import React, { useEffect, useState } from 'react';
import CustomInput from '../Component/CustomInput';
import { Link } from 'react-router-dom';
import BreadCrum from '../Component/BreadCrum';
import Meta from '../Component/Meta';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../features/users/userSlice';
import { BiEdit } from 'react-icons/bi';

let profileSchema = Yup.object().shape({
  firstname: Yup.string().required('first name is Required'),
  lastname: Yup.string().required('last name is Required'),
  email: Yup.string()
    .email('Email must be valid')
    .required('Email is Required'),
  mobile: Yup.string().required('Mobile no is Required'),
});

export default function Profile() {
  const [edit, setEdit] = useState(true);
  const dispatch = useDispatch();
  const userState = useSelector((state) => state?.auth?.user);
  // const userStates = useSelector((state) => state?.auth?.updateAUser);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstname: userState?.firstname,
      lastname: userState?.lastname,
      email: userState?.email,
      mobile: userState?.mobile,
    },
    validationSchema: profileSchema,
    onSubmit: (values) => {
      dispatch(updateProfile(values));
      setEdit(true);
      //   console.log(updateProfile(values));
      console.log('hey');
      // console.log(userStates);
    },
  });
  return (
    <div>
      <Meta title="Profile" />
      <BreadCrum title="Profile" />
      <div className="login-wrapper py-5 home-wrapper">
        <div className="container">
          <div className="auth-card">
            <div className="w-full flex justify-between">
              <h3>Profile</h3>
              <button onClick={() => setEdit(false)}>
                <BiEdit />
              </button>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <CustomInput
                type="text"
                name="firstname"
                className="form-control"
                label="First Name"
                id="firstname"
                val={formik.values.firstname}
                onCh={formik.handleChange('firstname')}
                onbl={formik.handleBlur('firstname')}
                disabled={edit}
              />
              <div className="text-red-500 text-start text-[.8rem]">
                {formik.touched.firstname && formik.errors.firstname ? (
                  <div>{formik.errors.firstname}</div>
                ) : null}
              </div>
              <CustomInput
                type="text"
                name="lastname"
                className="form-control"
                label="Last Name"
                id="lastname"
                val={formik.values.lastname}
                onCh={formik.handleChange('lastname')}
                onbl={formik.handleBlur('lastname')}
                disabled={edit}
              />
              <div className="text-red-500 text-start text-[.8rem]">
                {formik.touched.lastname && formik.errors.lastname ? (
                  <div>{formik.errors.lastname}</div>
                ) : null}
              </div>
              <CustomInput
                type="email"
                name="email"
                className="form-control"
                label="Enter Email"
                id="email"
                val={formik.values.email}
                onCh={formik.handleChange('email')}
                onbl={formik.handleBlur('email')}
                disabled={edit}
              />
              <div className="text-red-500 text-start text-[.8rem]">
                {formik.touched.email && formik.errors.email ? (
                  <div>{formik.errors.email}</div>
                ) : null}
              </div>
              <CustomInput
                type="text"
                name="mobile"
                className="form-control"
                label="Mobile"
                id="mobile"
                val={formik.values.mobile}
                onCh={formik.handleChange('mobile')}
                onbl={formik.handleBlur('mobile')}
                disabled={edit}
              />
              <div className="text-red-500 text-start text-[.8rem]">
                {formik.touched.mobile && formik.errors.mobile ? (
                  <div>{formik.errors.mobile}</div>
                ) : null}
              </div>
              <div>
                <div className="flex justify-center gap-4 items-center">
                  {edit === false && (
                    <button
                      type="submit"
                      className="bg-blue-500 border-0"
                      // onClick={() => setEdit(true)}
                      // disabled={edit}
                    >
                      Save
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
