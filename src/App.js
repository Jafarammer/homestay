import React, {Component} from 'react';
import HomeStay from './components/homestay';
import Marker from './components/marker';
import './App.css';
import GoogleMapReact from 'google-map-react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homestays: [],
      selectedHomestay: null,
      allHomestays: [],
      search: ""
    };
  }

  componentDidMount() {
    fetch("https://jafarammer.github.io/jsonapi-hotel/hotel.json")
    .then(response => response.json())
    .then((data) => {
      this.setState({
        homestays: data,
        allHomestays: data
      });
    })
  }

  selectHomestay = (homestay) => {
    this.setState({
      selectedHomestay: homestay
    })
  }
  handleSearch = (event) => {
    this.setState({
      search: event.target.value,
      homestays: this.state.allHomestays.filter((homestay) => 
        new RegExp(event.target.value, "i").exec(homestay.nama)
      )
    })
  }
  render() {
    let center = {
      lat: -6.41029,
      lng: 106.07435
    }
    if (this.state.selectedHomestay) {
      center = {
        lat: this.state.selectedHomestay.lat,
        lng: this.state.selectedHomestay.lng
      }
    }
    return (
      <div className="app">
        <div className="main">
        <h2 className="text-center judul">Daftar Hotel di Provinsi BANTEN</h2>
          <div className="mt-4 mb-4 mx-auto" style={{width: '500px'}}>
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              autoFocus
              value={this.state.search}
              onChange={this.handleSearch}
            />
          </div>
          <div className="homestayModif">
            {this.state.homestays.map((homestay) => {
              return <HomeStay 
                      key={homestay.id}
                      homestay={homestay}
                      selectHomestay={this.selectHomestay}
                    />
            })}
          </div>
        </div>
        <div className="peta">
            <GoogleMapReact center={center} zoom={10}>
              {this.state.homestays.map((homestay) => {
                return <Marker
                  key={homestay.id}
                  lat={homestay.lat}
                  lng={homestay.lng}
                  texttt={homestay.harga}
                  selected={homestay === this.state.selectedHomestay}
                />
              })}
            </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
