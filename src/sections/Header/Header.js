import './Header.css'
import logo from '../../images/logo.png'
import NavItem, { NavItemDropdown } from '../../components/NavItem/NavItem'

const Header = () => {
  return (
    <div>
      <div className="navbar navbar-expand-md bg-dark navbar-dark text-white cyborg-nav">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src={logo} alt='' />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mainmenu">
            <ul className="navbar-nav ms-auto">
              <NavItem>
                <a href='/' className="nav-link">Home</a>
              </NavItem>
              <NavItem>
                <a href='/' className="nav-link">Brows</a>
              </NavItem>
              <NavItemDropdown>
                <a href="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Details</a>
                <ul className="dropdown-menu">
                  <li><a href="/" className="nav-link">Learn</a></li>
                  <li><a href="/" className="nav-link">Blog</a></li>
                </ul>
              </NavItemDropdown>
              <NavItem>
                <a href="/" className="nav-link">Ask Me</a>
              </NavItem>
              <a href='/' className="nav-link">Profile</a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header