var redux = require('redux');

import axios from 'axios';


function fetchUsers() {
    return axios.get('/mock/users.json')
}



//redux-thunk
//注入dispatch
//这也是个action
export function getUsers(){
    return function (dispatch) {
        return fetchUsers().then(res=>{
            if (res.status ===200){
                dispatch(setUsers(res.data))
            }
        })
    }
}

//action
export function setUsers(data) {
    return{
        type:'SET_USER',
        data
    }
}