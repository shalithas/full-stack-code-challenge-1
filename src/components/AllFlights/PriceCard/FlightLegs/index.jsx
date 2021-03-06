import React from 'react';
import {BpkGridColumn, BpkGridRow} from "bpk-component-grid";
import BpkSmallarrow from 'bpk-component-icon/sm/long-arrow-right';
import styles from './index.css';

const USER_SERVICE_URL = "http://localhost:4000";
import TimeAndPlaceComp from "../TimeAndPlaceComp"
import DurationComp from "../DurationComp"
import axios from "axios";

class FlightContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      data: null
    };
  }

  fetchLegsWithAxios = () => {

    this.setState({...this.state, isFetching: true});
    axios.get(USER_SERVICE_URL + "/leg", {
      params: {"id": this.props.leg}
    })
      .then(response => {
        this.setState({data: response.data.data, isFetching: false})
      })
      .catch(e => {
        console.log(e);
        this.setState({...this.state, isFetching: false});
      });
  };

  fetchLegs = this.fetchLegsWithAxios;

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }

  componentDidMount() {
    this.fetchLegs();
  }

  render() {
    if (this.state.data != null) {
      return (
        <div>
          <BpkGridRow>
            <BpkGridColumn width={1} tabletWidth={1}>
              <img className={styles.airline__img}
                   src={`https://logos.skyscnr.com/images/airlines/favicon/${this.state.data.airline_id}.png`}
                   alt="new"
              />
            </BpkGridColumn>
            <BpkGridColumn width={2} tabletWidth={2} padded={false}>
              <TimeAndPlaceComp time={this.state.data.departure_time} airport={this.state.data.departure_airport}/>
            </BpkGridColumn>
            <BpkGridColumn width={2} tabletWidth={2} padded={false}>
              <div className={styles.icon__container}><BpkSmallarrow className={styles.arrow__icon}/></div>
            </BpkGridColumn>
            <BpkGridColumn width={2} tabletWidth={2} padded={false}>
              <TimeAndPlaceComp time={this.state.data.arrival_time} airport={this.state.data.arrival_airport}/>
            </BpkGridColumn>
            <BpkGridColumn width={8} tabletWidth={5} padded={false}>
              <DurationComp duration={this.state.data.duration_mins} stops={this.state.data.stops}/>
            </BpkGridColumn>
          </BpkGridRow>

        </div>)
    } else {
      return (<div>No Data Found</div>)
    }

  }
}

export default FlightContent;
