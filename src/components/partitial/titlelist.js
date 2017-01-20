import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';


class TitleList extends Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     titlelist: []
        // };
    }
    // componentWillReceiveProps(nextProps) {
    //     this.setState({titlelist: nextProps});
    // }

    render() {
        return (
            <div>
                <ul>
                    {this.props.titlelist.map((item,index) => <li key={index}><Link to={`/article/${item.id}`}>{item.title}</Link></li>)}
                </ul>
            </div>
        );
    }
}

TitleList.propTypes = {
    // titlelist: React.PropTypes.string.isRequired,
};

export default TitleList;