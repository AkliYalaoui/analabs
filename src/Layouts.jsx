import Nav from "../src/Nav";
import Footer from "../src/Footer";

const Layouts = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer></Footer>
    </>
  );
};

export default Layouts;
