import "./header.css";
const Header = (props) => {
  return (
    <div>
      <nav className="navber">
        <div className="logo">
          <h1>Logo</h1>
        </div>
        <div className="nev-text">
          <ul>
            <li>Home</li>
            <li>Destinations</li>
            <li>Travel Guides</li>
            <li>Stories</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <button className="btn">Logo</button>
          <button className="btn">Sign In</button>
        </div>
      </nav>
    </div>
  );
};

Header.propTypes = {};

export default Header;
