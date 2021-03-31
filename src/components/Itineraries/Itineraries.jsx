import React from "react";
import {getItineraries} from "./ItinerariesService";

import STYLES from "./Itineraries.scss";
import Itinerary from "./Itinerary";

const getClassName = (className) => STYLES[className] || "UNKNOWN";

const {useEffect, useState} = React;

const Itineraries = () => {

  const [itineraries, setItineraries] = useState([]);

  useEffect(() => {
    getItineraries(null).then(res => res.json()).then(arrItineraries => {
      setItineraries(arrItineraries);
    });
  }, []);

  function allItineraries () {
    return itineraries.map((itinerary) => <Itinerary key={itinerary.id} {...itinerary} />)
  }

  return (
    <div className={getClassName('Itineraries')}>
      {allItineraries()}
    </div>
  );
};

export default Itineraries;
