import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Services from "./components/services/Services";
import Toggle from "./components/toggle/Toggle";
import Footer from "./components/footer/Footer";
import { ThemeContext } from "./context";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "#FAF8FB",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro />
      <ProductList />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
