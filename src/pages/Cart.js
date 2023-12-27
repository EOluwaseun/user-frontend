import React from 'react';
import BreadCrum from '../Component/BreadCrum';
import Meta from '../Component/Meta';
import { AiFillDelete } from 'react-icons/ai';
import addidas from '../assets/images/trainer.jpg';
import { Link } from 'react-router-dom';
import Container from '../Component/Container';

function Cart() {
  return (
    <div>
      <Meta title={'Cart'} />
      <BreadCrum title="Cart" />
      <Container class1="cart-wrapper home-wrapper">
        <div className="container">
          <div className="flex justify-between items-center cart-header py-3 cart">
            <h4 className="cart-cols-1">Product</h4>
            <h4 className="cart-cols-2">Price</h4>
            <h4 className="cart-cols-1">Quantity</h4>
            <h4 className="cart-cols-1">Total</h4>
          </div>

          <div className="flex justify-between items-center cart-header py-3">
            <div className="flex gap-2">
              <img src={addidas} alt="ima" className="w-[150px] h-[150px]" />
              <div>
                <p>hfkfk</p>
                <h4>size: M</h4>
                <h4>color: Red</h4>
              </div>
            </div>
            <div className="price">$100</div>

            <div className="flex gap-1">
              <input type="number" min={1} max={10} name="" id="" />
              <AiFillDelete />
            </div>
          </div>
          <div className="flex justify-between items-center cart-header py-3">
            <div className="flex gap-2">
              <img src={addidas} alt="ima" className="w-[150px] h-[150px]" />
              <div>
                <p>hfkfk</p>
                <h4>size: M</h4>
                <h4>color: Red</h4>
              </div>
            </div>
            <div className="price">$100</div>

            <div className="flex gap-1">
              <input type="number" min={1} max={10} name="" id="" />
              <AiFillDelete />
            </div>
          </div>

          <div className="flex justify-between my-4">
            <button className="button">
              <Link to="/product">Continue Shopping</Link>
            </button>
            <div className="flex gap-2 items-center">
              <h4>SubTotal: $1000</h4>
              <p>Taxes and Shipping calculated at checkout</p>
              <button className="button">
                <Link to="/checkout">checkout</Link>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Cart;
