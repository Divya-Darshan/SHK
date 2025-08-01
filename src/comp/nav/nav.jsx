import './nav.css'

function Nav() {
  return (
    <nav className="navbar">
      <div className="logo">SHK</div>
      <span className="bar"></span>
      <ul className="nav-links">
        <li><a href="#">Mens</a></li>
        <li><a href="#">Womens</a></li>
        <li><a href="#">Kids</a></li>
      </ul>
      <div className='ham'>
          <i class="ri-menu-3-line"></i>
      </div>
    </nav>
  )
}

export default Nav
