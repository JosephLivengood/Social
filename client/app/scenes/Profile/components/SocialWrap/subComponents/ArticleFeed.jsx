import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';
import { Card, Button, CardTitle, CardText, Container, Row, Col } from 'reactstrap';

//SAMPLE RETURN FROM API UNTIL FULLY IMPLE (reads postfixing can be done clientside later)
const sampleArticles = [
    {title: 'Making Social Media', catch: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum vitae arcu et vehicula. Nunc in orci non velit aliquet ultrices. Etiam dignissim commodo lacinia.', date: 'Feb 10, 2017', author: 'Joseph Livengood', reads: 2},
    {title: 'Creating Perfection', catch: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum vitae arcu et vehicula. Nunc in orci non velit aliquet ultrices. Etiam dignissim commodo lacinia.', date: 'Feb 10, 2017', author: 'Steve Jobs', reads: 91},
    {title: '21\'st Century Shoe Design', catch: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum vitae arcu et vehicula. Nunc in orci non velit aliquet ultrices. Etiam dignissim commodo lacinia.', date: 'Feb 5, 2017', author: 'Tom Ford', reads: 412},
    {title: 'Reactify Your Client', catch: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum vitae arcu et vehicula. Nunc in orci non velit aliquet ultrices. Etiam dignissim commodo lacinia.', date: 'Feb 2, 2017', author: 'Joseph Livengood', reads: '3k'},
    {title: 'I\'m not crazy.', catch: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum vitae arcu et vehicula. Nunc in orci non velit aliquet ultrices. Etiam dignissim commodo lacinia.', date: 'Feb 1, 2017', author: 'Kanye West', reads: '9.1m'},
    {title: '1=44? Maximizing Returns', catch: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum vitae arcu et vehicula. Nunc in orci non velit aliquet ultrices. Etiam dignissim commodo lacinia.', date: 'Jan 24, 2017', author: 'Bill Gates', reads: 12},
    {title: 'Do they still make wired headphone?!', catch: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum vitae arcu et vehicula. Nunc in orci non velit aliquet ultrices. Etiam dignissim commodo lacinia.', date: 'Jan 13, 2017', author: 'Tim Cook', reads: 432},
    {title: 'Welcome to the Drone-Age', catch: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum vitae arcu et vehicula. Nunc in orci non velit aliquet ultrices. Etiam dignissim commodo lacinia.', date: 'Jan 12, 2017', author: 'Mark Zuckerburg', reads: 5}
];

export default class ArticleFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {user: {}, loading: true, articles: []};
    }
    componentDidMount() {
        axios.get('/_api/me') //change to feed _api and render real results
            .then((result) => {
                this.setState({user: result.data.user, loading: false, articles: sampleArticles});
            })
    }
    loading() {
		return this.state.loading ? 'placeholder' : '';
	}
    render () {
        return (
            <Container id='ArticleFeed'>
                <AnnouncementCard />
                <Row>
                    {this.state.articles.map((article, index) => {
                        if (index==7) {
                            return (<AdCard />);
                        } else {
                            return (<ArticleCard key={index} article={article} />);
                        }
                    })}
                </Row>
            </Container>
        );
    }
}

//To be loaded from server. No update should require a rebuild!
class AnnouncementCard extends React.Component {
    render () {
        return (
            <Card block inverse color="info" className='announcement-card'>
                <CardTitle>Share Your Expertise!</CardTitle>
                <CardText>Write an article, short or long, to share what you know best! Your friends and the millions of strangers who read it will be forever greatful and you'll level up that skill!</CardText>
                <Button color="secondary">Start Writing!</Button>
            </Card>
        );
    }
}
class AdCard extends React.Component {
    render () {
        return (
            <Col xs='6'>
                <Card block inverse color="warning">
                    <CardTitle>freeCodeCamp</CardTitle>
                    <CardText>freeCodeCamp is an open source community that helps you learn to code. You can work through our self-paced coding challenges, build projects, and earn certificates. We also connect you with people in your city so you can code together. Once you finish the first 1,200 hours of challenges, you’ll get to build a series of solutions for nonprofits. You’ll work in pairs, under the supervision of a volunteer project manager and a stakeholder from the nonprofit.</CardText>
                    <Button color="secondary">Visit</Button>
                </Card>
            </Col>
        );
    }
}
class ArticleCard extends React.Component {
    render () {
        return (
            <Col xs='6'>
                <Card block outline color="success" className='article-card'>
                    <CardTitle>{this.props.article.title}</CardTitle>
                    <CardText>{this.props.article.catch}</CardText>
                    <CardText className='text-muted'>{this.props.article.reads} reads since {this.props.article.date} - {this.props.article.author}</CardText>
                </Card>
            </Col>
        );
    }
}