import "./pages.css";
import InfoWebsite from "./infoWebsite/InfoWebsite";

function DtDental() {
  const image = "../images/dt-dental.jpg";
  const bigImage = "../images/dtdental-web.png";
  const link = "https://www.dt-dentalservice.de";
  const background =
    "I created a website for a dental startup in Germany. This website was one of my first freelance projects. I created the whole Design and did the coding of the website. This project required me to build a fully responsive website.";
  const information =
    "I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity. I also used a bit PHP for the contact form.";
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

export default DtDental;
