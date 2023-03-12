import React from "react";
import "./HomeSec3.scss";
import best1 from "./HomeImage/best1.jpg";
function HomeSec3() {
  return (
    <div>
      <div className="container3">
        <div className="xbox1">
          <img src={best1} alt="" />
          <button>Order Now!</button>
        </div>

        <div className="xbox2">
          <h3>Strawberry Dream Cake</h3>
          <p>
            This luscious dessert is made with layers of light and fluffy
            vanilla cake, filled with a smooth and creamy strawberry mousse, and
            topped with fresh, juicy strawberries. The cake is then finished
            with a generous layer of whipped cream for a dreamy,
            melt-in-your-mouth experience. Each bite is bursting with the sweet,
            fruity flavor of fresh strawberries, making it the perfect dessert
            for any occasion. Whether you're celebrating a special event or just
            indulging in a sweet treat, the Strawberry Dream Cake is a must-try.
            Come in today and taste the dreamy goodness for yourself!
          </p>
        </div>
        <div className="xbox3">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/961/360/885/colorful-cream-cakes-pastries-sweet-food-wallpaper-preview.jpg"
            alt=""
          />
          <button>Order Now!</button>
        </div>

        <div className="xbox4">
          <h3>Decadent Chocolate Fudge Cupcakes</h3>
          <p>
            These rich and indulgent cupcakes are made with a moist and tender
            chocolate cake base, filled with a creamy and velvety chocolate
            fudge center, and topped with a smooth and silky chocolate ganache
            frosting. Each bite is a chocolate lover's dream, with the perfect
            balance of sweetness and richness. These cupcakes are perfect for
            any occasion, from a special celebration to a mid-week treat. Come
            in and indulge in the decadence of our Chocolate Fudge Cupcakes
            today!
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeSec3;
