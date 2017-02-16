import React from 'react';
import {render} from 'react-dom';
import ReactTooltip from 'react-tooltip'
import { Container, Row, Col, Card, Button, CardImg, CardTitle, CardText, CardColumns,
 CardSubtitle, CardBlock } from 'reactstrap';
import { StandardCard, StandardCardAd, StandardCardOurs, StandardCardImg } from './subComponents/StandardCard.jsx';


export default class Features extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var cardsToRender = [];
        for(var i=0; i<30; i++) {
            var x = Math.random()*10;
            if(x<5){
                cardsToRender.push(<StandardCard />)
            } else if (x<8) {
                cardsToRender.push(<StandardCardImg />)
            } else if (x<9) {
                cardsToRender.push(<StandardCardAd />)
            } else {
                cardsToRender.push(<StandardCardOurs />)
            }
        }
        return (
            <CardColumns id='Features'>
                {cardsToRender}
            </CardColumns>
        );
    }
}