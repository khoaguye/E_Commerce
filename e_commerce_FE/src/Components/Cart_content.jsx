import React, { useState } from "react";
import Cart_content_card from "./Cart_content_card";
import DeliveryMethod from "./DeliverryMethod";
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import axios from "axios";
function Cart_content() {
  const [selectedOption, setSelectedOption] = useState("credit-card");
  // const [totalSubPrice, setSubTotalPrice] = useState(0)
  // const [totalPrice, setTotalPrice] = useState(0)
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // perform payment method submission logic
   
  };

  const cart = useSelector((state) => state.cart)
   console.log(cart)
  function getSubTotalPrice(){
    let total = 0
  cart.forEach(item => {
    total += item.prices
  })
  return total
  }
  

  const getTotal = () => {
    let totalQuantity = 0
    let totalPrice = 0
    let price = 0
    let tax = 0
    cart.forEach(item => {
      totalQuantity += item.quantity
      price += item.price * item.quantity
      tax =  price * 0.08
      totalPrice = price + tax
    })
    return {price, totalPrice, totalQuantity, tax}
  }
  // get the date time:
  const now = new Date();
const year = now.getFullYear();
const month = (now.getMonth() + 1).toString().padStart(2, '0');
const day = now.getDate().toString().padStart(2, '0');
const hours = now.getHours().toString().padStart(2, '0');
const minutes = now.getMinutes().toString().padStart(2, '0');
const seconds = now.getSeconds().toString().padStart(2, '0');
const datetime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
console.log(datetime);
  const orderContain = {
    uid : "8",
    date: datetime,
    orderStatus: "Shiped",
    cart: cart.map( item => ({productId: item.id, quantity: item.quantity}))
  }
  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/order/createOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderContain),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 mt-[2em] gap-4">
      <div className=" md:col-span-3 ">
        <div className="border p-3 md:p-5 ">
          <h1 className="text-[1rem] md:text-[2rem] font-bold text-yellow-600">
            YOUR CARTS
          </h1>
          {cart?.map((item) => (
          <Cart_content_card 
            key={item.id}
            id={item.id}
            img={item.img}
            title={item.title}
            price={item.price} 
            quantity={item.quantity}
          />
          ))}
           
        </div>
        <div className="border mt-4 p-3 md:p-5">
          <h1 className="text-[1rem] md:text-[2rem] font-bold text-yellow-600">
            PAYMENT METHODS
          </h1>
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <div className="mb-4">
              <h2 className="text-lg font-medium mb-2">Payment Method</h2>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="credit-card"
                  name="paymentMethod"
                  value="credit-card"
                  checked={selectedOption === "credit-card"}
                  onChange={handleOptionChange}
                  className="form-radio h-4 w-4 text-blue-500"
                />
                <label htmlFor="credit-card" className="ml-3">
                  Credit Card
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="paypal"
                  name="paymentMethod"
                  value="paypal"
                  checked={selectedOption === "paypal"}
                  onChange={handleOptionChange}
                  className="form-radio h-4 w-4 text-blue-500"
                />
                <label htmlFor="paypal" className="ml-3">
                  PayPal
                </label>
              </div>
            </div>
            {selectedOption === "credit-card" && (
              <div>
                <h2 className="text-lg font-medium mb-2">
                  Credit Card Information
                </h2>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="cardNumber"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Card Number
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      className="form-input w-full border"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="expiryDate"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      id="expiryDate"
                      name="expiryDate"
                      className="form-input w-full border"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="cvv"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      CVV
                    </label>
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      className="form-input w-full border"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="nameOnCard"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Name on Card
                    </label>
                    <input
                      type="text"
                      id="nameOnCard"
                      name="nameOnCard"
                      className="form-input w-full border"
                    />
                  </div>
                </div>
              </div>
            )}
            {selectedOption === "paypal" && (
              <div>
                <h2 className="text-lg font-medium mb-2">PayPal Information</h2>
                <div>
                  <p>
                    Please login to your PayPal account to complete the payment.
                  </p>
                </div>
              </div>
            )}
            <div className="mt-6">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <DeliveryMethod />
      </div>

      <div className="md:col-span-1 ">
        <div className=" p-3 md:p-5 border bg-white rounded-lg shadow-lg">
          <h1 className="text-[1rem] md:text-[2rem] font-bold text-yellow-600">
            Subtotal <span className="text-[1rem] -ml-2">({getTotal().totalQuantity} items)</span> 
          </h1>
          <div className="flex justify-between font-light mt-4">
            <div >
             <p>SubTotals: </p>
             <p>Tax(8%): </p> 
             </div>
                <div className= "flex flex-col flex-end">
                <p> $ {getTotal().price}.00</p>
                 <p>+ $ {getTotal().tax} </p>
                </div>

        </div>
        <hr/>
        <div className="flex justify-between font-light mt-4">
            <div >
             <p>Your Totals: </p>
             </div>
                <div>
                <p> $ {getTotal().totalPrice} </p>
                </div>

        </div>
        <div className="mt-6">
              <button
                type="submit"
                className="bg-green-600 w-[100%] hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handlePlaceOrder}
             >
                Pay Now
              </button>
              
            </div>
           
        </div>
        <Link to = "/product">
        <button className = "ml-2 mt-4 bg-green-600 hover:bg-green-900 text-white font-bold py-2 px-4 rounded"> Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
}

export default Cart_content;
