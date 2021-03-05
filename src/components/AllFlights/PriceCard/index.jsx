import React from 'react';
import TimeAndPlaceComp from "./TimeAndPlaceComp"
import DurationComp from "./DurationComp"
import BpkCard from 'bpk-component-card';
import {BpkGridColumn, BpkGridContainer, BpkGridRow} from "bpk-component-grid";
import './icons.scss';
import BpkSmallarrow from 'bpk-component-icon/sm/long-arrow-right';
import styles from './index.css';
import FlightCardFooter from "./FlightCardFooter";
// require('./index.scss');
class PriceCard extends React.Component {
  render(){
    return (
      <BpkCard>
        <div>
          <BpkGridContainer>
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
            <BpkGridRow>
              <BpkGridColumn width={1} tabletWidth={1}>
                <img
                  src="www.skyscanner.fr/images/websites/220x80/h_98.png"
                  alt="new"
                />
              </BpkGridColumn>
              <BpkGridColumn width={2} tabletWidth={2}>
                <TimeAndPlaceComp/>
              </BpkGridColumn>
              <BpkGridColumn width={2} tabletWidth={2}>
                <div className={styles.icon__container}>    <BpkSmallarrow  /></div>
              </BpkGridColumn>
              <BpkGridColumn width={2} tabletWidth={2}>
                <TimeAndPlaceComp/>
              </BpkGridColumn>
              <BpkGridColumn width={8} tabletWidth={5}>
                <DurationComp/>
              </BpkGridColumn>
            </BpkGridRow>
            <BpkGridRow padded={false}>
              <FlightCardFooter/>
            </BpkGridRow>
          </BpkGridContainer>

        </div>

      </BpkCard>)
  }
}

// export default connect(null, actions)((PriceCardContent))
// export default connect(PriceCard);
export default PriceCard;
