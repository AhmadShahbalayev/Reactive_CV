import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header id="contacts-info">
                <div className="contacts">
                    <p className="contact-items">
                        <span className="icons" id="phone"></span>
                        +994555466993
                        <span className="icons" id="email"></span>
                        ahmedsahbalayev@gmail.com
                    </p>
                    <p className="contact-items">
                        <span className="icons" id="location"></span>
                        Baku, Azerbaijan
                        <span className="icons" id="linked-in"></span>
                        /in/ahmadshahbalayev
                    </p>
                </div>
            </header>
        );
    }
}

export default Header;