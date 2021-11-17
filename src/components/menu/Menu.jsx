import "./menu.scss";

function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#about">about</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">portfolio</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
