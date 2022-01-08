import "./pages.css";
import InfoWebsite from "./infoWebsite/InfoWebsite";

function Muviz() {
  const image = "../images/muviz-mock.jpg";
  const bigImage = "../images/muviz.png";
  const link = "https://muviz.dkostka.dev/";
  const background =
    "I created a webapp to fetch data from an API. This website is a react project. You are able to sort and search movies from a movies database.";
  const information =
    "I used HTML5, along with CSS Flexbox and React to create this webapp.";
  const stack = "HTML / CSS / REACT";
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

export default Muviz;
