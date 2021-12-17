import React from "react";

function WebsiteItem({ title, link, image }) {
  return (
    <div>
      <a href={link} className="item">
        <img src={image} alt="" />
        <h3>{title}</h3>
      </a>
    </div>
  );
}

export default WebsiteItem;
