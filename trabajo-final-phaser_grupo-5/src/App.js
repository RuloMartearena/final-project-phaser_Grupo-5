// import Phaser from 'phaser';
// import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home.js';
import Reglas from './components/Reglas.js';
import Recordatorios from './components/Recordatorio.js';
import Desarrolladores from './components/Desarrolladores.js';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Reglas" element={<Reglas />} />
          <Route path="/Recordatorios" element={<Recordatorios />} />
          <Route path="/Desarrolladores" element={<Desarrolladores />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}