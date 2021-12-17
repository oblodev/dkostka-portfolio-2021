import "./pages.css";
import InfoWebsite from "./infoWebsite/InfoWebsite";

function CryptoPrice() {
  const image = "../images/cbdelo1.jpg";
  const bigImage = "../images/cbdelo-web.jpg";
  const link = "https://www.cbdelo.at/";
  const background =
    "I created a webshop for an austrian CBD company. This website is a freelance project. I created the whole website with the help of the WordPress CMS and for the webshop i used the WooCommerce plugin. This project required me to build a webshop.";
  const information =
    "In this project i used a WordPress Theme and added some additional CSS.";
  const stack = "CSS / WordPress / WooCommerce";
  return (
    <div>
      <div className="container">
        <InfoWebsite
          image={image}
          link={link}
          bigImage={bigImage}
          background={background}
          information={information}
          stack={stack}
        />
      </div>
    </div>
  );
}

export default CryptoPrice;
