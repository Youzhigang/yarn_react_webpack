import React, {Component} from 'react';
require("../app.styl")


function Convert(list,prop){
    var result=new Set();
    for(var item of list){
        result.add(item[prop]);
    };
    return Array.from(result)
}

function ConvertDate(list,prop){
    var result=new Set();
    for(var item of list){
        result.add(item[prop].substring(0,10));
    };
    return Array.from(result)
}


class LeftBar extends Component {

  
    render() {
        // var cate_list=new Set();
        // for(var item of this.props.list){
        //     cate_list.add(item.category);
        // }; 
        var cate_list = Convert(this.props.list,"category");   
        var date_list = ConvertDate(this.props.list,"date_time");
        return (
            <div className="left">
                <div className="category">
                <span >Category:</span>
                    <ul>
                    {
                        cate_list.map((item,index) => <li key={index}> {item.substr(0,1).toUpperCase()+item.substr(1)}</li>)
                     }
                    </ul>   
                </div>
                <div className="time">
                <span >Post time:</span>
                <ul>
                    {date_list.map((item,index) => <li key={index}>{item}</li>)}
                </ul>
                </div>
            </div>
        );
    }
}

export default LeftBar;