import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import { BsBagCheck } from 'react-icons/bs';

function Header() {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container">
          <div className="flex py-3 justify-between">
            <div className="mb-0">
              <p className="text-white mb-0">
                Shipping Over $100 Free Shipping
              </p>
            </div>
            <div className="">
              <p className=" text-white mb-0">
                Hotline{' '}
                <Link className="text-white" to="tel:+234 467484">
                  +234 464849
                </Link>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper-strip py-3 justify-center items-start">
        <div className="container">
          <div className="flex row items-center">
            <div className="col-2">
              <h1 className="text-white text-4xl mr-8">
                <Link>JD</Link>
              </h1>
            </div>
            <div className="flex row w-[400px] border">
              <div className="input-group w-full">
                <input
                  type="text"
                  className="form-control w-full border-none outline-none p-2"
                  placeholder="search Product here"
                />
              </div>
              <span
                className="input-group-text p-2 text-center cursor-pointer"
                id="basic"
              >
                <BiSearch />
              </span>
            </div>
            <div className="ml-auto w-[40%]">
              <div className="header-upper-header-upper-links flex items-center justify-between border w-full ml-auto">
                <div>
                  <Link to="/compare">
                    <span className="text-white">
                      <BsBagCheck size={35} />
                      <p>Compare</p>
                    </span>
                  </Link>
                </div>
                <div>
                  <Link to="/wishlist">
                    <span className="text-white">
                      <BsBagCheck size={35} />
                      <p>Wishlist</p>
                    </span>
                  </Link>
                </div>
                <div>
                  <Link to="/login">
                    <span className="text-white">
                      <BsBagCheck size={35} />
                      <p className="text-center">Login</p>
                    </span>
                  </Link>
                </div>
                <div>
                  <Link to="/cart" className="flex items-center ">
                    <span className="text-white">
                      <BsBagCheck size={35} />
                    </span>

                    <div className="">
                      <span className="bg-white text-black text-2xl rounded-sm text-center">
                        0
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container relative">
          <div className="">
            <div className="menu-bottom flex items-center gap-4">
              <div className="relative">
                <ul className="">
                  <li className="admin">
                    <NavLink to="/" className=" text-white">
                      Shop Category
                    </NavLink>
                    <div className="adminhover absolute">
                      <Link className="adminList" to="">
                        Dashboard
                      </Link>
                      <Link className="adminList" to="">
                        Product
                      </Link>
                      <Link className="adminList" to="">
                        Orders
                      </Link>
                      <Link className="adminList" to="">
                        User
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="menu-links">
                <div className="flex items-start gap-5">
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/product">Our Store</NavLink>
                  <NavLink to="/blogs">Blogs</NavLink>
                  <NavLink to="/contact">Contact</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
