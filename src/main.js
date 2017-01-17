import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app.js';
import Header from './components/partitial/header';
import LeftBar from './components/partitial/siderbar';

ReactDom.render(
    <div>
        <Header />
        <LeftBar />
        <br /><br /><br />
        <App />
                
    </div>,
    document.getElementById("app")
);