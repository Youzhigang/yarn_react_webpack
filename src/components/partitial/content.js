import React, {Component} from 'react'
import marked from 'marked';
var hljs = require('highlight.js');
import '../../styles/monokai.css';

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
                <div dangerouslySetInnerHTML={{__html:this.state.content.content?marked(this.state.content.content):marked("##loading")}} />
               
            </div>
        )
    }
}

export default MainContent