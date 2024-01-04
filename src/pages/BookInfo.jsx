import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "../components/ui/Rating";
import Price from "../components/ui/Price";
import Book from "../components/ui/Book";

const BookInfo = ({ books, addToCart, cart }) => {
  const { id } = useParams();

  const book = books.find((book) => +book.id === +id);
  // + converts any variable that isn't a num to a num (string => num)
  console.log(book);

  function addBookToCart(book) {
    addToCart(book);
  }

  function bookExistsOnCart() {
    const dupe = cart.find((book) => book.id === +id);

    return dupe;
  }
  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left"></FontAwesomeIcon>
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img src={book.url} alt="" className="book__selected--img" />
              </figure>

              <div className="book__selected--description">
                <h2 className="book__selected--title">{book.title}</h2>
                <Rating rating={book.rating} />
                <div className="book__selected--price">
                  <Price
                    originalPrice={book.originalPrice}
                    salePrice={book.salePrice}
                  />
                </div>
                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Repellendus dolorum laudantium dolorem harum autem minima
                    necessitatibus eligendi odit perferendis, nulla unde commodi
                    rem quaerat et ut accusantium enim aut totam?
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Repellendus dolorum laudantium dolorem harum autem minima
                    necessitatibus eligendi odit perferendis, nulla unde commodi
                    rem quaerat et ut accusantium enim aut totam?
                  </p>
                </div>
                {bookExistsOnCart() ? (
                  <Link to={`/cart`} className="book__link">
                    <button className="btn">Checkout</button>
                  </Link>
                ) : (
                  <button
                    className="btn"
                    onClick={() => addBookToCart(book)}
                    
                  >
                    Add to cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">Recommended Books</h2>
            </div>
            <div className="books">
              {books
                .filter((book) => book.rating === 5 && +book.id !== +id)
                .slice(0, 4)
                .map((book) => (
                  <Book book={book} key={book.id}></Book>
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;
