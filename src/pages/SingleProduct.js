/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from 'react';
import BreadCrum from '../Component/BreadCrum';
import Meta from '../Component/Meta';
import ProductCard from '../Component/ProductCard';
import Color from '../Component/Color';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';
import addidas from '../assets/images/trainer.jpg';
import { TbGitCompare } from 'react-icons/tb';
import { AiOutlineHeart } from 'react-icons/ai';
import Container from '../Component/Container';

// react-image-zoom --save
function SingleProduct() {
  const [orderProduct, setOrderProduct] = useState(true);

  const copyToClipboard = (text) => {
    var textField = document.createElement('textarea');
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
  };
  return (
    <div>
      <Meta title={'Product Name'} />
      <BreadCrum title="Product Name" />
      <div className="main-product-wrapper py-5 home-wrapper">
        <div className="">
          <div className="flex justify-between gap-4 container">
            <div className="main-product-image ">
              <img
                src={addidas}
                alt="single-product"
                className="w-full h-[100%] object-contain"
              />
            </div>
            <div>
              <div className="main-product-details border-b-2">
                <h3 className="font-bold mt-4">
                  Kids Headphone Bulk 10 pack multi colored for student
                </h3>
                <div className="border-b-2">
                  <p className="price mt-4">$100</p>
                  <div className="flex items-center gap-4">
                    <ReactStars
                      count={5}
                      size={30}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">2 Reviews</p>
                  </div>
                  <a href="#review">Write a Review</a>
                </div>
                <div className="border-bottom py-4">
                  <div className="flex gap-2 items-center my-2">
                    <h3>Type:</h3> <p>Watch</p>
                  </div>
                  <div className="flex gap-2 items-center my-2">
                    <h3>Brand:</h3> <p>Mavel</p>
                  </div>
                  <div className="flex gap-2 items-center my-2">
                    <h3>Category:</h3> <p>Watch</p>
                  </div>
                  <div className="flex gap-2 items-center my-2">
                    <h3>Availability:</h3> <p>Stock</p>
                  </div>
                  <div className="flex gap-2 items-center my-2">
                    <h3>Color:</h3>
                    <Color />
                  </div>
                  <div className="flex gap-2 items-center my-2">
                    <h3>Size:</h3>
                    <div className="flex flex-wrap">
                      <div className="border-2 p-2">S</div>
                      <div className="border-2 p-2">M</div>
                      <div className="border-2 p-2">XL</div>
                      <div className="border-2 p-2">XXL</div>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center my-2">
                    <h3>Quantity:</h3>
                    <div>
                      <input
                        type="number"
                        min={1}
                        max={10}
                        style={{ width: '50px', border: '1px solid black' }}
                        id=""
                      />
                    </div>
                    <div className="flex justify-center gap-4 items-center">
                      <button className="button border-0">Add to Cart</button>
                      <button className="button border-0">Buy it now</button>
                    </div>
                  </div>
                  <div className="">
                    <a href="ai">
                      <TbGitCompare /> Add to compare
                    </a>
                    <a href="ae">
                      <AiOutlineHeart /> Add to wishlist
                    </a>
                  </div>
                  <div className="my-2">
                    <h3>Shipping & Returns</h3>
                    <p>
                      loreremloreremloreremloreremloreremloreremloreremloreremlorerem
                      loreremloreremloreremloreremloreremloreremloreremloreremlorerem
                      loreremloreremloreremloreremloreremloreremloreremloreremlorerem
                    </p>
                    <div>
                      <h3>Copy Product Link</h3>
                      {/* // eslint-disable-next-line jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid, no-script-url */}
                      <a
                        href="javascript:void(0)"
                        onClick={() =>
                          copyToClipboard(
                            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43027122.22275701!2d-135.65893025392413!3d48'
                          )
                        }
                      >
                        product link
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="description-wrapper py-5 home-wrapper">
            <div className="container">
              <div>
                <div className="bg-white p-3">
                  <h4>description</h4>
                  <p>
                    loreremloreremloreremloreremloreremloreremloreremloreremlorerem
                    location
                    loreremloreremloreremloreremloreremloreremloreremloreremlorerem
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Container class1="review-wrapper py-5 home-wrapper">
            <div className="container">
              <div className="review-head-wrapper">
                <h3 id="review">Customer Reviews</h3>
                <div className="review-head flex justify-between items-end">
                  <div className="">
                    <h4>Customer's reviewe</h4>
                    <div className="flex gap-2 justify-between items-center">
                      <ReactStars
                        count={5}
                        size={30}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="mb">Based on 2 Reviews</p>
                    </div>
                  </div>
                  {/* show it only if order is true */}
                  <div>
                    {orderProduct && (
                      <Link to="" className="text-black underline">
                        Write Review
                      </Link>
                    )}
                  </div>
                </div>
                <div className="review-form">
                  <h4>Write a review</h4>

                  <form action="" className="flex flex-col gap-15">
                    <ReactStars
                      count={5}
                      size={30}
                      value={3}
                      edit={true}
                      activeColor="#ffd700"
                    />

                    <div>
                      <textarea
                        type="text"
                        placeholder="comment"
                        className="w-full h-[150px] border-2 border-black"
                      ></textarea>
                    </div>
                    <div className="flex justify-end">
                      <button className="button border">Submit</button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-4">
                  <div className="review">
                    <div className="flex gap-2 items-center">
                      <h5>Sean</h5>
                      <ReactStars
                        count={5}
                        size={30}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>

                    <p className="">
                      loreremloreremloreremloreremloreremloreremloreremloreremlorerem
                      loreremloreremloreremloreremloreremloreremloreremloreremlorerem
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
          <Container class1="popular-wrapper py-3">
            <div className="container">
              <div>
                <h3 className="section-heading text-center">Popular Product</h3>
                <div className="flex justify-between items-center">
                  <ProductCard />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
