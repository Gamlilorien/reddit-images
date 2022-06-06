import React, {Component} from 'react';
import {Container} from "reactstrap";
import './App.css';
import API from './utils/API';
import Header from './components/Header';
import EntryList from './components/EntryList';

// const toggleFavorite = () => {
//   //let isFav = entry.isFavorite;
//   // if(isFav === true) {
//   //   this.setState({isFavorite: false})
//   // } else {
//   //   this.setState({isFavorite: true})
//   // }
//   console.log(this.state.entries)
// }

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
        <Header />
        <EntryList entries={this.state.entries} />
      </Container>
    )
  }
}

export default App;
