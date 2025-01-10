import { IconSmartHome, IconShoppingCart, IconChevronDown } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { Badge } from 'antd';

import './navbar.scss';
import iifLogo from '../../assets/iif-logo.svg';

const Navbar = (props: any) => {
  const { isOpen, setIsOpen } = props;

  return (
    <div className="navbar">
      <img src={iifLogo} className="logo" alt="Iif logo" />
      <div className="navbar-content">
        <Link to="/" className="navbar-title">
          <div className="navbar-title-home">
            <IconSmartHome className="icon-home" size={20} stroke="1" />
            Back to Homepage
          </div>
        </Link>
        <div className="navbar-title-user">
          <Badge count={2} className="badge" size="small">
            <IconShoppingCart size={20} stroke="1" onClick={() => setIsOpen(!isOpen)} className="icon-shop" />
          </Badge>
          <div className="card-user">
            <p className="title-name">Aabbcc</p>
            <p className="title-role">GA Officer</p>
          </div>
          <IconChevronDown size={20} />
        </div>
      </div>
    </div>
  )
};

export default Navbar;