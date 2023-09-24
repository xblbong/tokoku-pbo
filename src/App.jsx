import './App.css'
import Register from './pages/Register';
import Login from './pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import PesananAnda from './pages/PesananAnda';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/pesanananda" element={<PesananAnda />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
{/* <MainLayout></MainLayout> */}
