import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./State";
import { Stepper } from "./Steps/Stepper";
import { Inicio } from "./Steps/Inicio";
import { Residuo } from "./Steps/Residuo";
import { Fecha } from "./Steps/Fecha";
import { Confirmacion } from "./Steps/Confirmacion";
 
export const App = () => {
  return (
    <div className="App">
      <div className="App-card">
        <AppProvider>
          <Router>
            <Stepper />
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/residuo" element={<Residuo />} />
              <Route path="/fecha" element={<Fecha />} />
              <Route path="/confirmacion" element={<Confirmacion />} />
            </Routes>
          </Router>
        </AppProvider>
      </div>
    </div>
  );
};