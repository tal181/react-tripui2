import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import * as action from './actions/action'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
//import Dnd from './dnd'
import DatePicker from 'react-datepicker';
import moment from 'moment';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

class Calendar extends Component {

  constructor() {
    super();
    this.state = {

    };

  }

  render() {
    return (
     <div>
        momomo
     </div>
    );
  }
}


function mapStateToProps (state) {
  return {
       emailEmergency : state.myReducer.emailEmergency
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(Object.assign({},action), dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar)
