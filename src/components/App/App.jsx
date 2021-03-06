import React from 'react';
import BpkText from 'bpk-component-text';

import Header from '../Header';

import STYLES from './App.css';
import AllFlights from "../AllFlights";

const getClassName = (className) => STYLES[className] || 'UNKNOWN';

const App = () => (
  <div className={getClassName('App')}>
    <Header/>
    <main className={getClassName('App__main')}>
      <AllFlights/>
    </main>
  </div>
);

export default App;
