import React, {Component} from 'react'
import marked from 'marked';
var hljs = require('highlight.js');
import '../../styles/monokai.css';
var Fa = require('react-fontawesome');

class MainContent extends Component {

    constructor(props) {
        super(props);
        this.state={
            content:{},
        };
        marked.setOptions({
            gfm: true,
            tables: true,
            breaks: false,
            pedantic: false,
            sanitize: true,
            smartLists: true,
            smartypants: false,
            highlight: function (code) {
                return hljs.highlightAuto(code).value;
            }
        });
    }

    componentWillMount() {
        window.fetch("http://localhost:8000/articles/" + this.props.params.id)
            .then(res => res.json())
            .then((json) => {
                this.setState(
                    {
                        content: json,
                    }
                );

            })
            .catch(error => {
                console.log(error); 
            });
    }
    
    

    render () {
        return (
            <div>{this.props.params.id}---1---
                content<br />
                {this.state.content.category}<br />
                {this.state.content.title}<br />
                {this.state.content.post_time}<br />
               
               {
                   this.state.content.content? 
                   <div dangerouslySetInnerHTML={{__html:marked(this.state.content.content)}} />:
                   <Fa name='spinner' spin size='2x'/>
                }
            </div>
        )
    }
}

export default MainContent