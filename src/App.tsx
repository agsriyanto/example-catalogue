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

function App() {
  const [menu, setMenu] = useState<string>('home');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Thinkpad Ryzen 5 Pro",
      price: 10000000,
      vendor: "PT MBUI",
      quantity: 1,
      image: "https://via.placeholder.com/50",
    },
    {
      id: 2,
      name: "Asus Charger",
      price: 100000,
      vendor: "PT MBUI",
      quantity: 1,
      image: "https://via.placeholder.com/50",
    },
  ]);

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

  const props = {
    isOpen,
    setIsOpen,
    cartItems,
    setCartItems,
    isModalVisible,
    setIsModalVisible,
  };

  return (
    <>
      <Navbar {...props} />
      <Menu handleChange={handleChangeMenu} menu={menu} />
      <Sidebar {...props} />
      <ModalFinancial isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />

      <Routes>
        <Route path="/" element={renderMenu()} />
        <Route path="/it-periperal" element={<ItPeriperal />} />
        <Route path="/printing" element={<Maintenance />} />
        <Route path="/stationary-supply" element={<Maintenance />} />
        <Route path="/merchandise" element={<Maintenance />} />
      </Routes>
    </>
  )
}

export default App
