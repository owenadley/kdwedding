import React from 'react';
import '../App.css';

class Header extends React.Component {

    render() {
        return (
            <div className="sub-backdrop">
                <div className="sub-backdrop-content">
                    <div className="sub-backdrop-item">
                            <p>the wedding</p>
                    </div>
                    <div className="sub-backdrop-item">
                        <div className="sub-backdrop-item-contact">
                            <p>Katelyn.adley@hotmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Header;