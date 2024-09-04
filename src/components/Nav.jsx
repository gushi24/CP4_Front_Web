import { Link } from 'react-router-dom';
import Logo from './Logo';
import '../css/nav.css';
import searchIcon from '../assets/searchIcon.svg'


const Nav = () => {
  return (
    <nav className='nav'>
        <div className='navLogo'>
            <Logo />
        </div>

        <div className="navContent">
            <div className="navSearch">
                <img src={searchIcon} alt='Search Icon' className='searchIcon'></img>

                <input
                    className="input"
                    type="search"
                    placeholder="Search..."
                    name="searchbar"
                />
            </div>
        </div>

        <div className='navLinks'>
            <Link to='/products'><button className='links' id='button'><span>Products</span></button></Link>
            <Link to='/contact'><button className='links' id='button'><span>Contact</span></button></Link>
            <Link to='/about'><button className='links' id='button'><span>About Us</span></button></Link>
        </div>

        <div className='navLogin'>
            <Link to='/login'>
                <button>Login</button>
            </Link>
        </div>
    </nav>
  );
};

export default Nav;
