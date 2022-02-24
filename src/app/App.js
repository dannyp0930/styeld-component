import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../components/home/Home';
import { Navbar } from '../common/Navbar';
import { Buttons } from '../components/Buttons/Buttons';

export default function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='buttons' element={<Buttons/>}></Route>
      </Routes>
    </div>
  );
};