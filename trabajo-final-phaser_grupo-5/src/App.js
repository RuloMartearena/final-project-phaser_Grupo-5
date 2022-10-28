// import Phaser from 'phaser';
// import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home.js';

import Reglas from './components/Reglas.js';
import reglas from './json/reglas.json';
import RulesConteiner from './components/RulesConteiner.jsx';

import Recordatorios from './components/Recordatorio.js';
import recordatorios from './json/recordatorios.json';
import RecConteiner from './components/RecConteiner.jsx';

import Desarrolladores from './components/Desarrolladores.js';
import desarrolladores from './json/desarrolladores.json';
import DevConteiner from './components/DevConteiner.jsx';


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Reglas" element=
            {<RulesConteiner>
              {reglas.map(rule =>
                <Reglas
                  regla={rule.regla}
                />)}
            </RulesConteiner>}
          />
          <Route path="/Recordatorios" element=
            {<RecConteiner>
              {recordatorios.map(reco =>
                <Recordatorios
                  recordatorio={reco.recordatorio}
                />)}
            </RecConteiner>}
          />
          <Route path="/Desarrolladores" element=
            {<DevConteiner>
              {desarrolladores.map(dev =>
                <Desarrolladores
                  srcImg={dev.srcImg}
                  name={dev.name}
                  description={dev.description}
                  group={dev.group}
                  gitHub={dev.gitHub}
                />
              )}
            </DevConteiner>}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}