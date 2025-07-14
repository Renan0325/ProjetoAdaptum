import React from 'react';
import Regions from '../src/pages/Regions';

const App = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <span className="navbar-brand">Painel de Regiões</span>
        </div>
      </nav>
      <div className="container">
        <Regions />
      </div>
    </>
  );
};

export default App;
