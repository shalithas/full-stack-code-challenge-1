import React from 'react';
import TimeAndPlaceComp from "./TimeAndPlaceComp"
import DurationComp from "./DurationComp"
import BpkCard from 'bpk-component-card';
import {BpkGridColumn, BpkGridContainer, BpkGridRow} from "bpk-component-grid";
import './icons.scss';
import BpkSmallarrow from 'bpk-component-icon/sm/long-arrow-right';
import styles from './index.css';
import FlightCardFooter from "./FlightCardFooter";
import FlightLegs from "./FlightLegs";
// require('./index.scss');
class PriceCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      users: []
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


      <BpkCard>
        <div>
          <BpkGridContainer>
            {flightLegs}
            <BpkGridRow padded={false}>
              <FlightCardFooter price={this.props.data.price} agent={this.props.data.agent}/>
            </BpkGridRow>
          </BpkGridContainer>

        </div>

      </BpkCard>)
  }
}

// export default connect(null, actions)((PriceCardContent))
// export default connect(PriceCard);
export default PriceCard;
