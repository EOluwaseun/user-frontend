import React from 'react';
import addidas from '../assets/images/addiLogo.webp';
import { Link } from 'react-router-dom';

function BlogCard() {
  return (
    <div className="w-[300px]">
      <div className="blog-card bg-white p-[20px] rounded-md">
        <img src={addidas} alt="blog" />
      </div>

      <div className="blog-content">
        <p className="date">1 Dec, 2022</p>
        <h5 className="title">A beautiful sunday morning</h5>
        <p>
          lorerem sm lorerem smlorerem smlorerem smlorerem smlorerem sm lorerem
          smlorerem smlorerem smlorerem smlorerem smlorerem sm lorerem smlorerem
          smlorerem smlorerem smlorerem smlorerem sm
        </p>
        <Link to="/blog/:id">
          <button>Read More</button>
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
