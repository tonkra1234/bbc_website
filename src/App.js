import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import NavTab from './component/Navbar';
import Body from './component/Mainpage/Body';

function App() {
  return (
    <React.Fragment>
      <div className='App'>
        <NavTab />
        <Body />
      </div>
    </React.Fragment>
  );
}

export default App;
