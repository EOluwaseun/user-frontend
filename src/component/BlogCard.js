import React from 'react';
import addidas from '../assets/images/addiLogo.webp';
import { Link } from 'react-router-dom';

function BlogCard({ title, id, description, date }) {
  return (
    <div className="w-[300px]">
      <div className="blog-card bg-white p-[20px] rounded-md">
        <img src={addidas} alt="blog" />
      </div>

      <div className="blog-content">
        <p className="date">{date}</p>
        <h5 className="title">{title}</h5>
        <p
          dangerouslySetInnerHTML={{
            __html: description?.substr(0, 50) + '...',
          }}
        ></p>
        <Link to={`/blog/:${id}`}>
          <button>Read More</button>
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
