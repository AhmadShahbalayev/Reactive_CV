import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Aside from './components/Aside'
import Header from './components/Header';
import Experience from './components/Experience';
import Activites from './components/Activites';
import References from './components/References';

class App extends React.Component {
    render() {
        return (
            <main>
                <Aside />
                <aside className="right-side-of-view">
                    <Header />
                    <Experience />
                    <Activites />
                    <References />
                </aside>
            </main>
        );
    }
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);