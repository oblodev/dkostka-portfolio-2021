import "./pages.css";
import InfoWebsite from "./infoWebsite/InfoWebsite";

function CryptoPrice() {
  const image = "../images/cryptoprice-web.jpg";
  const bigImage = "../images/ccp.png";
  const link = "https://oblodev.github.io/CryptoPrice/";
  const background =
    "I created a webapp to fetch data from an API. This website is a webapp project. On it you are able to check the TOP 100 cryptocurrency prices by Market Cap. The prices are updated every 20 seconds. This project required me to use Javascript.";
  const information =
    "I used HTML5, along with SCSS for the styling and JavaScript for the data fetch from the API.";
  const stack = "HTML / SCSS / Javascript";
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
