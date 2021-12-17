import React from "react";
import { useState, useEffect } from "react";
import PortfolioList from "../PortfolioList.jsx/PortfolioList";
import { featuredApps, freelanceApps, webApps } from "../../data.js";
import WebsiteItem from "../websiteitem/WebsiteItem";
import "./portfolio.scss";

function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "freelance",
      title: "Freelance Apps",
    },
    {
      id: "web",
      title: "Web Apps",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredApps);
        break;
      case "freelance":
        setData(freelanceApps);
        break;
      case "web":
        setData(webApps);
        break;
      default:
        setData(featuredApps);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h2>
        <span className="back">portfolio</span>
      </h2>
      <div className="portfolio-nav">
        <ul>
          {list.map((item) => (
            <PortfolioList
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            />
          ))}
        </ul>
      </div>
      <div className="container">
        {data.map((d) => (
          <WebsiteItem title={d.title} link={d.link} image={d.img} />
        ))}
      </div>
      <div className="y-bottom"></div>
    </div>
  );
}

export default Portfolio;
