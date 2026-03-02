
import "./header.css"
const Header = props => {
  return (
    <div>
      <nav>
        <div className="logo">
    <h1>Logo</h1>
        </div>
        <div className="nev-text">
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>sarvice</li>
    </ul>
        </div>
      </nav>
    </div>
  )
}

Header.propTypes = {

}

export default Header
