var redux = require('redux');

import axios from 'axios';

/*

let createStore  = redux.createStore
const ActionTypes = {
    ALL:'all'
}

let initState = {
    users:[]
}

const first_reducer = (state,action)=>{
    state = state || initState;

    switch(action.type){
        case ActionTypes.ALL:
            return Object.assign({},state,{
            users:[1,2,3],
                data:action.data
            })
        default:
            return state;
    }
}


let store = createStore(first_reducer)
console.log(store)
//{ dispatch: [Function: dispatch],
//  subscribe: [Function: subscribe],
//  getState: [Function: getState],
//  replaceReducer: [Function: replaceReducer] }
//{ users: [] }
console.log(store.getState())

//listener
store.subscribe(   //订阅消息 ,监听器一定会被执行到,相当于一个钩子函数?
    function () {  
        var currentState = store.getState();
        currentState.users.push(4,5,6)
    }
)


//action

function all(){
    return{
        type:ActionTypes.ALL
       
    }
}


store.dispatch(all())
console.log(store.getState())*/

//以上node环境测试用例



import {createStore,applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducer/index.js';

const composeCreatedState = compose(
    applyMiddleware(thunk),
    window.devToolsExtension && window.devToolsExtension()
)(createStore);


function configureStore(initialState={}) {
    const store = composeCreatedState(reducers,initialState);
    
    return store
}

export default configureStore