/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import Meta from '../Component/Meta';
import BreadCrum from '../Component/BreadCrum';
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import { BiPhoneCall } from 'react-icons/bi';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { createEnquiry } from '../features/contact/contactSlice';

const contactSchma = yup.object({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .nullable()
    .email('Email should be valid')
    .required('Email is required'),
  mobile: yup
    .string()
    .default('')
    .nullable()
    .required('Mobile Number is required.'),
  comment: yup.string().default('').nullable().required('Comment is required'),
});

function Contact() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      mobile: '',
      email: '',
      comment: '',
    },
    validationSchema: contactSchma,
    onSubmit: (values) => {
      dispatch(
        createEnquiry({
          name: values.name,
          mobile: values.mobile,
          email: values.email,
          comment: values.comment,
        })
      );
    },
  });

  return (
    <>
      <Meta title="Contact" />
      <BreadCrum title="Contact" />
      <div className=" py-3 home-wrapper">
        <div className="container">
          <div>
            {/* // eslint-disable-next-line jsx-a11y/iframe-has-title */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43027122.22275701!2d-135.65893025392413!3d48.835950736733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0d03d337cc6ad9%3A0x9968b72aa2438fa5!2sCanada!5e0!3m2!1sen!2sng!4v1697330255515!5m2!1sen!2sng"
              width="600"
              height="450"
              className="border-0 w-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div>
            <div className="contact-wrapper flex justify-between">
              <div>
                <h3 className="contact-title text-4xl font-bold">Contact</h3>
                <form
                  onSubmit={formik.handleSubmit}
                  action=""
                  className="flex flex-col gap-15"
                >
                  <div>
                    <input
                      type="text"
                      placeholder="name"
                      onChange={formik.handleChange('name')}
                      onBlur={formik.handleBlur('name')}
                      value={formik.values.name}
                      className="form-control p-4 border-2 border-black w-full mb-4"
                    />
                    <div className="text-red-500 mb-2">
                      {formik.touched.name && formik.errors.name}
                    </div>
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="email"
                      onChange={formik.handleChange('email')}
                      onBlur={formik.handleBlur('email')}
                      value={formik.values.email}
                      className="form-control p-4 border-2 border-black w-full mb-4"
                    />
                    <div className="text-red-500 mb-2">
                      {formik.touched.email && formik.errors.email}
                    </div>
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="mobile"
                      onChange={formik.handleChange('mobile')}
                      onBlur={formik.handleBlur('mobile')}
                      value={formik.values.mobile}
                      className="form-control p-4 border-2 border-black w-full mb-4"
                    />
                    <div className="text-red-500 mb-2">
                      {formik.touched.mobile && formik.errors.mobile}
                    </div>
                  </div>
                  <div>
                    <textarea
                      type="text"
                      placeholder="comment"
                      onChange={formik.handleChange('comment')}
                      onBlur={formik.handleBlur('comment')}
                      value={formik.values.comment}
                      className="w-full h-[150px] border-2 border-black"
                    ></textarea>

                    <div className="text-red-500 mb-2">
                      {formik.touched.comment && formik.errors.comment}
                    </div>
                  </div>
                  <div>
                    <button type="submit" className="button border">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              <div>
                <h2 className="contact-title">Get in touch with us</h2>
                <ul className="pb-0">
                  <li className="flex gap-2 items-center">
                    <AiOutlineHome />
                    <address>No:277 . Near village chapel . Mondara</address>
                  </li>
                  <li className="flex gap-2 items-center">
                    <BiPhoneCall />
                    <a href="tel:91 865559504">0905748884</a>
                  </li>
                  <li className="flex gap-2 items-center">
                    <AiOutlineMail />
                    <a href="mailto:oluwaseun@gmail.com">admin@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
