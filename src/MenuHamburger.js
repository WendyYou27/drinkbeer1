import React from "react";
import MenuHamburgerList from "./MenuHamburgerList";

const MenuHamburger = () => {
  return (
    <div className="row mt-3">
      {MenuHamburgerList.map((item) => {
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
          </div>
        );
      })}
    </div>
  );
};

export default MenuHamburger;
