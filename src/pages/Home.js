/* eslint-disable array-callback-return */
import React, { useEffect } from 'react';
import banner from '../assets/images/banner1.jpg';
// import banner2 from '../assets/images/banner2.jpg';
import avater from '../assets/images/avatar.png';
import famous from '../assets/images/famous.jpg';
import Marquee from 'react-fast-marquee';
import { Link, useNavigate } from 'react-router-dom';
import BlogCard from '../Component/BlogCard';
import ProductCard from '../Component/ProductCard';
import SpecialProduct from '../Component/SpecialProduct';
import Container from '../Component/Container';
import { services } from '../ustils/data';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTowishlist,
  getAllProducts,
  resetState,
} from '../features/products/productSlice';
import ReactStars from 'react-rating-stars-component';
import { BiSearch } from 'react-icons/bi';
import { FcLike } from 'react-icons/fc';
import addidas from '../assets/images/addidas2.webp';
import addidasLogo from '../assets/images/addiLogo.webp';

//react helmet
function Home() {
  const productState = useSelector((state) => state?.product?.product);
  const navigate = useNavigate();
  // console.log(productState);

  const dispatch = useDispatch();
  useEffect(() => {
    getProducts();
  });

  const getProducts = () => {
    dispatch(getAllProducts());
  };

  return (
    <>
      <Container class1="py-5">
        <div className="container">
          <div className="grid grid-cols-2 gap-2">
            <div className="main-content flex-1 p-3 relative ">
              <img
                src={banner}
                alt="banner"
                className="w-full h-[100%] absolute"
              />
              <div className="overlay absolute">
                <div className="main-banner-content absolute">
                  <h3 className="font-bold text-4xl text-white">BANG BANG</h3>
                  <h4 className="font-bold text-2xl text-white">Hoodie</h4>
                  <p className="font-bold ">From $999 0r $344</p>
                  <Link>
                    <button className=" text-[18px] font-bold">Buy Now</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 wrap gap-2 w-full h-[100%]">
              <div className="main-content p-3 rounded-md overflow-hidden relative w-[15rem] h-[15rem]">
                <img
                  src={banner}
                  alt="banner"
                  className="w-full h-[100%] absolute"
                />
                <div className="overlay absolute">
                  <div className="main-banner-content absolute">
                    <h4 className="font-bold  text-[18px] text-white">
                      BEST SALE
                    </h4>
                    <p className="font-bold ">From $999 0r $344</p>

                    {/* <Link>
                    <button className=" text-[10px] font-bold">Buy Now</button>
                  </Link> */}
                  </div>
                </div>
              </div>
              <div className="main-content p-3 rounded-md overflow-hidden relative w-[15rem] h-[15rem]">
                <img
                  src={banner}
                  alt="banner"
                  className="w-full h-[100%] absolute"
                />
                <div className="overlay absolute">
                  <div className="main-banner-content absolute">
                    <h4 className="font-bold text-[18px]text-white">Hoodie</h4>
                    <p className="font-bold ">From $999 0r $344</p>
                    {/* <Link>
                    <button className=" text-[10px] font-bold">Buy Now</button>
                  </Link> */}
                  </div>
                </div>
              </div>{' '}
              <div className="main-content p-3 rounded-md overflow-hidden relative w-[15rem] h-[15rem]">
                <img
                  src={banner}
                  alt="banner"
                  className="w-full h-[100%] absolute"
                />
                <div className="overlay absolute">
                  <div className="main-banner-content absolute">
                    <h4 className="font-bold  text-white">Feature</h4>
                    <p className="font-bold ">From $999 0r $344</p>
                    {/* <Link>
                    <button className=" text-[10px] font-bold">Buy Now</button>
                  </Link> */}
                  </div>
                </div>
              </div>
              <div className="main-content p-3 rounded-md overflow-hidden relative w-[15rem] h-[15rem]">
                <img
                  src={banner}
                  alt="banner"
                  className="w-full h-[100%] absolute"
                />
                <div className="overlay absolute">
                  <div className="main-banner-content absolute">
                    <h4 className="font-bold text-[18px] text-white">
                      NEW ARRIVAL
                    </h4>
                    <p className="font-bold ">From $999 0r $344</p>
                    {/* <Link>
                    <button className=" text-[10px] font-bold">Buy Now</button>
                  </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper py-3">
        <div className="container">
          <Marquee className="services flex items-center justify-between">
            <div className="flex gap-2">
              {services?.map((service, index) => {
                return (
                  <div key={index}>
                    <img src={avater} alt="addilogo" />
                    <h6>{service.title}</h6>
                    <p>{service.tagline}</p>
                  </div>
                );
              })}
            </div>
          </Marquee>
        </div>
      </Container>
      <Container class1="home-wrapper py-3">
        <div className="container">
          <div className="categories flex items-center justify-between">
            <div className="flex justify-between items-center">
              <div>
                <h6>Camera</h6>
                <p>10 items</p>
              </div>
              <img src={avater} alt="addilogo" />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h6>Camera</h6>
                <p>10 items</p>
              </div>
              <img src={avater} alt="addilogo" />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h6>Camera</h6>
                <p>10 items</p>
              </div>
              <img src={avater} alt="addilogo" />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h6>Camera</h6>
                <p>10 items</p>
              </div>
              <img src={avater} alt="addilogo" />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h6>Camera</h6>
                <p>10 items</p>
              </div>
              <img src={avater} alt="addilogo" />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h6>Camera</h6>
                <p>10 items</p>
              </div>
              <img src={avater} alt="addilogo" />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h6>Camera</h6>
                <p>10 items</p>
              </div>
              <img src={avater} alt="addilogo" />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h6>Camera</h6>
                <p>10 items</p>
              </div>
              <img src={avater} alt="addilogo" />
            </div>
          </div>
        </div>
      </Container>
      {/* <section></section> npm i react-fast-marque */}
      <Container class1="home-wrapper py-3">
        <div className="container">
          <div>
            <h3 className="section-heading text-center">Featured Collection</h3>
            <div className="flex justify-between items-center gap-4">
              {productState &&
                productState?.map((item, index) => {
                  if (item?.tags === 'featured') {
                    return (
                      <div key={index} className={'grid-cols-2'}>
                        <div className="product-card relative">
                          <div
                            className="wishlist-icon absolute"
                            onClick={(e) => addTowishlist(item?._id)}
                          >
                            <FcLike />
                          </div>
                          <div className="product-image">
                            <img src={addidas} alt="alt-img" />
                            <img src={addidasLogo} alt="alt-img" />
                          </div>
                          <div className="product-details ">
                            <h6 className="brand">{item?.brand}</h6>
                            <h5 className="product-title">{item?.title}</h5>
                            <ReactStars
                              count={5}
                              size={30}
                              value={item?.ratings.toString()}
                              edit={false}
                              activeColor="#ffd700"
                            />
                            <p
                              // className={`${grid === 12 ? 'block' : 'hidden'}`}
                              dangerouslySetInnerHTML={{
                                __html: item?.description,
                              }}
                            ></p>
                            <p className="price">${item?.price}</p>
                          </div>
                          <div className="action-bar absolute top-[20%] right-[-25px] bg-white p-2">
                            <div className="flex flex-col gap-2 items-center">
                              <button>
                                <BiSearch />
                              </button>
                              <button>
                                <BiSearch />
                              </button>
                              <button
                                onClick={() =>
                                  // navigate('/product/' + item?._id)
                                  navigate(`/product/${item?._id}`)
                                }
                              >
                                <BiSearch />
                              </button>
                              <button>
                                <BiSearch />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
            </div>
          </div>
        </div>
      </Container>
      <Container class1="famous-wrapper py-5 home-wrapper">
        <div className="row container">
          <div>
            <h3 className="text-center">Famous Product</h3>
          </div>
          <div className="flex gap-4">
            <div className="relative w-[300px] h-[500px]">
              <div className="">
                <img src={famous} alt="famous" className="h-full w-full" />
              </div>
              <div className="absolute text-white top-[20%] left-[10%]">
                <h5>Big Screen</h5>
                <h6 className="font-bold text-4xl">Smart Watch Series</h6>
                <p>From $3000 or $26.65 for 24 no.</p>
              </div>
            </div>
            <div className="relative w-[300px] h-[500px]">
              <div className="">
                <img src={famous} alt="famous" className="h-full w-full" />
              </div>
              <div className="absolute text-white top-[20%] left-[10%]">
                <h5>Big Screen</h5>
                <h6 className="font-bold text-4xl">Smart Watch Series</h6>
                <p>From $3000 or $26.65 for 24 no.</p>
              </div>
            </div>{' '}
            <div className="relative w-[300px] h-[500px]">
              <div className="">
                <img src={famous} alt="famous" className="h-full w-full" />
              </div>
              <div className="absolute text-white top-[20%] left-[10%]">
                <h5>Big Screen</h5>
                <h6 className="font-bold text-4xl">Smart Watch Series</h6>
                <p>From $3000 or $26.65 for 24 no.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="special-wrapper py-3 home-wrapper">
        <div className="row container">
          <div>
            <h3 className="section">Special Product</h3>
          </div>
          <div className="flex items-center justify-between gap-4">
            {productState &&
              productState?.map((item, index) => {
                if (item?.tags === 'special') {
                  return (
                    <SpecialProduct
                      key={index}
                      id={item?._id}
                      title={item?.title}
                      totalsrating={item?.totalsrating.toString()}
                      price={item?.price}
                      brand={item?.brand}
                      sold={item?.sold}
                      quantity={item?.quantity}
                    />
                  );
                }
              })}
          </div>
        </div>
      </Container>
      <Container class1="popular-wrapper py-3">
        <div className="container">
          <div>
            <h3 className="section-heading text-center">Popular Product</h3>
            <div className="flex justify-between items-center">
              {productState &&
                productState?.map((item, index) => {
                  if (item?.tags === 'popular') {
                    return (
                      <div key={index} className={'grid-cols-2'}>
                        <div className="product-card relative">
                          <div
                            className="wishlist-icon absolute"
                            onClick={(e) => addTowishlist(item?._id)}
                          >
                            <FcLike />
                          </div>
                          <div className="product-image">
                            <img src={addidas} alt="alt-img" />
                            <img src={addidasLogo} alt="alt-img" />
                          </div>
                          <div className="product-details ">
                            <h6 className="brand">{item?.brand}</h6>
                            <h5 className="product-title">{item?.title}</h5>
                            <ReactStars
                              count={5}
                              size={30}
                              value={item?.ratings.toString()}
                              edit={false}
                              activeColor="#ffd700"
                            />
                            <p
                              // className={`${grid === 12 ? 'block' : 'hidden'}`}
                              dangerouslySetInnerHTML={{
                                __html: item?.description,
                              }}
                            ></p>
                            <p className="price">${item?.price}</p>
                          </div>
                          <div className="action-bar absolute top-[20%] right-[-25px] bg-white p-2">
                            <div className="flex flex-col gap-2 items-center">
                              <button>
                                <BiSearch />
                              </button>
                              <button>
                                <BiSearch />
                              </button>
                              <button
                                onClick={() =>
                                  navigate('/product/' + item?._id)
                                }
                              >
                                <BiSearch />
                              </button>
                              <button>
                                <BiSearch />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
            </div>
          </div>
        </div>
      </Container>
      <Container class1="blog-wrapper p-y3">
        <div className="container">
          <div>
            <h3 className="section-heading text-center">Our Latest Blogs</h3>
            <div className="flex justify-between items-center">
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Home;
