import "./pages.css";
import InfoWebsite from "./infoWebsite/InfoWebsite";

function Sucursus() {
  const image = "../images/sucursus-mock.jpg";
  const bigImage = "../images/sucursus-web.png";
  const link = "https://www.sucursus.pl/";
  const background =
    "This website was a freelance project for a Law firm from Poland. I created a landing page with all necessary company details and a contact form.";
  const information =
    "For this poject i used HTML, along with CSS Flexbox and JavaScript. For the contact form i used a bit of PHP.";
  const stack = "HTML / CSS / Javascript / PHP";
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

export default Sucursus;
