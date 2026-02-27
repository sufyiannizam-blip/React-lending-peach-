
import Header from './Liout/Header.jsx'
const App = () => {
  return (
    <div>
      <nav>
        <div>
            <h1>Logo</h1>
        </div>
        <div>
            <ul>
                <li>Home</li>
                <li>Destinations</li>
                <li>Travel Guides</li>
                <li>Stories</li>
                <li>Blog</li>
            </ul>
        </div>
        <button className="button">Sign In</button>
         <button className="button">Sign Up</button>
      </nav>
      <App />
      <Header />
    </div>
  )
}

export default App
