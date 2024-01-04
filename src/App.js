import Discounted from "./components/Discounted";
import Explore from "./components/Explore";
import Featured from "./components/Featured";
import Highlights from "./components/Highlights";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import Footer from "./components/Footer.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home.jsx";
import Books from "./pages/Books.jsx";
import { books } from "../src/data.js";
import BookInfo from "./pages/BookInfo.jsx";
import Cart from "./pages/Cart.jsx";
import React, { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }]);
  }

  function changeQuantity(book, quantity) {
    setCart(
      cart.map((item) => {
        if (item.id === book.id) {
          return {
            ...item,
            quantity: +quantity,
          };
        } else {
          return item;
        }
      })
    );
  }

  function removeItem(item) {
    setCart(cart.filter((book) => book.id !== item.id));
    //Updates the cart to everything EXCEPT for the item id that you just passed, essentially removing it
    console.log("Remove item", item);
  }

  function numberOfItems() {
    let counter = 0;

    cart.forEach((item) => {
      counter += item.quantity;
    });

    return counter;
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()} />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/books" exact element={<Books books={books} />} />
          <Route
            path="/books/:id"
            element={
              <BookInfo
                books={books}
                addToCart={addToCart}
                cart={cart}
              ></BookInfo>
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                books={books}
                cart={cart}
                changeQuantity={changeQuantity}
                removeItem={removeItem}
              ></Cart>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
