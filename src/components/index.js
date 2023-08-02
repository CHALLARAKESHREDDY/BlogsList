import { Link } from 'react-router-dom'

import './index.css'

const Header = () => (
    <div>
  <nav className="nav-header">
    
    <div className="blog-container">
    
      <ul className="main">
      <h1>React JS</h1>
        <Link className="nav-link" to="/">
          <li>Home</li>
        </Link>
        <Link className="nav-link" to="/about">
          <li>About</li>
        </Link>
        <Link className="nav-link" to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  </nav>
  </div>
)

export default Header