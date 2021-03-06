import React from 'react';
import BpkText from 'bpk-component-text';
import {BpkGridColumn, BpkGridRow} from "bpk-component-grid";
import BpkButton from 'bpk-component-button';
import styles from "./index.css"
import DurationComp from "../index";

class FlightCardFooter extends React.Component {
  render(){
    return (
      <div>
        <BpkGridColumn width={7} tabletWidth={7} padded={false}>
          <BpkGridRow>
            <BpkGridColumn width={12} padded={false} >
              <BpkText tagName="h1" textStyle="xxl">{this.props.price}</BpkText>
              <BpkText tagName="p" textStyle="base" className={styles.agent__text}>{this.props.agent}</BpkText>
            </BpkGridColumn>
          </BpkGridRow>
        </BpkGridColumn>
        <BpkGridColumn width={5} tabletWidth={5} padded={false}>
          <BpkButton className={styles.select__button}>Select</BpkButton>
        </BpkGridColumn>
      </div>
    )
  }
}
export default FlightCardFooter;
