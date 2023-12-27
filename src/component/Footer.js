import React from 'react';
import { Link } from 'react-router-dom';
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from 'react-icons/bs';

function Footer() {
  return (
    <>
      <footer>
        <div className="container boder ">
          <div className="flex justify-between">
            <div className="footer-top-data flex items-center gap-2">
              <img src="" alt="newsletter" />
              <h2 className="text-white text-center py-4">
                Sign Up for Newsletter
              </h2>
            </div>
            <div className="flex row w-[400px] border">
              <div className="input-group w-full">
                <input
                  type="text"
                  className="form-control w-full h-full border-none outline-none p-2"
                  placeholder="Subscribe"
                />
              </div>
              <span
                className="input-group-text p-2 text-center m-auto text-white cursor-pointer"
                id="basic"
              >
                <p>Subcribe</p>
              </span>
            </div>
          </div>
        </div>
      </footer>
      <footer>
        <div className="container boder ">
          <div className="footer-top-data flex justify-between gap-4 ">
            <div className=" text-white flex items-center gap-2">
              <div className="text-white flex flex-col">
                <h4 className="font-bold text-2xl">Contact Us</h4>
                <div className="flex flex-col">
                  <address className="text-white ">
                    Mmo:224 Near Vill <br /> Maryland
                  </address>
                  <a href="tex:+234 758449">07045637713</a>
                  <a href="mailto:admin@gmail.com">admin@gmail.com</a>
                  <div className="social-icon flex gap-4 py-4">
                    <a href="#e">
                      <BsLinkedin />
                    </a>
                    <a href="#e">
                      <BsInstagram />
                    </a>
                    <a href="#e">
                      <BsGithub />
                    </a>
                    <a href="#e">
                      <BsYoutube />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className=" text-white flex items-center gap-2">
              <div className="text-white flex flex-col">
                <h4 className="font-bold text-2xl">Information</h4>
                <div className="flex flex-col">
                  <Link to="/privacy-policy" className="">
                    Privacy Policy
                  </Link>
                  <Link to="/refund-policy" className="">
                    Refund Policy
                  </Link>
                  <Link to="/shopping-policy" className="">
                    Shopping Policy
                  </Link>
                  <Link to="/terms-condition" className="">
                    Terms and Conditions
                  </Link>
                  <Link to="/blogs" className="">
                    Blog
                  </Link>
                </div>
              </div>
            </div>
            <div className=" text-white flex items-center gap-2">
              <div className="text-white flex flex-col">
                <h4 className="font-bold text-2xl">Accounts</h4>
                <div className="flex flex-col">
                  <Link className="">About Us</Link>
                  <Link className="">Faqs</Link>
                  <Link className="">Contact</Link>
                </div>
              </div>
            </div>

            <div className=" text-white flex items-center gap-2">
              <div className="text-white flex flex-col">
                <h4 className="font-bold text-2xl">Quick Links</h4>
                <div className="flex flex-col">
                  <Link className="">Laptops</Link>
                  <Link className="">Headphones</Link>
                  <Link className="">Tablet</Link>
                  <Link className="">Watch</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer>
        <div className="container">
          <div>
            <div>
              <p className="text-white text-center py-4">
                &copy; {new Date().getFullYear()}:Powered by Sean
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
