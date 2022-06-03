import React, {Component} from 'react';
import {Container, Row, Col} from "reactstrap";
import './App.css';
import API from './utils/API';

class App extends Component {

  componentDidMount() {
    //get our reddit JSON
    this.getLatest();
  }

  getLatest = () => {
    API.getEntries()
    .then(res => {
      console.log(res.data.data.children)
    })
    .catch(err => console.log(err));
  }

  render () {
    return (
      <Container>
      <h1>Hello World...</h1>
      <Row>
        <Col>Col 1</Col>
        <Col>Col 1</Col>
      </Row>
    </Container>
    )
  }
}

export default App;
