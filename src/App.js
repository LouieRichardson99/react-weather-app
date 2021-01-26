import './App.css';
import React from "react";
import axios from "axios";
import SearchBar from './components/SearchBar';

export default class App extends React.Component{
    state = {
      temperature: null,
      location: null,
      weather: null,
      weatherIconID: null,
      locationInput: null,
      isError: false
    };

  handleLocationInput = (event) => {
    this.setState({locationInput: event.target.value});
  };

  fetchWeather = async () => {
    try {
        await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.locationInput}&units=metric&appid=2a4a351361d2545eb9d07ee37c7a0085`)
        .then((res) => {
            this.setState({location: res.data.name});
            this.setState({temperature: res.data.main.temp.toFixed(1)+'°'});
            this.setState({weather: res.data.weather[0].main});
            this.setState({weatherIconID: res.data.sys.id});
            this.setState({isError: false});
        });
    } catch {
        this.setState({isError: true});
    }
  };  

  render() {
    return (
      <div className="App">
        <SearchBar locationInput={(event) => this.handleLocationInput(event)} fetchWeather={this.fetchWeather}/>
        {this.state.isError ? <p>There seems to be a error</p> : null}
        <p>{this.state.location}</p>
        <p>{this.state.weather}</p>
        <p>{this.state.temperature}</p>
        <p>{this.state.weatherIconID}</p>
      </div>
    );
  }
}
