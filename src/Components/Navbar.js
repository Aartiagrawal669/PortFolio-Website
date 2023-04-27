import { Link } from 'react-router-dom';
import './NavbarStyles.css';
import { useState } from 'react';

const Navbar = () => {

     const[Toggle,showMenu]=useState(false);
     return(
        <>
        <header className="header">
            <nav className="nav container">
              <Link to='/' className='nav__logo'><h1>Aarti Agrawal</h1></Link>
              <div className={Toggle?'nav__menu show-menu':'nav__menu'}>
                  <ul className="nav__list grid">
                    <li className="nav__item">
                      <Link to='/' className='nav__link'>Home</Link>    
                    </li>
                    <li className="nav__item">
                      <Link to='/about' className='nav__link'>About</Link>    
                    </li>
                    <li className="nav__item">
                      <Link to='/project' className='nav__link'>Project</Link>    
                    </li>
                    <li className="nav__item">
                      <Link to='/contact' className='nav__link'>Contact</Link>    
                    </li>
                  </ul>
                  <i className="uil uil-times nav__close nav__toggle" onClick={()=>{showMenu(!Toggle)}}></i>
              </div>
              <div className="nav__toggle" onClick={()=>{showMenu(!Toggle)}}>
                <i className="uil uil-apps"></i>
              </div>
            </nav>
        </header>
        </>
     )
}

export default Navbar;

