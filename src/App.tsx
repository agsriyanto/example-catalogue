import { useState } from 'react';
import reactLogo from './assets/printing.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar';
import Menu from './components/menu';
import Home from './pages/home';
import Request from './pages/request';
import Invoice from './pages/invoice';

function App() {
  const [count, setCount] = useState(0);
  const [menu, setMenu] = useState<string>('home');

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
  };

  return (
    <>
      <Navbar />
      <Menu handleChange={handleChangeMenu} menu={menu} />
      {renderMenu()}
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
