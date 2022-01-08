import "./menu.scss";

function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="https://dkostka.dev/#about">about</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="https://dkostka.dev/#portfolio">portfolio</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="https://dkostka.dev/#contact">contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
