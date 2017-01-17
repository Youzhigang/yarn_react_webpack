import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app.js';
import Header from './components/partitial/header';
import LeftBar from './components/partitial/siderbar';

ReactDom.render(
    <div>
        <Header />
        
        <br /><br /> <br />
        <div className="main">
            <App />
        </div>
    </div>,
    document.getElementById("app")
);