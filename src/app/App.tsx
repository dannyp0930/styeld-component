import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../components/Home/Home';
import { Navbar } from '../common/Navbar';
import { Buttons } from '../components/Buttons/Buttons';
import { Inputs } from '../components/Inputs/Inputs';
import { Grid } from '../components/Grid/Grid';

export default function App() {

  return (
    <div className="App" >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='buttons' element={<Buttons/>}></Route>
        <Route path='inputs' element={<Inputs/>}></Route>
        <Route path='grid' element={<Grid/>}></Route>
      </Routes>
    </div>
  );
};