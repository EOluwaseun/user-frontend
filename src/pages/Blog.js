import React from 'react';
import Meta from '../Component/Meta';
import BreadCrum from '../Component/BreadCrum';
import BlogCard from '../Component/BlogCard';

function Blog() {
  return (
    <div>
      <Meta title={'Blog'} />
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
              <div className="">
                <BlogCard />
              </div>
              <div className="">
                <BlogCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
