import React from 'react';
import ProfilePicture from './ProfilePicture';

class Aside extends React.Component {
    render() {
        return (
            <div className="aside">
                <ProfilePicture />
                <p className="aside-section">AHMAD SHAHBALAYEV</p>
                <section className="aside-section">Education</section>
                    <ul className="aside-ul">
                        <li>University of Economics:<br></br>
                        MBA in Finance (2019 - 2021)
                        </li>
                        <li>Azerbaijan State University of Economics:<br></br>
                        Bachelor degree in Management, "SABAH Center"
                        (2016 - 2019)
                        </li>
                        <li>University of Economics:<br></br>
                        Bachelor degree in Management (2015 - 2016)
                        </li>
                    </ul>
                <section className="aside-section">Languages</section>
                    <ul className="aside-ul">
                        <li>Azerbaijani - Native</li>
                        <li>English - Intermediate</li>
                        <li>Russian - Intermediate</li>
                    </ul>
                <section className="aside-section">IT-Skills</section>
                    <ul className="aside-ul">
                        <li>HTML 5</li>
                        <li>CSS 3</li>
                        <li>JavaScript ES6</li>
                        <li>React</li>
                        <li>Microsoft Office</li>
                        <li>Sony Vegas</li>
                        <li>Premiere Pro</li>
                        <li>Photoshop CS6</li>
                    </ul>
            </div>
        );
    }
}

export default Aside;