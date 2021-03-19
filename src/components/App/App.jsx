import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { getItineraries, getLegs } from "../../services/APIServices";
import AirLines from "../AirLines/AirLines";
import Header from '../Header';

import STYLES from './App.scss';

const getClassName = (className) => STYLES[className] || 'UNKNOWN';

const App = () => (
  <div className={getClassName('App')}>
    <Header />
    <main className={getClassName('App__main')}>
      <BpkText tagName="p">Over to you...</BpkText>
      {/* TODO: Add a component to display results here */}
    </main>
  </div>
);

export default App;
