import React from 'react';
import {render} from 'react-dom';
import { Container, Row, Col } from 'reactstrap';

import Banner from './components/Banner/index.jsx';
import Me from './components/Me/index.jsx';

class Profile extends React.Component {
    componentDidMount () {
        document.getElementById('profileApp').className += ' fadeItIn';
    }
    render () {
        return (
            <div id='Profile'>
                <Banner />
                <div style={{height: '2000px'}}></div>
                <p>hi</p>
                <Me />
            </div>
        );
    }
}

render(<Profile/>, document.getElementById('profileApp'));