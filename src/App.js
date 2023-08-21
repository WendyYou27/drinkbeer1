import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Homepage from "./Homepage";
import Menu from "./Menu";
import MenuHamburger from "./MenuHamburger";
import Cart from "./Cart";
import Togo from "./Togo";
import CartContext from "./CartContext";
import { useState, useContext } from "react";

function App() {
  const [cartItems, setcartItems] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
        <CartContext.Provider value={{ cartItems, setcartItems }}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Homepage />}></Route>
              <Route path="Menu" element={<Menu />}></Route>
              <Route path="MenuHamburger" element={<MenuHamburger />}></Route>
              <Route path="Togo" element={<Togo />}></Route>
              <Route path="Cart" element={<Cart />}></Route>
            </Route>
          </Routes>
        </CartContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
