import './nav.css'
import '../../App.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth, googleAuthProvider } from '../../firebase/Auth-config';

function Nav() {
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Check if user is logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Login
  async function Login() {
    try {
      await signInWithPopup(auth, googleAuthProvider);
    } catch (err) {
      console.error(err);
    }
  }

  // Logout
  async function Logout() {
    try {
      await signOut(auth);
      setDropdownOpen(false);
    } catch (err) {
      console.error(err);
    }
  }

  // Navbar open/close logic
  useEffect(() => {
    const navbar = document.getElementById('navbar');
    const open_btn = document.getElementById('isopen');

    window.openNav = () => {
      open_btn.style.top = '-100px';
      navbar.style.left = '0px';
    };

    window.closeNav = () => {
      open_btn.style.top = '0px';
      navbar.style.left = '-1000px';
    };
  }, []);

  return (
    <>
      <div className='ham-container'>
        <button onClick={() => window.closeNav()} id='isclose' className='ham'>
          <i className="ri-close-fill" />
        </button>
        <button onClick={() => window.openNav()} id='isopen' className='ham'>
          <i className="ri-menu-3-line" />
        </button>
      </div>




      <div className='login-container'>

        {user ? (
          <div className="user-info">
            <button
              className="profile-btn"
              onClick={() => setDropdownOpen((prev) => !prev)}
            >
              <img src={user.photoURL} alt="profile" className="profile-pic" />
            </button>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <span className="username">{user.displayName}</span>
                <button onClick={Logout} className="logout-btn">Logout</button>
              </div>
            )}
          </div>
        ) : (
          <button id='login' onClick={Login}>Login</button>
        )}

        
        <button id='cart'><i className="ri-shopping-cart-2-line"></i></button>
      </div>

      <nav className="navbar">
        <div className="logo"><Link to="/">SHK</Link></div>
        <span className="bar"></span>
        <ul className="nav-links" id="navbar">
          <li><a href="#">Mens</a></li>
          <li><a href="#">Womens</a></li>
          <li><a href="#">Kids</a></li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
