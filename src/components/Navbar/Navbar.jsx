import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const location = useLocation();

  // Verifica si la ruta actual es "/home"
  const isHomePage = location.pathname === '/';

  return (
    <div className={isHomePage ? 'nav' : 'nav nav-other'}>
      <Link to="/" className="nav-logo">Ev-olution</Link>
      <ul className="nav-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/explore">Explore</Link></li>
        <li><Link to="/">About</Link></li>
        <li className='nav-contact'><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
