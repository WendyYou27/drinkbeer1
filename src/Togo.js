import React from "react";
import TogoMenu from "./TogoMenu";
import QuantityBtn from "./QuantityBtn";
import { Link } from "react-router-dom";

const Togo = () => {
  return (
    <div>
      <div className="row mt-3">
        {TogoMenu.map((item) => {
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
              <div className="text-center">
                <QuantityBtn itemInfo={item} />
              </div>
            </div>
          );
        })}

        <div className="text-center m-2">
          <Link to="/Cart">
            <button
              className="bg-warning border border-warning text-white "
              style={{ width: "150px" }}
            >
              前往購物車結帳
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Togo;
