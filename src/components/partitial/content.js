import React, {Component} from 'react'
import LeftBar from './siderbar.js';


class MainContent extends Component {

    constructor(props) {
        super(props);
        this.state={
            content:{},
        }
    }

    componentDidMount() {
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
            <div>
                content<br />
                {this.state.content.category}<br />
                {this.state.content.title}<br />
                {this.state.content.post_time}<br />
                {this.state.content.content}<br />
            </div>
        )
    }
}

export default MainContent