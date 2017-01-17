import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="inner">
                    <a href="">HOME </a>
                    <a href="">INDEX </a>
                    <a href="">RSS </a>
                    <a href="">ABOUT </a>
                    <a href="" className="github">Gitub </a>

                </div>
            </div>
        );
    }
}

export default Header;  