import React from 'react';
import PriceCard from "./PriceCard"
import axios from "axios";

const USER_SERVICE_URL = "http://localhost:4000";

import styles from "./index.css"

class AllFlights extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false
    };
  }

  fetchItinerariesWithAxios = () => {
    this.setState({...this.state, isFetching: true});
    axios.get(USER_SERVICE_URL + "/getitineraries")
      .then(response => {
        this.setState({data: response.data.data, isFetching: false})
      })
      .catch(e => {
        console.log(e);
        this.setState({...this.state, isFetching: false});
      });
  };
  fetchItineraries = this.fetchItinerariesWithAxios


  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }

  componentDidMount() {
    this.fetchItineraries();
    this.timer = setInterval(() => this.fetchItineraries(), 5000);
  }

  render() {

    if (!this.state.isFetching && this.state.data != undefined) {
      let cardSet = [];
      let cards = this.state.data;
      for (let i = 0; i < cards.length; i++) {
        cardSet.push(<PriceCard data={cards[i]}/>);
      }
      return (
        <div className={styles.flightCards__container}>
          {cardSet}
        </div>)
    } else {
      return (
        <div>
          <p>Fetching users...</p>
        </div>)
    }
  }
}

export default AllFlights;
