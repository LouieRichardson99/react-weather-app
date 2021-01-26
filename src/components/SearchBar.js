import React from "react";

export default class SearchBar extends React.Component{
    render() {
        return (
            <div>
                <input onChange={this.props.locationInput} type="text" name="location" id="location-input"/>
                <button onClick={this.props.fetchWeather} type="submit">Search</button>
            </div>
        );
    }; 
};