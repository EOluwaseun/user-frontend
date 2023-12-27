import React from 'react';
import BreadCrum from '../Component/BreadCrum';
import Meta from '../Component/Meta';
import addidas from '../assets/images/trainer.jpg';
import { Link } from 'react-router-dom';
// import { HiArrowLeft } from 'react-icons/hi';

function SingleBlog() {
  return (
    <div>
      <Meta title={'Dynamic Blog Name'} />
      <BreadCrum title="Dynamic Blog Name" />
      <div className="store-wrapper py-4 ">
        <div className="container">
          <div className="flex gap-8 flex-1">
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
            <div className="flex gap-10 flex-1">
              <div className="single-blog-title">
                <Link to="/blogs" className="flex">
                  Go back
                </Link>
                <h3>A Beautiful Sunday Morning Renaissance</h3>
                <img src={addidas} alt="single-blog" />
                <p>
                  lorerem
                  loreremloreremloreremloreremloreremloreremloreremloreremlorerem
                  loreremloreremloreremloreremloreremloreremloreremloreremloreremlorerem
                  loreremloreremloreremloreremloreremloreremloreremloreremloreremloreremlorerem
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
