import React, {Component} from 'react';
require("../app.styl")


class LeftBar extends Component {

    constructor(props){
         super(props);
         this.state = {
             list:{}
         }
    }


    componentDidMount() {
        this.setState({list:new Set( this.props.list.map(item => item.category))})
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