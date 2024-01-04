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

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/books" element={<Books books={books} />}></Route>
          <Route
            path="/books/1"
            element={<BookInfo books={books}></BookInfo>}
          ></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
