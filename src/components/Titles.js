import React, {Component} from "react";
import Item from "./Item";

let currentdate = new Date();
let dateTime = "Date: " + currentdate.getDate() + "/"
    + (currentdate.getMonth()+1)  + "/"
    + currentdate.getFullYear() + " --- Time: "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":"
    + currentdate.getSeconds();

class Titles extends Component {


    render() {
        const elmItem = this.props.list.map((item, index) => {

            return (( index === 0 &&
                <Item
                    timeDate = {dateTime}
                    key={item.dt}
                    item={item}
                    index={index}
                />
            ))

        });
        // let elmItem;
        // for (let i = 0; i < this.props.list.length -1; i += 1) {
        //     if (i === 0) {
        //          elmItem = <Item
        //                     timeDate = {datetime}
        //                     key={this.props.list[i].dt}
        //                     item={this.props.list[i]}
        //                     index={i}
        //         />
        //     }
        // }
        return (
            <div>
                <h1 className="title-container__title">{this.props.city}</h1>
                <div>
                    {
                        elmItem
                    }
                </div>
            </div>

        );
    }
}


export default Titles;