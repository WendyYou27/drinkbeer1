import React from "react";
import { useState, useContext } from "react";
import CartContext from "./CartContext";

const QuantityBtn = ({ itemInfo }) => {
  const { cartItems, setcartItems } = useContext(CartContext);

  //---===確認購物車內的商品===---
  //確認購物車內有無此商品
  //findIndex
  //如果已在購物車內，return index的位子
  //如果不在購物車內，return -1
  let itemIndexInCart = cartItems.findIndex((e) => {
    return e.id === itemInfo.id;
  });

  // 目前的數量與點擊數不符;
  //從cartItems 中提取商品的数量
  let initialQuantity = 0;
  if (itemIndexInCart !== -1) {
    initialQuantity = cartItems[itemIndexInCart].quantity;
  }
  let [numInCart, setnumInCart] = useState(initialQuantity);

  //---===確認購物車內的商品===---

  const handleAdd = () => {
    let newCartItems = [...cartItems];
    //原本購物車裡面沒有(return -1)
    if (itemIndexInCart === -1) {
      setcartItems([
        {
          id: itemInfo.id,
          name: itemInfo.name,
          imgSrc: itemInfo.imgSrc,
          price: itemInfo.price,
          content: itemInfo.content,
          quantity: 1,
        },
        ...cartItems,
      ]);

      //原本購物車裡面有(quantity+1)
    } else {
      let newCartArr = [...cartItems];
      newCartArr[itemIndexInCart].quantity++;
      setcartItems(newCartArr);
    }

    setnumInCart(numInCart + 1);
  };

  const handleSub = () => {
    if (cartItems[itemIndexInCart].quantity === 1) {
      let newCartArr = [...cartItems];
      newCartArr.splice(itemIndexInCart, 1);
      setcartItems(newCartArr);
    } else {
      let newCartArr = [...cartItems];
      newCartArr[itemIndexInCart].quantity--;
      setcartItems(newCartArr);
    }

    setnumInCart(numInCart - 1);
  };

  return (
    <div>
      {numInCart === 0 ? (
        <div
          onClick={handleAdd}
          className="bg-warning border border-warning mx-auto text-white"
          style={{ width: "150px" }}
        >
          加入購物車
        </div>
      ) : (
        <div>
          <button
            onClick={handleSub}
            className="bg-white border border-warning"
          >
            -
          </button>
          <span className="m-2">{numInCart}個</span>
          <button
            onClick={handleAdd}
            className="bg-white border border-warning"
          >
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default QuantityBtn;
