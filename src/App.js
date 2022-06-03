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
        <Row>
          <Col><h1>r/Funnypics</h1></Col>
        </Row>
        {
          this.state.entries
            .map(entry =>
              <div className="row entry-row" key={entry.link}>
                <div className="col-md-auto">
                  <img src={entry.thumb} alt={entry.title} target="_blank" rel="noreferrer" />
                </div>
                <div className="col">
                  <div className="row"><h3>{entry.title}</h3></div>
                  <div className="row">
                    <div className="col">
                      <span>Favorite | </span>
                      <a href={entry.link} alt={entry.title} target="_blank" rel="noreferrer">View Post</a>
                      <span> | </span>
                      <a href={entry.image} alt="open full size image in a new tab" target="_blank" rel="noreferrer">View Image</a>
                    </div>
                  </div>
            
                  <div className="row"></div>
                </div>
              </div>
            )
        }
    </Container>
    )
  }
}

export default App;
