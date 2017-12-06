import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as action from './actions/action'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom'
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { BrowserRouter as Router, Route,withRouter } from 'react-router-dom';

import PageHeader from 'react-bootstrap/lib/PageHeader';
import Row from 'react-bootstrap/lib/Row';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
Button

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      startDate: moment(),
      endDate: moment(),
      budget : 0,
      selectedOptions: '',
    };
    this.handleStartDataChange = this.handleStartDataChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);

  }

  componentDidMount() {
        this.props.actions.fetchCategories()
  }

  handleMultiChange = (selectedOptions) => {
      this.setState({ selectedOptions: selectedOptions })
  }
  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
    console.log(this.state.name)
  };

   handleEmailChange = (event) => {
      this.setState({ email: event.target.value });
      console.log(this.state.email)
   };

  handleBudgetChange = (event) => {
     this.setState({ budget: event.target.value });
     console.log(this.state.budget)
  };


   handleClick = () => {
        console.log('clicked"')
   }
   handleStartDataChange(date) {
    this.setState({
      startDate: date
    });
   }

   handleEndDateChange(date) {
       this.setState({
         endDate: date
       });
   }
   saveChanges = (e) => {
      this.props.actions.saveChanges(this.state)
      e.preventDefault();
      this.nextPath('/calendar')

   }
   nextPath(path) {
       this.props.history.push(path);
   }

  render() {
    return (
     <div>
          <div className="container">
              <Form horizontal>
                     <PageHeader>Plan your trip</PageHeader>
                   <FormGroup>
                       <Col sm={2}>
                           name
                       </Col>
                       <Col sm={10}>
                            <input
                              type="text"
                              value={this.state.name}
                              onChange={this.handleNameChange}
                            />
                        </Col>
                   </FormGroup>
                   <FormGroup>
                    <Col sm={2}>
                            email
                    </Col>
                       <Col sm={10}>
                            <input
                              type="email"
                              value={this.state.email}
                              onChange={this.handleEmailChange}
                            />
                        </Col>
                   </FormGroup>

                   <FormGroup>
                     <Col sm={2}>
                          start date
                      </Col>
                      <Col sm={10}>
                        <DatePicker

                                    selected={this.state.startDate}
                                    onChange={this.handleStartDataChange}
                         />
                     </Col>
                    </FormGroup>
                     <FormGroup>
                       <Col sm={2}>
                        end date
                      </Col>
                      <Col sm={10}>
                        <DatePicker
                                selected={this.state.endDate}
                                onChange={this.handleEndDateChange}
                        />
                      </Col>
                   </FormGroup>

                   <FormGroup >
                       <Col sm={2}>
                        budget
                       </Col>
                       <Col sm={10}>
                           <input
                             type="text"
                             value={this.state.budget}
                             onChange={this.handleBudgetChange}
                           />
                       </Col>
                   </FormGroup>
                    <FormGroup>
                      <Col sm={2}>
                         categories
                     </Col>
                     <Col sm={6} className="mySelect">
                         <Select
                               multi={true}
                               name="form-field-name"
                               value={this.state.selectedOptions}
                                onChange= {this.handleMultiChange}
                               options={this.props.categories} />
                     </Col>
                     </FormGroup>
                     <FormGroup>

                         <Col sm={2}>
                            <Button bsStyle="primary" onClick={this.saveChanges}>Save</Button>
                        </Col>
                        <Col sm={2}>
                           saved data : {this.props.data.email}
                       </Col>
                     </FormGroup>
              </Form>
             </div>
        </div>
    );
  }
}


function mapStateToProps (state) {
  return {
       data : state.myReducer.data,
       categories : state.myReducer.categories
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
)(Register)
