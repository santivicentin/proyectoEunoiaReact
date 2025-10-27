
import React from 'react';
import NavBar from './components/NavBar'; 

function App() {
  return (
    <>
      <NavBar />
      <div className="main-content" style={{ padding: '20px', textAlign: 'center' }}>
        <h1>EUNOIA E-COMMERCE</h1>
        <p>¡Bienvenido a la tienda online!</p>
      </div>
    </>
  );
}

export default App;
