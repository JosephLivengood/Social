import React from 'react';
import {render} from 'react-dom';
import ReactTooltip from 'react-tooltip'
import { Container, Row, Col, Card, Button, CardImg, CardTitle, CardText, CardColumns,
 CardSubtitle, CardBlock, CardImgOverlay } from 'reactstrap';

const placeholder = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin purus ligula, fringilla eu ligula porttitor, semper auctor est. Nullam vel sapien quis diam porta sollicitudin. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus viverra sit amet justo et auctor. Sed iaculis turpis a malesuada tincidunt. Nam purus sem, tempor ac ultricies eget, vulputate ac felis. Integer ut ex vulputate, semper est at, finibus lorem.Proin egestas nunc a risus imperdiet porttitor fringilla nec est. Aenean molestie, enim vel placerat ullamcorper, risus purus scelerisque nisl, sed malesuada ante odio eget metus. Integer efficitur quam eu felis viverra cursus. Aliquam neque dui, suscipit id ex sit amet, varius convallis purus. Donec varius nulla enim, et viverra dui placerat quis. Donec scelerisque risus augue, ut tempus dui scelerisque nec. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In hac habitasse platea dictumst. Suspendisse congue urna nec tempus mollis.Proin nec massa elementum neque maximus ornare. Sed ornare mattis lectus. Maecenas non gravida erat. Pellentesque mattis accumsan magna, vitae feugiat lectus hendrerit at. Nam at imperdiet purus. Sed at orci vel nibh bibendum placerat eu sit amet massa. Donec massa mi, venenatis non volutpat ut, fermentum non sem. Duis varius purus sed ipsum porttitor lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec consectetur in sapien sit amet luctus. Nullam porta, erat at sagittis feugiat, felis lectus gravida justo, eget vehicula dolor mi sit amet justo. Vestibulum rhoncus hendrerit erat eu tincidunt.';

export class StandardCard extends React.Component {
    render() {
        var i = Math.random()*900;
        var sampletext = placeholder.slice(i,i+Math.floor(Math.random()*600)+200);
        return (
            <Card>
                <CardBlock>
                    <CardTitle>Secrets of Learning</CardTitle>
                    <CardSubtitle>Joseph Livengood</CardSubtitle>
                    <CardText>{sampletext}</CardText>
                    <Button>Read More</Button>
                    <CardText>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </CardText>
                </CardBlock>
            </Card>
        );
    }
}

export class StandardCardAd extends React.Component {
    render() {
        return (
            <Card block inverse color="success" className='text-center'>
                <CardTitle>Advertisement</CardTitle>
                <CardText>This could be an advertisement</CardText>
            </Card>
        );
    }
}

export class StandardCardOurs extends React.Component {
    render() {
        return (
            <Card block inverse style={{ backgroundColor: '#333', borderColor: '#333' }} className='text-center'>
                <CardTitle>Announcement</CardTitle>
                <CardText>Here's an annoucement for what we may want to alert users to like upcoming features, changes, or maybe even promote great sites!</CardText>
            </Card>
        );
    }
}

export class StandardCardImg extends React.Component {
    render() {
        var i = Math.random()*900;
        var sampletext = placeholder.slice(i,i+Math.floor(Math.random()*600)+100);
        return (
            <Card>
                <CardImg className="standard-card-img" top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=placeholder&w=256&h=160" />
                <CardImgOverlay>
                    <CardTitle>How to React.js with Bootstrap v4</CardTitle>
                    <CardSubtitle>Joseph Livengood</CardSubtitle>
                    <CardText>{sampletext}</CardText>
                    <Button>Read More</Button>
                    <CardText>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </CardText>
                </CardImgOverlay>
            </Card>
        );
    }
}
