import React from 'react';
import BpkCard from 'bpk-component-card';
import {BpkGridColumn, BpkGridContainer, BpkGridRow} from "bpk-component-grid";
import './icons.scss';
import BpkSmallarrow from 'bpk-component-icon/sm/long-arrow-right';
import styles from './index.css';
require('./index.css');

import TimeAndPlaceComp from "./TimeAndPlaceComp"
import DurationComp from "./DurationComp"
class FlightContent extends React.Component {
  constructor(props) {
    super(props);
  }


  render(){
    return (
      <BpkCard>
        <div>
          <BpkGridRow>
            <BpkGridColumn width={1} tabletWidth={1}>
              <img
                src="www.skyscanner.fr/images/websites/220x80/h_98.png"
                alt="new"
              />
            </BpkGridColumn>
            <BpkGridColumn width={2} tabletWidth={2} padded={false}>
              <TimeAndPlaceComp/>
            </BpkGridColumn>
            <BpkGridColumn width={2} tabletWidth={2} padded={false}>
              <div className={styles.icon__container}>    <BpkSmallarrow  /></div>
            </BpkGridColumn>
            <BpkGridColumn width={2} tabletWidth={2} padded={false}>
              <TimeAndPlaceComp/>
            </BpkGridColumn>
            <BpkGridColumn width={8} tabletWidth={5} padded={false}>
              <DurationComp/>
            </BpkGridColumn>
          </BpkGridRow>

        </div>

      </BpkCard>)
  }
}

// export default connect(null, actions)((PriceCardContent))
// export default connect(PriceCard);
export default FlightContent;
