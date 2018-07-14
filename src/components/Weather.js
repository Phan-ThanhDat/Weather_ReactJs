import React, {Component} from "react";
import Item from "./Item";


class Weather extends Component {


    render() {
        const elmItem = this.props.list.map((item, index) => {
            return (
                <Item
                    key={item.dt}
                    item={item}
                    index={index} />
            )});

        return (
            <div className="weather__info">
                {
                    this.props.city &&
                    <p className="weather__key"> Location:
                        <span className="weather__value"> { this.props.city }</span>
                    </p>
                }
                {
					elmItem && elmItem
                }


            </div>

        );
    }
}
export default Weather;