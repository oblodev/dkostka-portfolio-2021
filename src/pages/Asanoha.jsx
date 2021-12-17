import InfoWebsite from "./infoWebsite/InfoWebsite";

function Asanoha() {
  const image = "../images/asanoha.jpg";
  const bigImage = "../images/asanoha-web.png";
  const link = "https://www.asanoha.at/";
  const background =
    "I created a website for an austrian CBD company. This website is also a freelance project. I created the whole website with the help of the WordPress CMS. This project required me to build a informative company website.";
  const information =
    "In this project i used a WordPress Theme and added some additional CSS.";
  const stack = "CSS / WordPress";
  return (
    <div>
      <InfoWebsite
        image={image}
        link={link}
        bigImage={bigImage}
        background={background}
        information={information}
        stack={stack}
      />
    </div>
  );
}

export default Asanoha;
