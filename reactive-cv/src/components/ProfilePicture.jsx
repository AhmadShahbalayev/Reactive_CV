import React from 'react';
import pp from '../images/pp.jpg'

class ProfilePicture extends React.Component {
    render() {
        return (
            <div id="pp-container">
                <img src={pp} id="pp" alt="profile-pic"/>
            </div>
        );
    }
}

export default ProfilePicture;