import React, { useEffect } from 'react';
import Meta from '../Component/Meta';
import BreadCrum from '../Component/BreadCrum';
import BlogCard from '../Component/BlogCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllblogs } from '../features/blog/blogSlice';

function Blog() {
  // const blogState = useSelector((state) => state?.blog.blog);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   getblogs();
  // }, []);

  // const getblogs = () => {
  //   dispatch(getAllblogs());
  // };

  return (
    <div>
      {/* <Meta title={blogState?.title} /> */}
      <BreadCrum title="Blog" />
      <div className="store-wrapper py-4 ">
        <div className="container">
          <div className="flex gap-4">
            <div className="flex items-center">
              <div className="grid grid-row-4 gap-4">
                <div className="filter-card mb-3">
                  <h3 className="filter-title">Find By Category</h3>
                  <div>
                    <ul>
                      <li>Watch</li>
                      <li>Tv</li>
                      <li>Camera</li>
                      <li>Laptop</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-10">
              {/* {blogState?.map((item, index) => {
                return (
                  <div key={index} className="">
                    <BlogCard
                      id={item?._id}
                      title={item?.title}
                      description={item?.description}
                      // date={moment(item?.createdAt).format(
                      //   'MMMM DD YYYY, h:mm:ss a'
                      // )}
                      date={item?.createdAt}
                      // image={item?.images[0]?.url}
                    />
                  </div>
                );
              })} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
