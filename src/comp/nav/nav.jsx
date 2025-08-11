import './nav.css'
import '../../App.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleAuthProvider } from '../../firebase/Auth-config';

function Nav() {

   //login function

 async function Login(){
  
  await signInWithPopup(auth,googleAuthProvider)
  
  }

  //navbar open and close function
  
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

    <div className='login-container'>
          <button  id='login' onClick={Login} >Login</button>
          <button id='cart'><i class="ri-shopping-cart-2-line"></i></button>
    </div> 

    <nav className="navbar" >
    
      <div className="logo"><Link to="/">SHK</Link></div>
      
      <span className="bar"></span>
    
      <ul className="nav-links" id="navbar">
    
        <li><a href="../grid/ForU-grid">Mens</a></li>
        <li><a href="#">Womens</a></li>
        <li><a href="#">Kids</a></li>

    
      </ul>


    
    </nav>

    </>
  )
}

export default Nav
