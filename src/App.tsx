import { useState } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";

import reactLogo from './assets/printing.svg'
import viteLogo from '/vite.svg'
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
  const [count, setCount] = useState(0);
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
      image: "https://via.placeholder.com/50", // Replace with your image URL
    },
    {
      id: 2,
      name: "Asus Charger",
      price: 100000,
      vendor: "PT MBUI",
      quantity: 1,
      image: "https://via.placeholder.com/50", // Replace with your image URL
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
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
