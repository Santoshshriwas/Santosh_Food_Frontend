import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const Cart = () => {

  const {cartItems, food_list, removeFromCart,getTotalCartAmount,url} = useContext(StoreContext);
  const navigate = useNavigate();

//   let response = await axios.post(url + "/api/order/place", orderData, { headers: { token } });
//   if (response.data.success) {
//       const { session_url } = response.data;
//       window.location.replace(session_url);
//   }
//   else {
//       toast.error("Something Went Wrong")
//   }
// }


//   useEffect(() => {
//     if (!token) {
//         toast.error("to place an order sign in first")
//         navigate('/home')
//     }
//     else if (getTotalCartAmount() === 0) {
//         navigate('/')
//     }
// }, [token])



  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p> <p>Title</p> <p>Price</p> <p>Quantity</p> <p>Total</p> <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id]>0) {
            return (<div key={index}>
              <div className="cart-items-title cart-items-item">
                <img src={url+"/images/"+item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <div>{cartItems[item._id]}</div>
                <p>${item.price*cartItems[item._id]}</p>
                <p className='cart-items-remove-icon' onClick={()=>removeFromCart(item._id)}>x</p>
              </div>
              <hr />
            </div>)
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details"><p>Subtotal</p><p>${getTotalCartAmount()}</p></div>
            <hr />
            <div className="cart-total-details"><p>Delivery Fee</p><p>${getTotalCartAmount()===0?0:2}</p></div>
            <hr />
            <div className="cart-total-details"><b>Total</b><b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b></div>
          </div>
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='promo code'/>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
