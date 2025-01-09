import './menu.scss';

const Menu = (props: { handleChange: (string) => void, menu: string }) => {
  const { handleChange, menu } = props;

  return (
    <div className="menu">
      <h4 onClick={() => handleChange('home')} className={menu === 'home' ? 'active' : ''}>Home</h4>
      <h4 onClick={() => handleChange('request')} className={menu === 'request' ? 'active' : ''}>My Request</h4>
      <h4 onClick={() => handleChange('invoice')} className={menu === 'invoice' ? 'active' : ''}>Invoice</h4>
    </div>
  );
};

export default Menu;