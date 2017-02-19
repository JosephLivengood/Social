import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';

import StatusUpdater from './subComponents/StatusUpdater.jsx';

export default class Me extends React.Component {
    constructor(props) {
        super(props);
        this.state = {user: {}, loading: true};
    }
    componentDidMount() {
        axios.get('/_api/me')
            .then((result) => {
                this.setState({user: result.data.user, loading: false});
            })
    }
    loading() {
		return this.state.loading ? 'placeholder' : '';
	}
    render () {
        return (
            <Row id='Me'>
                <Col xs='2'>
                    <img src={this.state.user.photo} className={'img-thumbnail ' + this.loading()} />
                    <p className={this.loading()}>{this.state.user.name}</p>
                </Col>
                <Col xs='7'>
                    <StatusUpdater />
                </Col>
                <SampleChart />
                <SampleChart />
                <SampleChart />
            </Row>
        );
    }
}

class SampleChart extends React.Component {
    render () {
        return (
            <Col xs='1'>
                <p className='sample-text'>Sample</p>
                <div className='sample-chart' />
            </Col>
        );
    }
}