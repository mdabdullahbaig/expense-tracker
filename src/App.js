import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './component/navBar';
import BodyComponent from './component/body/bodyComponent';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <BodyComponent />
    </React.Fragment>
  );
}

export default App;
