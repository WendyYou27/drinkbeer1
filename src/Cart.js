import React, { useContext } from "react";
import { Link } from "react-router-dom";
import QuantityBtn from "./QuantityBtn";
import CartContext from "./CartContext";

const Cart = () => {
  let { cartItems } = useContext(CartContext);

  const cartEmpty = cartItems.length <= 0 ? true : false;
  const toTal = cartItems.reduce((total, item) => {
    return (total += item.price * item.quantity);
  }, 0);

  const freebie = 699;

  return (
    <div className="text-center">
      購物車內容
      {cartEmpty && (
        <div>
          <div style={{ paddingTop: "70px" }}></div>
          您的購物車現在沒有商品
          <br />
          歡迎到<Link to="/Togo">外帶專區</Link>選購
        </div>
      )}
      {!cartEmpty && (
        <div>
          <div id="itemInCart">
            {cartItems.map((item) => {
              return (
                <div
                  className="card col-sm-4 p-5 border border-0"
                  style={{ border: "item.borderWidth" }}
                  key={item.id}
                >
                  <img
                    className="card-img-top img-thumbnail img-fluid mx-auto"
                    src={item.imgSrc}
                    alt="cuisine's picture"
                    style={{ width: "150px", height: "200px" }}
                  />
                  <div className="card-title text-center">{item.name}</div>
                  <div className="text-center">{item.price}元</div>
                  <div className="text-center">{item.content}</div>
                  <div>購買數量:{item.quantity}個</div>
                  <QuantityBtn itemInfo={item} />
                </div>
              );
            })}
          </div>
          <div id="toTal">總計金額為{toTal}元</div>

          {toTal >= freebie ? (
            <div>您的金額已達699元，可獲得免費贈品</div>
          ) : (
            <div>還差${freebie - toTal}元，即可獲得免費贈品</div>
          )}
        </div>
      )}
      {toTal > 0 ? (
        <div className="m-2">
          <button className="bg-warning border border-warning text-white ">
            送出訂單
          </button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Cart;
