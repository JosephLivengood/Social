import React from 'react';
import {render} from 'react-dom';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

import Banner from './components/Banner/index.jsx';
import Login from './components/Login/index.jsx';
import Features from './components/Features/index.jsx';
import Social from './components/Social/index.jsx';
import Navi from './components/Navi/index.jsx';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }
    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    render () {
        
        //AuthStrats- contains all strategies you want the user to be able to use
        //            that have been impl on the sever. {name: 'Formatted Name'}
        const authStrats = {github: 'Github', 
                            google: 'Google'};
        
        return (
            <div id='Home'>
                <Navi />
                <Banner />
                <HomeTabs authStrats={authStrats} />
            </div>
        );
    }
}

class HomeTabs extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }
    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    render () {
        return (
            <div id='HomeTabs'>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                        className={classnames({ active: this.state.activeTab === '1' })}
                        onClick={() => { this.toggle('1'); }}
                        >
                            Featured
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                        className={classnames({ active: this.state.activeTab === '2' })}
                        onClick={() => { this.toggle('2'); }}
                        >
                            Social
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Features />
                    </TabPane>
                    <TabPane tabId="2">
                        <Login authStrats={this.props.authStrats}/>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

render(<Home/>, document.getElementById('App'));