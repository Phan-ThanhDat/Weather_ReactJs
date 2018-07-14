import React from "react";

const Item = props => (
    <div className="">
        {
            props.dateTime &&
            <p className="weather__key"> Date and Time:
                <span className="weather__value"> { props.dateTime } </span>
            </p>
        }
        {
            props.item.main.temp &&
            <p className="weather__key"> Temperature:
                <span className="weather__value"> {props.item.main.temp }	</span>
            </p>
        }
        {/*{*/}
            {/*props.humidity &&*/}
            {/*<p className="weather__key"> Humidity:*/}
                {/*<span className="weather__value"> { props.humidity } </span>*/}
            {/*</p>*/}
        {/*}*/}
        {/*{*/}
            {/*props.description &&*/}
            {/*<p className="weather__key"> Conditions:*/}
                {/*<span className="weather__value"> { props.description } </span>*/}
            {/*</p>*/}
        {/*}*/}

    </div>
);

export default Item;