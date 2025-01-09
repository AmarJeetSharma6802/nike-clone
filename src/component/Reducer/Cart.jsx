import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../Reducer/cartSlice";
import Delete from '../../assets/bin.png'
import "./cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { items, totalQuantity, totalAmount } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const navigate = useNavigate()
  const getBtn= ()=>{
    navigate("/")
  }

  return (
    <div>
      
      <h2 className="shopping">Shopping Cart</h2>
      {items.length === 0 ? (
        <div className="emty-btn">
        <p>Your cart is empty.</p>
        <button className="get" onClick={getBtn}>Get Started</button>
        </div>
        
      ) : (
        <>
          <div className="cneter-cart" >
            {items.map(item => (
            <>  
            <div key={item.id} className="cart-item">
                <div className="image">
                    <div className="img-delete">
                  <img src={item.image} alt={item.title} id="img-cart" />
                  <img src={Delete} alt=""  id="delete"onClick={() =>
                      dispatch(removeFromCart({ id: item.id, size: item.size }))
                    } />
                      </div>   
                      <div className="items-details-cart">
                        <div className="title-price">
                          <h3>{item.title}</h3>
                          <p>Price: ${item.price}</p>
                        </div>
                        <p> {item.offer}</p>
                        <p>Size: {item.size}</p>
                        </div>               
                </div>

                <div className="total-price">
                  <p className="Summary">Summary</p>
                  <div className="flexTotal-price">
                    <div className="flex-ul-li">
                    <ul className="flex-ul">
                      <li>Quantity:</li>
                      <li>Total:₹</li>
                    </ul>
                    </div>
                    <div className="flex-ul-li">
                    <ul flex-ul>
                      <li>{item.quantity}</li>
                      <li>{item.totalPrice}</li>
                    </ul>
                    </div>
                  </div>
                  
                  <div className="twobtn-check">
                    <button className="guest">Guest Checkout</button>
                    <button className="guest">Member Checkout</button>
                  </div>
                </div>


            </div>

            </>
            ))}
          </div>
          <div>
            <div className="lower">
            <p>Total Items: {totalQuantity}</p>
            <p>Total Price: ₹{totalAmount}</p>
            <button className="clearCart" onClick={() => dispatch(clearCart())} >Clear Cart</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
