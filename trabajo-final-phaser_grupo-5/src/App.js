// import Phaser from 'phaser';
// import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home.js';

import Reglas from './components/Reglas.js';
import reglas from './json/reglas.json';

import Recordatorios from './components/Recordatorio.js';
import recordatorios from './json/recordatorios.json';

import Desarrolladores from './components/Desarrolladores.js';
// import desarrolladores from './json/desarrolladores.json';


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Reglas" element=
            {reglas.map(rule =>
              <Reglas
                reglaUno={rule.reglaUno}
                reglaDos={rule.reglaDos}
                reglaTres={rule.reglaTres}
                reglaCuatro={rule.reglaCuatro}
              ></Reglas>)} />
          <Route path="/Recordatorios" element=
            {recordatorios.map(reco =>
              <Recordatorios
                recordatorioUno={reco.recordatorioUno}
                recordatorioDos={reco.recordatorioDos}
                recordatorioTres={reco.recordatorioTres}
              ></Recordatorios>)} />

          <Route path="/Desarrolladores" element={<Desarrolladores />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}