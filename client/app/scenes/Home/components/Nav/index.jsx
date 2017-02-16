import React from 'react';
import {render} from 'react-dom';
import ReactTooltip from 'react-tooltip'
import { Container, Row, Col } from 'reactstrap';

export default class Banner extends React.Component {
    constructor(props) {
        super(props);
        //SAMPLE STATE, will load data from server in production
        this.state = {onlineNow: 2,
                      quote: 'An investment in knowledge pays the best interest. -Benjamin Franklin',
                      links: [
                               {name: 'Top trending', links: [{name: 'What is Node.js for?', url: '/a/coding/what-is-nodejs-for'},
                                                              {name: 'How to land that dream job', url: '/a/jobs/how-to-land-that-dream-job51'}]},
                               {name: 'Categories', links: [{name: 'Javascript', url: '/c/javascript'},
                                                            {name: 'Cooking', url: '/c/cooking'}]},
                               {name: '[other]', links: [{name: 'Other', url: '/#'}]},
                               {name: 'About us', links: [{name: 'Privacy Policy', url: '/about/privacy-policy'},
                                                         {name: 'Careers', url: '/about/careers'}]},
                             ]
                     };
    }
    render() {
        return (
            <div id="TopNav">
                <div className="pos-f-t">
                  <nav className="navbar navbar-inverse bg-inverse">
                    <button className="navbar-toggler nav-item" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div id='nav-text'>
                        <span className="quote text-muted">{this.state.quote}</span>
                        <span className="online-now ml-4">{this.state.onlineNow} online now!</span>
                    </div>
                  </nav>
                  <div className="collapse" id="navbarToggleExternalContent">
                    <div className="bg-inverse p-4">
                      <Row>
                          {this.state.links.map((link, index) => (
                            <Trending key={index} name={link.name} links={link.links} />
                          ))}
                      </Row>
                    </div>
                  </div>
                </div>
            </div>
        );
    }
}

class Trending extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Col xs="3">
              <h4 className="text-white">{this.props.name}</h4>
              {this.props.links.map((link, index) => (
                <TrendingLink key={index} link={link} />
              ))}
            </Col>
        );
    }
}

class TrendingLink extends React.Component {
    render() {
        return (
            <a href={this.props.link.url} className="trending-link">{this.props.link.name}</a>
        );
    }
}