import React from "react";

import STYLES from "./Itinerary.scss";
import Leg from "../Leg";

const getClassName = (className) => STYLES[className] || "UNKNOWN";

const Itinerary = ({id, price, agent, agent_rating, legs}) => {

  const getLegs = () => {
    if(!legs || !Array.isArray(legs) || legs.length === 0) return null;
    return legs.map(leg => <Leg key={leg} id={leg} />);
  }

  return (
    <div data-id={id} className={getClassName('Itinerary')}>
      <div className={getClassName("flight_details")}>
        {getLegs()}
      </div>

      <div className={getClassName("agent_details")}>
        <div className={getClassName("agent_price")}>
          <span className={getClassName("price")}>{price}</span>
          <span className={getClassName("agent")}>{agent}</span>
        </div>
        <button className={getClassName("select_btn")}>Select</button>
      </div>
    </div>
  );
};

export default Itinerary;
