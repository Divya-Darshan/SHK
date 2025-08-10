import './nav.css'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


function Nav() {
  
    useEffect(() => {
    const navbar = document.getElementById('navbar');
    const close_btn = document.getElementById('isclose');
    const open_btn = document.getElementById('isopen');

    window.openNav = () => {

      open_btn.style.top = '-100px';
      navbar.style.left = '0px'
    };

    window.closeNav = () => {

      open_btn.style.top = '0px';
      navbar.style.left = '-1000px'
    };
  }, []);

  return (
    <>
    <div className='ham-container'>

    <button onClick={() => window.closeNav()} id='isclose' className='ham'><i class="ri-close-fill" /></button>
    <button onClick={() => window.openNav()} id='isopen' className='ham'> <i class="ri-menu-3-line"/> </button>

    </div>

    <nav className="navbar" >
    
      <div className="logo"><Link to="/">SHK</Link></div>
      
      <span className="bar"></span>
    
      <ul className="nav-links" id="navbar">
    
        <li><a href="#">Mens</a></li>
        <li><a href="#">Womens</a></li>
        <li><a href="#">Kids</a></li>
    
      </ul>
    
    </nav>
    </>
  )
}

export default Nav
