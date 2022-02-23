import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../components/home/Home';
import { Navbar } from '../common/Navbar';
import { About } from '../components/About/About';

export default function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='about' element={<About/>}></Route>
      </Routes>
    </div>
  );
};