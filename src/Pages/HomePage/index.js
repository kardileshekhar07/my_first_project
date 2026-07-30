import Header from "../../Componets/Header";
// import "./HomePage.module.scss";
import style from "./HomePage.module.scss";
import Footer from "../../Componets/Footer";

const Homepage = () => {
  const hName = "HEADER";
  const Pages = ["home", "About", "Profile", "Product", "Blog", "Contact"];
  const student = [{ name: "Shekhar", email: "shekhar@gamil.com" }];
  return (
    <div>
      <Header name={student} />
      <div className={style.HomePage}>
        <h3> THIS IS THE BODY</h3>
        <h3 className="bg-primary"> Bootstrap stating </h3>
      </div>
      <Footer />
    </div>
  );
};
export default Homepage;
