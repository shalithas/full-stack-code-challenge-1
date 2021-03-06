import React from 'react';
import BpkCard from 'bpk-component-card';
import { BpkGridContainer, BpkGridRow} from "bpk-component-grid";
import './icons.scss';
import styles from './index.css';
import FlightCardFooter from "./FlightCardFooter";
import FlightLegs from "./FlightLegs";
class PriceCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false
    };
  }

  render(){

    let flightLegs =[];
    if(this.props.data.legs.length !==0){
      {this.props.data.legs.map((leg, i) => {
        flightLegs.push(<FlightLegs leg={leg}/>)
      })}
    }

    return (
      <BpkCard padded={true} className={styles.price_card__card}>
          <BpkGridContainer>
            {flightLegs}
            <BpkGridRow padded={false}>
              <FlightCardFooter price={this.props.data.price} agent={this.props.data.agent}/>
            </BpkGridRow>
          </BpkGridContainer>
      </BpkCard>)
  }
}

export default PriceCard;
