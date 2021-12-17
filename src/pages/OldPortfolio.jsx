import "./pages.css";
import InfoWebsite from "./infoWebsite/InfoWebsite";

function OldPortfolio() {
  const image = "../images/oldportfolio.jpg";
  const bigImage = "../images/odlone.PNG";
  const link = "https://www.dawidkostka.pl";
  const background =
    "I created a portfolio website. This website was my first portfolio website. This project required me to build a Backend with Django.";
  const information =
    "For this poject i used HTML, along with CSS Grid, Flexbox and JavaScript. For the Backend i used Django.";
  const stack = "HTML / CSS / Javascript / Django | Python";
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

export default OldPortfolio;
