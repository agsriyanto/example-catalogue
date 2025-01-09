import './navbar.scss';
import iifLogo from '../../assets/iif-logo.svg';

const Navbar = () => {

  return (
    <div className="navbar">
      <img src={iifLogo} className="logo" alt="Iif logo" />
      <div className="navbar-content">
        <div className="navbar-title-home">
          Back to Homepage
        </div>
        <div className="navbar-title-user">
          <div className="card-user">
            <p className="title-name">Aabbcc</p>
            <p className="title-role">GA Officer</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Navbar;