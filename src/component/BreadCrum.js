import React from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';

function BreadCrum(props) {
  const { title } = props;
  return (
    <div className="breadcrum mb-0 py-4">
      <Container class1="container">
        <div>
          <div>
            <p className="text-center">
              <Link to="/">Home/</Link>
              {title}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default BreadCrum;
