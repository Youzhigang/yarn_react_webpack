import React, {Component} from 'react';
// import {originalName as alias } from 'module'; import appcss from
// './app.css'; require("./app.css")
require("./app.styl")
import yeoman from './yeoman.png';
import myImg from '../images/1.jpg';
require('es6-promise').polyfill();
require('isomorphic-fetch');

import Title from './partitial/titlelist.js';
import LeftBar from './partitial/siderbar.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    };

    componentDidMount() {
        window
        fetch('http://localhost:8000/articles/', {
                method: "GET",
                mode: "cros",
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }).then(function (response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then((data) => this.setState({data: data.results})).catch(error => console.log(error));

    };

    render() {
        return (
            <div className="test">
                <img src={yeoman}/>
                <LeftBar list={this.state.data} />
                <Title titlelist={this.state.data} />
            </div>
        );
    }
}

export default App;