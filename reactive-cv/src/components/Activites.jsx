import React from 'react';

class Activites extends React.Component {
    render() {
        return (
            <div className="right-field-section">
                <header className="right-field-header">Activites and Awards</header>
                <section className="section-field">
                    <ul className="lower-ul">
                        <li>Participated in "PASHA Coding Bootcamp"</li>
                        <li>Winner of the "Italian Grand Prix competition" among 3000
                        Formula 1 volunteers (2017)
                       </li>
                        <li>"PASHA Life Insurance", Master-Class: "Insurance Culture" certificate
                        (27-29 July 2016)
                       </li>
                        <li>Certificate of Trainings: Leadership, Increasing personal effectiveness,
                        Presentation skills, Negatiation skills, Conflict management, Stress management
                        (Registration number: 101373)
                       </li>
                    </ul>
                </section>
            </div>
        );
    }
}

export default Activites;