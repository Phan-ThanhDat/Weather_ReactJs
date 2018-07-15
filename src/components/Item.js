import React from "react";


const Item = props => (

    <div className="">
        {
            props.timeDate &&
            <React.Fragment>
                <img className = "icon-weather" src= {props.icon} alt="Weather Condition"/>
                <p className="weather__key"> Date and Time:
                    <span className="weather__value"> { props.timeDate } </span>
                </p>
            </React.Fragment>

        }

        {
            props.item.main.temp &&
            <p className="weather__key"> Temperature:
                <span className="weather__value"> {props.item.main.temp }	</span>
            </p>
        }
        {
            props.item.humidity &&
            <p className="weather__key"> Humidity:
                <span className="weather__value"> { props.item.humidity } </span>
            </p>
        }
        {
            props.item.weather[0].description &&
            <p className="weather__key"> Conditions:
                <span className="weather__value"> { props.item.weather[0].description } </span>
            </p>
        }

    </div>
);

export default Item;