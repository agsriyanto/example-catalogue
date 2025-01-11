import { useState } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";

import './App.css'
import Navbar from './components/navbar';
import Menu from './components/menu';
import Home from './pages/home';
import Request from './pages/request';
import Invoice from './pages/invoice';
import ItPeriperal from './pages/itPeriperal';
import Sidebar from './components/sidebar';
import ModalFinancial from './components/modalFinancial';
import Maintenance from './pages/maintenance';
import cartsData from "./assets/data/cart.json";
import { Product } from './types/product';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  vendor: string;
  quantity: number;
}

function App() {
  const [menu, setMenu] = useState<string>('home');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState(cartsData as CartItem[]);

  const renderMenu = () => {
    switch (menu) {
      case 'home':
        return <Home />;
      case 'request':
        return <Request />;
      case 'invoice':
        return <Invoice />;
      default:
        return <Home />;
    }
  };

  const handleChangeMenu = (menu: string) => {
    setMenu(menu);
    navigate("/");
  };

  const addToCart = (product: Product) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const getTotalQuantity = (cartItems: CartItem[]): number => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };
  
  const totalQuantity = getTotalQuantity(cartItems);

  const props = {
    isOpen,
    setIsOpen,
    cartItems,
    setCartItems,
    isModalVisible,
    setIsModalVisible,
    totalQuantity,
    addToCart,
  };

  return (
    <>
      <Navbar {...props} />
      <Menu handleChange={handleChangeMenu} menu={menu} />
      <Sidebar {...props} />
      <ModalFinancial isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />

      <Routes>
        <Route path="/" element={renderMenu()} />
        <Route path="/it-periperal" element={<ItPeriperal {...props} />} />
        <Route path="/printing" element={<Maintenance />} />
        <Route path="/stationary-supply" element={<Maintenance />} />
        <Route path="/merchandise" element={<Maintenance />} />
      </Routes>
    </>
  )
}

export default App
