/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import Meta from '../Component/Meta';
import BreadCrum from '../Component/BreadCrum';
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import { BiPhoneCall } from 'react-icons/bi';

function Contact() {
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
                <form action="" className="flex flex-col gap-15">
                  <div>
                    <input
                      type="text"
                      placeholder="name"
                      className="form-control p-4 border-2 border-black w-full mb-4"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="email"
                      className="form-control p-4 border-2 border-black w-full mb-4"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="mobile"
                      className="form-control p-4 border-2 border-black w-full mb-4"
                    />
                  </div>
                  <div>
                    <textarea
                      type="text"
                      placeholder="comment"
                      className="w-full h-[150px] border-2 border-black"
                    ></textarea>
                  </div>
                  <div>
                    <button className="button border">Submit</button>
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
