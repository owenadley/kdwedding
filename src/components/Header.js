import React from 'react';
import '../App.css';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: props.title
        }
    }

    render() {
        return (

            <div>
                <div className="sub-backdrop-tint">
                    <div className="sub-backdrop-content">
                        <div className="sub-backdrop-item">
                                <p>{this.state.title}</p>
                        </div>
                        <div className="sub-backdrop-item">
                            <div className="sub-backdrop-item-contact">
                                <p>Katelyn.adley@hotmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sub-backdrop"/>
            </div>
        )
    }

}

export default Header;