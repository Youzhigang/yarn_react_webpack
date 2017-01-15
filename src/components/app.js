import React, {Component} from 'react';
// import {originalName as alias } from 'module';
// import appcss from './app.css';
// require("./app.css")
require("./app.styl")
import yeoman from './yeoman.png';
import myImg from '../images/1.jpg';

class App extends Component {
    render() {
        return (
            <div className="test">
                Hello React!222111222211!
                12312<br />
                <img src={yeoman} />
                <img src={myImg} />
            </div>
        );
    }
}

export default App;
