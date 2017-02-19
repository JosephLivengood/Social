import React from 'react';
import {render} from 'react-dom';
import { Container, Row, Col } from 'reactstrap';

import StatusFeed from './subComponents/StatusFeed.jsx';
import ArticleFeed from './subComponents/ArticleFeed.jsx';

export default class SocialWrap extends React.Component {
    render () {
        return (
            <Row id='SocialWrap'>
                <Col xs='6'>
                    <StatusFeed />
                </Col>
                <Col xs='6'>
                    <ArticleFeed />
                </Col>
            </Row>
        );
    }
}