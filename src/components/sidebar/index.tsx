import { IconTrash } from "@tabler/icons-react";
import "./sidebar.scss";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  cartItems: CartItem[];
  setCartItems: (items: CartItem[]) => void;
  isModalVisible: boolean;
  setIsModalVisible: (isVisible: boolean) => void;
}

interface CartItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

const Sidebar = (props: SidebarProps) => {
  const { isOpen, setIsOpen, cartItems, setCartItems, isModalVisible, setIsModalVisible } = props;

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const handleQuantityChange = (id: number, change: number) => {
    setCartItems((prevItems: CartItem[]) =>
      prevItems.map((item: CartItem) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + change, 1) }
          : item
      )
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce((total: number, item: CartItem) => total + item.price * item.quantity, 0);
  };

  return (
    <>
      {isOpen && (
        <>
          <div className="overlay" onClick={toggleSidebar}></div>

          <div className="cart-sidebar">
            <div className="cart-header">
              <div className="cart-header-title">
                <button className="close-button" onClick={toggleSidebar}>
                  ✕
                </button>
                <h2>My Cart</h2>
              </div>
              <div className="cart-header-action">
                <div className="select-all">
                  <input type="checkbox" className="checkbox" />
                  <span>Select All</span>
                </div>
                <div className="delete-all">
                  <IconTrash size={20} color="#F58220" stroke="1" />
                </div>
              </div>
            </div>
            <div className="cart-body">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <input type="checkbox" className="checkbox" />
                  <img src={item.image} alt={item.name} />
                  <div className="item-details">
                    <div className="item-details-name">
                      <h4>{item.name}</h4>
                      <p>IDR {item.price.toLocaleString()}</p>
                    </div>
                    <div className="item-details-name">
                      <div className="item-details-vendor">
                        <p>Vendor Name:</p>
                        <p className="item-details-vendor-2">{item.vendor}</p>
                      </div>
                      <div className="item-quantity">
                        <button
                          onClick={() => handleQuantityChange(item.id, -1)}
                          disabled={item.quantity === 1}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => handleQuantityChange(item.id, 1)}>
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-footer">
              <p className="cart-footer-selected">{cartItems.length} Product selected</p>
              <p>Total: IDR {calculateTotal()}</p>
              <button className="next-button" onClick={() => setIsModalVisible(!isModalVisible)}>Next</button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Sidebar;
