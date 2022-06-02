import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      pictures: [],
    }
  }
  componentDidMount() {
    fetch(
      'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=' +
        process.env.REACT_APP_API_KEY +
        // '20f22acd47651364ec6a5f6f7080050f'+
        '&tags=cats&format=json&nojsoncallback=1',
    )
      .then(function (response) {
        return response.json()
      })
      .then(
        function (flickrCats) {
          // alert(JSON.stringify(flickrCats))
          let picArray = flickrCats.photos.photo.map((pic) => {
            var srcPath =
              'https://live' +
              '.staticflickr.com/' +
              pic.server +
              '/' +
              pic.id +
              '_' +
              pic.secret +
              '.jpg'
            return <img alt="cats" src={srcPath}></img>
          })
          this.setState({ pictures: picArray })
        }.bind(this)
      )
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to my project!</h1>
          <h1 className="App-subtitle">Cats</h1>
        </header>
        <p className="App-intro">{this.state.pictures}</p>
      </div>
    )
  }
}

export default App
