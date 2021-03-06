import React from 'react';
import BpkText from 'bpk-component-text';
import {BpkGridColumn} from "bpk-component-grid";
import styles from "./index.css"

class DurationComp extends React.Component {
  render() {
    let minutesfromhours = Math.floor(this.props.duration / 60) + 'h ' + this.props.duration % 60 + "";
    let stops = "direct";
    let color = styles.direct_flight
    if (this.props.stops) {
      if (this.props.stops == 1)
        stops = this.props.stops + " stop";
      else
        stops = this.props.stops + " stops";
      color = styles.layover_flight;
    }
    return (
      <div className={styles.duration_card}>
        <BpkGridColumn width={12} tabletWidth={12}>
          <BpkText tagName="p" textStyle="xs" className={styles.duration__text}>{minutesfromhours}</BpkText>
          <BpkText tagName="p" textStyle="xs" className={color}>{stops}</BpkText>
        </BpkGridColumn>
      </div>
    )
  }
}

export default DurationComp;
