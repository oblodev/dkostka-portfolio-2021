import "./pages.css";
import InfoWebsite from "./infoWebsite/InfoWebsite";

function KryptoKurs() {
  const image = "../images/kryptokurs-mock.jpg";
  const bigImage = "../images/cryptoprice.PNG";
  const link = "https://www.kryptokurs.pl/";
  const background =
    "I created a webapp to fetch data from an API. This website is a webapp project. On it you are able to check the TOP 100 cryptocurrency prices by Market Cap. The prices are updated every 20 seconds. This project required me to use Javascript.";
  const information =
    "I used HTML5, along with CSS Flexbox and JavaScript for the data fetch from the API.";
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

export default KryptoKurs;
