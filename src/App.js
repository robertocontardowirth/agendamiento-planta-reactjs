import React, { useState } from 'react';
import './App.css';
import UsersIcon from './users.svg';
import TruckIcon from './truck.svg';
import CalendarIcon from './calendar.svg';
import CheckCircleIcon from './check-circle.svg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

function App() {
  const [tabIndex, setTabIndex] = useState(0)

  const mostrarPaso = (index) => {
    console.log(index)
  }

  return (
    <div className="App">
      <Tabs className="App-card" selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="App-nav">
          <Tab selectedClassName="active" disabled={false} tabIndex="0">
            <span className="icono">
              <img src={UsersIcon} alt="Generador" className="feather" />
            </span>
            Generador
          </Tab>
          <Tab selectedClassName="active" disabled={false} tabIndex="1">
            <span className="icono">
              <img src={TruckIcon} alt="Carga" className="feather" />
            </span>
            Carga
          </Tab>
          <Tab selectedClassName="active" disabled={false} tabIndex="2">
            <span className="icono">
              <img src={CalendarIcon} alt="Fecha" className="feather" />
            </span>
            Fecha
          </Tab>
          <Tab selectedClassName="active" disabled={false} tabIndex="3">
            <span className="icono">
              <img src={CheckCircleIcon} alt="Confirmación" className="feather" />
            </span>
            Confirmación
          </Tab>
        </TabList>

        <TabPanel selectedClassName="active" className="App-step">
            <div className="form-group">
                <label className="form-label">RUT Generador</label>
                <input type="text" className="form-control inputRutGenerador" id="rutGenerador"/>
            </div>
            <div className="form-group">
                <label className="form-label">Nombre Generador</label>
                <input type="text" className="form-control inputNombreGenerador" id="nombreGenerador"/>
            </div>
            <div className="form-group">
                <label className="form-label">RUT Transportista</label>
                <input type="text" className="form-control inputRutTransportista" id="rutTransportista"/>
            </div>
            <div className="form-group">
                <label className="form-label">Nombre Transportista</label>
                <input type="text" className="form-control inputNombreTransportista" id="nombreTransportista"/>
            </div>
            <div className="form-group">
                <label className="form-label">Patente</label>
                <input type="text" className="form-control inputPatente" id="patente"/>
            </div>
            <div className="form-group">
                <button className="App-btn App-btn-submit" onClick={() => {
                  mostrarPaso(1)
                }}>Siguiente</button>
            </div>
        </TabPanel>
        <TabPanel selectedClassName="active" className="App-step">
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel selectedClassName="active" className="App-step">
          <h2>Any content 3</h2>
        </TabPanel>
        <TabPanel selectedClassName="active" className="App-step">
          <h2>Any content 4</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
