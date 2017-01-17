import React, {Component, PropTypes} from 'react';

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
                    {this.props.titlelist.map((item,index) => <li key={index}>{item.title}</li>)}
                </ul>
            </div>
        );
    }
}

TitleList.propTypes = {
    // titlelist: React.PropTypes.string.isRequired,
};

export default TitleList;