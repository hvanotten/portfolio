"use client";

import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
// import Blog from "./components/blog/Blog";
import "./App.scss";

function App() {
  return (
    <div>
      <div className="Starbkgd">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
      {/* <Navbar /> */}
      <Intro />
      <ProductList />
      <About />
      {/* <Blog /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
