import React from 'react';
import {BpkGridColumn, BpkGridRow} from "bpk-component-grid";
import BpkText from 'bpk-component-text';
import styles from "./index.css"
import Moment from 'react-moment';
import moment from 'moment';
class TimeAndPlaceComp extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
          <BpkGridColumn className={styles.time_and_place_card} width={12} tabletWidth={12} >
            <BpkText tagName="p" textStyle="lg">
              <Moment format="HH:MM">
              {this.props.time}
            </Moment></BpkText>
            <BpkText tagName="p" >{this.props.airport}</BpkText>
          </BpkGridColumn>
      </div>
  )
  }
}

// export default connect(null, actions)((PriceCardContent))
// export default connect(PriceCardContent);
export default TimeAndPlaceComp;
