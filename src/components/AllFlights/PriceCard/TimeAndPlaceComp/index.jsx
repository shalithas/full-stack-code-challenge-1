import React from 'react';
import {BpkGridColumn} from "bpk-component-grid";
import BpkText from 'bpk-component-text';
import styles from "./index.css"
import Moment from 'react-moment';

class TimeAndPlaceComp extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <BpkGridColumn className={styles.time_and_place__card} width={12} tabletWidth={12}>
          <BpkText tagName="p"><Moment format="HH:MM">{this.props.time}</Moment></BpkText>
          <BpkText tagName="p" className={styles.airport__text}>{this.props.airport}</BpkText>
        </BpkGridColumn>
      </div>
    )
  }
}

export default TimeAndPlaceComp;
