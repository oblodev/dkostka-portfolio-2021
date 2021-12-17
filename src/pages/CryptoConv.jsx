import "./pages.css";
import InfoWebsite from "./infoWebsite/InfoWebsite";

function CryptoConv() {
  const image = "../images/cryconcal.jpg";
  const bigImage = "../images/cryconcal-web.png";
  const link = "https://www.cryconcal.dkostka.dev/";
  const background =
    "I created a small webapp to get an exchange rate for cryptocurrencies. This website is a webapp project. I created the website as an exchange calculator. This project required me to use Javascript.";
  const information =
    "I used HTML5, along with CSS Flexbox and JavaScript for the areas that required interactivity.";
  const stack = "HTML / CSS / Javascript";
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

export default CryptoConv;
