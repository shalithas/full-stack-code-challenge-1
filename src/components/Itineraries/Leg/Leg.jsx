import React from "react";
import moment from 'moment'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'

import STYLES from "./Leg.scss";
import {getLegs} from "../ItinerariesService";

const getClassName = (className) => STYLES[className] || "UNKNOWN";

const {useEffect, useState} = React;

const Leg = ({id}) => {

  const [leg, setLeg] = useState({})

  useEffect(() => {
    getLegs(id).then(res => res.json()).then(leg => {
      setLeg(leg);
    })
  }, [id])

  if (!leg.id) return null;

  const getLT = (airport, time) => (<div className={getClassName("airport")}>
    <span className={getClassName("time")}>{moment(time).format("HH:mm")}</span>
    <span>{airport}</span>
  </div>);

  const getDistance = (minutes) => (<span className={getClassName('duration')}>
    {moment.utc().startOf('day').add({minutes}).format('H[h] mm')}
  </span>);

  const getStops = (stops) => (<span className={getClassName(stops ? 'stops' : 'direct')}>
    {stops ? `${stops} stop${stops > 1 ? 's' : ''}` : "direct"}
  </span>);


  return (
    <div data-id={leg.id} className={getClassName('Leg')}>

      <div className={getClassName("arrival_departure")}>
        {getLT(leg.departure_airport, leg.departure_time)}
        <FontAwesomeIcon icon={faArrowRight}/>
        {getLT(leg.arrival_airport, leg.arrival_time)}
      </div>

      <div className={getClassName("other_details")}>
        {getDistance(leg.duration_mins)}
        {getStops(leg.stops)}
      </div>

    </div>
  );
};

export default Leg;
