import React, {Component} from 'react';
require("../app.styl")


class LeftBar extends Component {



    componentDidMount() {
        
    }


    render() {
        return (
            <div className="left">

                <div className="category">
                <span >Category:</span>
                    <ul>
                    {this.props.list.map((item,index) => <li key={index}>{item.category}</li>)}
                    </ul>   
                 
                </div>
                <div className="time">
                <span >Post time:</span>
                <ul>
                    {this.props.list.map((item,index) => <li key={index}>{item.date_time}</li>)}
                </ul>
                </div>
            </div>
        );
    }
}

export default LeftBar;