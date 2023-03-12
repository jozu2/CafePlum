import React from "react";
import "./HomeSec1A.scss";
import orderCake from "./HomeImage/CakeOrder.png";

const HomeSec1A = () => {
  return (
    <>
      <div className="custom-order-container">
        <div className="bg-co">
          <div className="div-co-img">
            <img src={orderCake}></img>
          </div>

          <div className="co-description-container">
            <div className="co-description">
              <h1>Order a Customized Cake</h1>
              We believe that every cake should be as unique as the person it's
              made for. That's why we offer a wide variety of options for your
              own personalized cake.
            </div>
            <button>Order Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSec1A;
