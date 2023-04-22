import { Link } from 'react-router-dom';
import './NavbarStyles.css';
import { useState } from 'react';
// import {FaBars,FaTimes} from 'react-icons/fa';
// import { useState } from 'react';

const Navbar = () => {
  
  // const [click,setClick]=useState(false);
  // const handleClick = ()=>{
  //   setClick(!click);
  // }
  // return (
  //   <>
  //   <header className="header">
  //     <Link to='/'><h1>Aarti Agrawal</h1></Link>
  //       <ul className={click?"nav-menu":"nav-menu active"}>
  //         <li>
  //           <Link to='/'>Home</Link>
  //         </li>
  //         <li>
  //           <Link to='/about' >About</Link>
  //         </li>
  //         <li>
  //           <Link to='/project'>Project</Link>
  //         </li>
  //         <li>
  //           <Link to='/contact'>Contact</Link>
  //         </li>
  //       </ul>
  //     <div className="hamburger" onClick={handleClick}>
  //       {
  //         click ?(<FaBars size={25} style={{color:'black'}}/>):(<FaTimes size={25} style={{color:'black'}}/>)
  //       }
  //     </div>
  // </header>

  //   </>
  // )
     const[Toggle,showMenu]=useState(false);
     return(
        <>
        <header className="header">
            <nav className="nav container">
              <Link to='/' className='nav__logo'><h1>Aarti Agrawal</h1></Link>
              <div className={Toggle?'nav__menu show-menu':'nav__menu'}>
                  <ul className="nav__list grid">
                    <li className="nav__item">
                      <Link to='/' className='nav__link active__link'>Home</Link>    
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

