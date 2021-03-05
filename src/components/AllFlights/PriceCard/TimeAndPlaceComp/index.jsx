import React from 'react';
import {BpkGridColumn, BpkGridRow} from "bpk-component-grid";
import BpkText from 'bpk-component-text';
import styles from "./index.css"
class TimeAndPlaceComp extends React.Component {
  render() {
    return (
      <div>
          <BpkGridColumn className={styles.time_and_place_card} width={12} tabletWidth={12} >
            <BpkText tagName="p" textStyle="lg">16:21</BpkText>
            <BpkText tagName="p" >CMB</BpkText>
          </BpkGridColumn>
      </div>
  )
  }
}

// export default connect(null, actions)((PriceCardContent))
// export default connect(PriceCardContent);
export default TimeAndPlaceComp;
