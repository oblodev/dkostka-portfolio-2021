import "./portfoliolist.scss";

function PortfolioList({ title, active, setSelected, id }) {
  return (
    <div className="portfolio-list">
      <li
        className={active ? "portfoliolist active" : "portfoliolist"}
        onClick={() => setSelected(id)}
      >
        {title}
      </li>
    </div>
  );
}

export default PortfolioList;
