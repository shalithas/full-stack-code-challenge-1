import React from 'react';
import PriceCard from "./PriceCard"
import axios from "axios";
const USER_SERVICE_URL = "http://localhost:4000";

// import "./index.css"
class AllFlights extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      users: []
    };
  }

  fetchUsersWithAxios = () => {

    this.setState({...this.state, isFetching: true});
    axios.get(USER_SERVICE_URL + "/itineraries")
      .then(response => {
        this.setState({data: response.data, isFetching: false})
      })
      .catch(e => {
        console.log(e);
        this.setState({...this.state, isFetching: false});
      });
  };
  fetchUsers = this.fetchUsersWithAxios


  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }

  componentDidMount() {
    this.fetchUsers();
    // this.timer = setInterval(() => this.fetchUsers(), 5000);
  }


  render() {
    let cardSet = [];
    // let cards = this.state.data;
    let cards =[];
    for (let i = 0; i <= cards.length; i++) {
      cardSet.push(<PriceCard data={cards[i]}/>);
    }

    if (!this.state.isFetching) {
      return (
        <div>
          <cardSet/>
          {/*<ActivePage />*/}
        </div>)
    } else {
      return (
        <div>
          <p>{this.state.isFetching ? 'Fetching users...' : ''}</p>
        </div>)
    }
  }


  /*<div className={"number-rate-comp--div"}>*/


}

export default AllFlights;
