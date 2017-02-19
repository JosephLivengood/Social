import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';

//SAMPLE RETURN FROM API UNTIL FULLY IMPLE
const sampleStatuses = [
    {_id: 1619, name: 'Joseph Livengood', photo: 'https://avatars.githubusercontent.com/u/13642392?v=3', text: 'This worked!', time: 'Just now!', replies: [
        {_id: 133677, name: 'Bill Gates', photo: 'https://www.project-syndicate.org/default/library/eb7a653970f377481252dbb4a16923f2.square.jpg', text: 'It works for me too!', time: 'Just now!'},
        {_id: 142788, name: 'Joseph Livengood', photo: 'https://avatars.githubusercontent.com/u/13642392?v=3', text: 'You should test our the ArticleFeed too now', time: 'Just now!'}
    ]},
    {_id: 1332, name: 'Bill Gates', photo: 'https://www.project-syndicate.org/default/library/eb7a653970f377481252dbb4a16923f2.square.jpg', text: 'This works really well, great job!', time: '2 minutes ago', replies: []},
    {_id: 1425, name: 'Joseph Livengood', photo: 'https://avatars.githubusercontent.com/u/13642392?v=3', text: 'About to add in the StatusFeed container! #excited', time: '8 minutes ago', replies: []},
    {_id: 1235, name: 'Bill Gates', photo: 'https://www.project-syndicate.org/default/library/eb7a653970f377481252dbb4a16923f2.square.jpg', text: 'Just released our Note for 2017', time: '3 hours ago', replies: []},
    {_id: 1236, name: 'Joseph Livengood', photo: 'https://avatars.githubusercontent.com/u/13642392?v=3', text: 'Нет никого, кто любил бы боль саму по себе, кто искал бы её и кто хотел бы иметь её просто потому, что это боль..', time: '3 hours ago', replies: []},
    {_id: 1787, name: 'Bill Gates', photo: 'https://www.project-syndicate.org/default/library/eb7a653970f377481252dbb4a16923f2.square.jpg', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non erat id dolor dapibus imperdiet et quis ligula.', time: '3 hours ago', replies: []},
    {_id: 1908, name: 'Joseph Livengood', photo: 'https://avatars.githubusercontent.com/u/13642392?v=3', text: 'Integer ac ex at ipsum commodo ornare rutrum eget odio.', time: '4 days ago', replies: []},
    {_id: 1756, name: 'Bill Gates', photo: 'https://www.project-syndicate.org/default/library/eb7a653970f377481252dbb4a16923f2.square.jpg', text: 'Phasellus id libero vel lorem volutpat fringilla. Quisque ullamcorper fermentum libero, quis cursus nisi gravida vel. Donec tincidunt orci sem, ut volutpat magna porta et.', time: '4 days ago', replies: []},
    {_id: 1, name: 'Joseph Livengood', photo: 'https://avatars.githubusercontent.com/u/13642392?v=3', text: 'Starting my new Social project with react on my ConquerJS boilerplate!', time: '3 weeks ago', replies: []}
];

export default class StatusFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {user: {}, loading: true, statuses: []};
    }
    componentDidMount() {
        axios.get('/_api/me') //change to feed _api and render real results as well as add the pagination handler
            .then((result) => {
                this.setState({user: result.data.user, loading: false, statuses: sampleStatuses});
            })
    }
    loading() {
		return this.state.loading ? 'placeholder' : '';
	}
    render () {
        const _this = this;
        return (
            <Container id='StatusFeed'>
                {this.state.statuses.map((status, index) => (
                    <StatusUpdate key={index} status={status} />
                ))}
            </Container>
        );
    }
}

class StatusUpdate extends React.Component {
    render () {
        return (
            <Row className='status-update'>
                <Col sm='3' lg='2'>
                    <div className='status-update-cons'>
                        <img src={this.props.status.photo} className='img-thumbnail' />
                        <p className='name'>{this.props.status.name}</p>
                    </div>
                </Col>
                <Col sm='7' lg='9'>
                    <div className='status-update-cons'>
                        <p className='status-text'>{this.props.status.text}</p>
                        <p className='text-muted status-time'>{this.props.status.time}</p>
                    </div>
                </Col>
                <Col sm='2' lg='1'>
                    <div className='status-update-cons'>
                        <h1 className='reply-count'>{this.props.status.replies.length}</h1>
                        <p className='text-muted reply-label'>replies</p>
                    </div>
                </Col>
            </Row>
        );
    }
}

class Reply extends React.Component {
    render () {
        return (
            <p>hi</p>
        );
    }
}