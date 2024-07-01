import React, { useEffect, useState } from 'react';
import BreadCrum from '../Component/BreadCrum';
import Meta from '../Component/Meta';
import ReactStars from 'react-rating-stars-component';
import famous from '../assets/images/famous.jpg';
import { FaHamburger, FaHamsa } from 'react-icons/fa';
import ProductCard from '../Component/ProductCard';
import Color from '../Component/Color';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../features/products/productSlice';

function OurStore() {
  const dispatch = useDispatch();
  const [grid, setGrid] = useState(4);
  const productState = useSelector((state) => state?.product?.product);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);

  //filtering state
  const [category, setCategory] = useState(null);
  const [tag, setTag] = useState(null);
  const [brand, setBrand] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [minPrice, setMinPrice] = useState(null);
  const [sort, setSort] = useState(null);

  // filtering
  useEffect(() => {
    let newBrand = [];
    let newCategory = [];
    let newTag = [];
    let newColor = [];
    for (let index = 0; index < productState?.length; index++) {
      const element = productState[index]; //this will remove duplicates
      // newBrand.push({ brand: element?.brand });
      newBrand.push(element?.brand);
      newCategory.push(element?.category);
      newTag.push(element?.tags);
      newColor.push(element?.color);
    }
    setBrands(newBrand);
    setCategories(newCategory);
    setTags(newTag);
    // setColors(newColor);
  }, [productState]);

  console.log( //this removes duplicate
    [...new Set(brands)],
    [...new Set(categories)],
    [...new Set(tags)]
  );

  // console.log(brands); this does not remove duplicate

  useEffect(() => {
    getProducts();
  }, [sort, tag, brand, category, maxPrice, minPrice]);

  const getProducts = () => {
    dispatch(
      getAllProducts({ sort, tag, brand, category, maxPrice, minPrice })
    );
  };
  // console.log(sort);
  return (
    <>
      <Meta title="Our Store" />
      <BreadCrum title="Our Store" />
      <div className="store-wrapper py-4">
        <div className="container">
          <div className="flex gap-4">
            <div className="flex items-center">
              <div className="grid grid-row-4 gap-4">
                <div className="filter-card mb-3">
                  <h3 className="filter-title">Shop By Category</h3>
                  <div>
                    <ul>
                      {categories &&
                        [...new Set(categories)].map((item, index) => {
                          return (
                            <li key={index} onClick={() => setCategory(item)}>
                              {item}
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </div>
                <div className="filter-card mb-3">
                  <h3 className="filter-title">Filter By</h3>
                  <div>
                    <h5 className="subtitle">Availability</h5>
                    <div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id=""
                        />
                        <label className="form-check-label" for="">
                          In Stock(1)
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id=""
                        />
                        <label className="form-check-label" for="">
                          Out of Stock(0)
                        </label>
                      </div>
                    </div>
                    <h5 className="subtitle">Price</h5>
                    <div>
                      <div className="mb-3 flex gap-2">
                        <div>
                          <input
                            type="number"
                            id="form-control"
                            placeholder="From"
                            className="py-4"
                            onChange={(e) => setMinPrice(e.target.value)}
                          />
                          <label hthmFor="form-control">From</label>
                        </div>
                        <div>
                          <input
                            type="number"
                            id="form-control"
                            placeholder="To"
                            className="py-4"
                            onChange={(e) => setMaxPrice(e.target.value)}
                          />
                          <label hthmFor="form-control">To</label>
                        </div>
                      </div>
                    </div>
                    <h5 className="subtitle">Colors</h5>
                    <div className="">
                      <Color />
                    </div>
                    <h5 className="subtitle">Size</h5>
                    <div>
                      <input
                        type="checkbox"
                        id="color-1"
                        // placeholder="From"
                        // className="py-4"
                      />
                      <label htmlFor="color-1"> S(2)</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="color-2"
                        // placeholder="From"
                        // className="py-4"
                      />
                      <label htmlFor="color-2"> M(2)</label>
                    </div>
                  </div>
                </div>
                <div className="filter-card mb-3">
                  <h3 className="filter-title">Product Tag</h3>
                  <div>
                    <div className="flex flex-wrap items-center gap-4">
                      {/* {tags &&
                        [...new Set(tags)].map((item, index) => {
                          return (
                            <span
                              className="rounded-lg py-2 px-3 bg-slate-400 text-black"
                              key={index}
                              onClick={() => setTag(item)}
                            >
                              {item}
                            </span>
                          );
                        })} */}
                    </div>
                  </div>
                </div>
                <div className="filter-card mb-3">
                  <h3 className="filter-title">Brands</h3>
                  <div>
                    <div className="flex flex-wrap items-center gap-4">
                      {/* {brands &&
                        [...new Set(brands)].map((item, index) => {
                          return (
                            <span
                              className="rounded-lg py-2 px-3 bg-slate-400 text-black"
                              key={index}
                              onClick={() => setBrand(item)}
                            >
                              {item}
                            </span>
                          );
                        })} */}
                    </div>
                  </div>
                </div>
                <div className="filter-card mb-3">
                  <h3 className="filter-title">Random Product</h3>
                  <div className="flex flex-col">
                    <div className="flex gap-4 font-bold text-15">
                      <div className="w-[150px] h-[150px] ">
                        <img
                          src={famous}
                          alt="random"
                          className="w-full h-full"
                        />
                      </div>
                      <div className="w-[150px]">
                        <h5>
                          Kids headphones bulk 10 pack adults color for students
                        </h5>
                        <ReactStars
                          count={5}
                          size={30}
                          value="3"
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <b>$500</b>
                      </div>
                    </div>
                    <div className="flex gap-4 font-bold text-15">
                      <div className="w-[150px] h-[150px] ">
                        <img
                          src={famous}
                          alt="random"
                          className="w-full h-full"
                        />
                      </div>
                      <div className="w-[150px]">
                        <h5>
                          Kids headphones bulk 10 pack adults color for students
                        </h5>
                        <ReactStars
                          count={5}
                          size={30}
                          sing
                          value="3"
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <b>$500</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="filter-sort-grid">
              <div className="">
                <div className="flex justify-between flex-1">
                  <div className="flex">
                    <p className="font-bold text-xl">Sort By</p>
                    <div className=" mb-4">
                      <select
                        defaultValue={'manuals'}
                        onChange={(e) => setSort(e.target.value)}
                        name=""
                        id=""
                        className="p-4 border"
                      >
                        {/* <option name="" value="manual">
                          Featured
                        </option> */}
                        {/* <option name="" value="best-selling ">
                          Best Selling
                        </option> */}
                        <option name="" value="title">
                          Alphabtically A-Z
                        </option>
                        <option name="" value="-title">
                          Alphabtically Z-A
                        </option>
                        <option name="" value="price">
                          Price. low to high
                        </option>
                        <option name="" value="-price">
                          Price. high to low
                        </option>
                        <option name="" value="createdAt">
                          Date. new to old
                        </option>
                        <option name="" value="-createdAt">
                          Date. old to new
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <p className="total-product text-xl font-bold">
                      21 Products
                    </p>
                    <div className="flex gap-4">
                      <div
                        onClick={() => setGrid(3)}
                        className="cursor-pointer"
                      >
                        <FaHamburger />
                      </div>
                      <div
                        onClick={() => setGrid(4)}
                        className="cursor-pointer"
                      >
                        <FaHamsa />
                      </div>
                      <div
                        onClick={() => setGrid(6)}
                        className="cursor-pointer"
                      >
                        <FaHamburger />
                      </div>
                      <div
                        onClick={() => setGrid(12)}
                        className="cursor-pointer"
                      >
                        <FaHamsa />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="product-list mb-5">
                  <div className="flex gap-4 flex-wrap">
                    <ProductCard
                      data={productState ? productState : []}
                      grid={grid}
                    />
                  </div>
                  {/* taken d grid from ProductCard*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurStore;
