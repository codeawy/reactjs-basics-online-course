import "./index.scss";

const styles = {
  list: {
    listStyle: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  listItem: {
    textDecoration: "none",
    fontSize: 18,
    color: "white",
  },
};

interface IProps {
  companyName: string;
  aboutTxt: string;
  isLoggedIn: boolean;
  setIsLoggedIn: (val: boolean) => void;
}

const Navbar = ({ companyName, aboutTxt, isLoggedIn, setIsLoggedIn }: IProps) => {
  return (
    <nav>
      <a href="/" style={styles.listItem}>
        {companyName}
      </a>
      <ul className="navbar-list" style={{ ...styles.list }}>
        <li>
          <a href="/" style={styles.listItem}>
            Home
          </a>
        </li>
        <li>
          <a href="/" style={styles.listItem}>
            {aboutTxt}
          </a>
        </li>
        <li>
          <a href="/" style={styles.listItem}>
            Contact
          </a>
        </li>
      </ul>
      <button
        onClick={() => {
          setIsLoggedIn(!isLoggedIn);
        }}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </nav>
  );
};

export default Navbar;
