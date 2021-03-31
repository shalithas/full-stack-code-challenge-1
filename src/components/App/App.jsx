import React from 'react';
import BpkText from 'bpk-component-text';

import Header from '../Header';

import STYLES from './App.scss';
import Itineraries from "../Itineraries";

const getClassName = (className) => STYLES[className] || 'UNKNOWN';

const App = () => {
  return (<div className={getClassName('App')}>
    <Header/>
    <main className={getClassName('App__main')}>
      <Itineraries />
      {/* TODO: Add a component to display results here */}
    </main>
  </div>)
};

export default App;
