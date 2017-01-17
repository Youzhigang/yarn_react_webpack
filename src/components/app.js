import React, {Component} from 'react';
// import {originalName as alias } from 'module'; import appcss from
// './app.css'; require("./app.css")
require("./app.styl")
import yeoman from './yeoman.png';
import myImg from '../images/1.jpg';
require('es6-promise').polyfill();
require('isomorphic-fetch');

class App extends Component {
    constructor(props) {
        super(props);
         this.state = { data: [] };
    };

    componentDidMount() {
        window
        fetch('http://localhost:8000/articles/', {
            method:"GET",
            mode:"cros",
           'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        }
            ).then(function (response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        })
            .then((data) => this.setState({data:data.results}))
            .catch(error =>console.log(error));

    };

    render() {
        return ( 
            <div className = "test" >  
                <img src = {yeoman} />
                <ul>
                    {
                        this.state.data.map(item =><li key={item.id}>{item.title}</li>)
                    }
                </ul>
            </div>);
    }
}

export default App;