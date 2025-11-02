import { navLinks } from "../constants";
const NavBar = () => {
  return (
    <header>
      <nav>
        <img src="/logo.svg" alt="Apple logo"></img>
        <ul>
          {navLinks.map(({ label }) => (
            <li key={label}>
              <a href={label}>{label}</a> {/*{ label} is text here*/}
            </li>
          ))}
        </ul>
        <div className="flex-center gap-3">
          <button>
            <img src="./search.svg" alt="Search" /> {/*Search button*/}
          </button>
          <button>
            <img src="./cart.svg" alt="Cart" /> {/*Search button*/}
          </button>
        </div>{" "}
        {/*Center the navbar*/}
      </nav>
    </header>
  );
};

export default NavBar;
