import React, {Component} from 'react';
import {Container, Row, Col} from "reactstrap";
import './App.css';
import API from './utils/API';
import imageIcon from './icons/image-solid.svg';
import linkIcon from './icons/reddit-square-brands.svg';
import favIcon from './icons/bookmark-regular.svg';

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
                <a href={entry.image} alt="open full size image in a new tab" target="_blank" rel="noreferrer"><img src={entry.thumb} className="thumbnail" alt={entry.title} target="_blank" rel="noreferrer" /></a>
                </div>
                <div className="col">
                  <div className="row"><h3>{entry.title}</h3></div>
                  <div className="row">
                    <div className="col">
                      <img src={favIcon} alt="mark as favorite" className="blue-icon"  />
                      <span> | </span>
                      <a href={entry.link} alt={entry.title} target="_blank" rel="noreferrer">
                        <img src={linkIcon} alt="view post" className="blue-icon"  />
                      </a>
                      <span> | </span>
                      <a href={entry.image} alt="open full size image in a new tab" target="_blank" rel="noreferrer">
                        <img src={imageIcon} alt="open full size" className="blue-icon"  />
                      </a>
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
