import React, {Component} from 'react';
import {Container, Row, Col} from "reactstrap";
import './App.css';
import API from './utils/API';

class App extends Component {
  state = {
    entries: [],
    favorites: []
  }

  componentDidMount() {
    //get our reddit JSON
    this.getLatest();
  }

  getLatest = () => {
    API.getEntries()
    .then(res => {
      //console.log(res.data.data.children)
      //this will capture the return value from the call above
      //I decided to create a custom method for only grabbing the entry values we want (since there is a lot!!)
      this.setState({ entries: API.parseJSON(res) })
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
