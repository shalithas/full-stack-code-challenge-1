import React from "react";
import rightIcon from "../../assets/right-arrow.svg";

const AirLines = (props) => {
  const { item, getClassName } = props;
  return(
    <>
    {item.legs.map(i => (
      <div className="d-flex flex-row justify-content-between" key={i.id}>
        <div className="d-flex flex-row">
          <img src={`https://logos.skyscnr.com/images/airlines/favicon/${i.airline_id}.png`} width={25} height={25}
               alt="icon"/>
          <div className="ml-2">
            <div>{i.departure_time.slice(i.departure_time.length - 5)}</div>
            <div className={getClassName('text-gray')}>{i.departure_airport}</div>
          </div>
          <div className="ml-2">
            <img src={rightIcon} width={15} alt="arrow_icon"/>
          </div>
          <div className="ml-2">
            <div>{i.arrival_time.slice(i.arrival_time.length - 5)}</div>
            <div className={getClassName('text-gray')}>{i.arrival_airport}</div>
          </div>
        </div>
        <div>
          <div className={`mt-1 ${getClassName('fs-12')} ${getClassName('text-gray')}`}>2h 00</div>
          <div
            className={`mt-1 ${getClassName('fs-12')} ${i.stops === 0 ? getClassName('text-light-green') : getClassName('text-light-red')}`}>
            {i.stops === 0 ? "Direct" : `${i.stops} stop`}
          </div>
        </div>
        </div>
      ))}
      </>
  )
};

export default AirLines;
