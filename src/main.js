import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app.js';
import Header from './components/partitial/header';
import LeftBar from './components/partitial/siderbar';

import RouterConfig from './components/router/routercfg.js';
import Test from './components/router/test';

ReactDom.render(
    <div>
        <Header />
       
        <App />
    </div>,
    document.getElementById("app")
);

// ReactDom.render(
//     <div>
//     <Test /></div>
//     ,
//     document.getElementById("app")
// )