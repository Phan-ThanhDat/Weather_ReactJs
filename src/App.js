import React, { Component } from 'react';
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import './App.css';

class App extends Component {
    state = {
        city: '',
        list: []
    }

    getWeather = async (e)  => {
        const key = "53c16a70c49aeb474b603a97f0f3400b";
        e.preventDefault();
        const city = e.target.elements.city.value;
        console.log(e.target)
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric`);
        const data = await api_call.json();
        console.log(data)
        this.setState((prevState) => {
            return {
                list: (data.list),
                city: city
            }

        })


    }

    // async function
    fetchAsync = async () =>  {
        // await response of fetch call
        let response = await fetch('https://api.github.com');
        // only proceed once promise is resolved
        let data = await response.json();
        console.log(data)
        // only proceed once second promise is resolved
        return data;
    }

  render() {


    return (
        <div>
            <div className="wrapper">
                <div className="main">
                    <div className="container">
                        <div className="row row-container">
                            <div className="col-xs-5 title-container">
                                {
                                    this.state.list &&
                                    <Titles city={this.state.city}  list={this.state.list}/>
                                }
                            </div>
                            <div className="col-xs-7 form-container">
                                <Form getWeather={this.getWeather} />
                                {
                                    this.state.list &&
                                    <Weather
                                        city={this.state.city}
                                        list = { this.state.list}

                                    />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
