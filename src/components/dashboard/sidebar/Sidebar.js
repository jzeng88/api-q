import React, { Component } from "react";
import Past from "./Past";
import Future from "./Future";
import { Nav } from "react-bootstrap";
import testData from "../../../test-data.js"
import { DataContext } from '../../data-context'

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      currentTab: 'past',
      buttonText: 'Send',
      formUrl: 'http://localhost:3001/makerequest',
    }
  }

  static contextType = DataContext;

  // componentDidMount() {
  //   fetch('http://localhost:3001/allrequests').then(response => {
  //     return response.json();
  //   }).then(response => {
  //     let responseWithKeys = response.map(request => {
  //       return {
  //         ...request,
  //         key: request.id 
  //       }
  //     })

  //     let { data, updateData } = this.context;
  //     updateData(data = responseWithKeys);

  //     this.setState({ data });
  //   });
  // }

  getPastRequests = () => {
    return this.props.appData.filter(request => {
      return request.response.status;
    })
  }

  getFutureRequests = () => {
    return this.props.appData.filter(request => {
      return !request.response.status;
    })
  }

  changeTab = (event) => {
    let target = event.target;
    let value = target.textContent.toLowerCase();
    let buttonText;
    let formUrl;
    if (value === 'past') {
      buttonText = 'Send';
      formUrl = 'http://localhost:3001/makerequest';
    } else {
      buttonText = 'Save';
      formUrl = 'http://localhost:3001/updaterequest';
    }

    this.setState({
      currentTab: value,
      buttonText: buttonText,
      formUrl: formUrl,
    })
  }

  render() {
    let currentTab = this.state.currentTab === 'past' ?
     <Past 
      testdata={this.getPastRequests()} 
      showModalClick={this.props.showModalClick} 
      buttonText={this.state.buttonText}
      formUrl={this.state.formUrl}
    /> : 
     <Future 
      testdata={this.getFutureRequests()} 
      showModalClick={this.props.showModalClick} 
      buttonText={this.state.buttonText}
      formUrl={this.state.formUrl}
    />

    return (
      <>
        <Nav variant="tabs" defaultActiveKey="link-1" className="mt-3">
          <Nav.Item>
            <Nav.Link onClick={this.changeTab} eventKey="link-1">Past</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={this.changeTab} eventKey="link-2">Future</Nav.Link>
          </Nav.Item>
        </Nav>

        { currentTab }
      </>
    );
  }
}

export default Sidebar;
