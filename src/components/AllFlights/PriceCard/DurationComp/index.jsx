import React from 'react';
import BpkText from 'bpk-component-text';
import {BpkGridColumn} from "bpk-component-grid";

import styles from "./index.css"

class DurationComp extends React.Component {
  render(){
    return (
      <div className={styles.duration_card}>
        <BpkGridColumn width={12} tabletWidth={12} >
          <BpkText tagName="p" textStyle="sm">2 hours</BpkText>
          <BpkText tagName="p" textStyle="xs">direct</BpkText>
        </BpkGridColumn>
      </div>
    )
  }
}
export default DurationComp;
