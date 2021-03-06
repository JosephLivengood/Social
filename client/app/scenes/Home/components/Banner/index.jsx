import React from 'react';
import {render} from 'react-dom';
import ReactTooltip from 'react-tooltip'

export default class Banner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {knowledge: 'Power', current: 0};
        this.nextKnowledgeIs = this.nextKnowledgeIs.bind(this);
    }
    componentDidMount() {
        this.countdown = setInterval(this.nextKnowledgeIs, 3000);
    }
    nextKnowledgeIs() {
        const is = ['Power','Freedom','Inspiration','Free','Everywhere','Everything','Strength','Peace'];
        this.state.current++;
        this.setState({knowledge: is[this.state.current%is.length]});
    }
    render () {
        return (
            <div id='BannerWrap'>
                <div id='Banner'>
                    <div className="btn-group" id="LoginButtonGroup">
                        <button className='btn btn-outline-secondary' disabled>Email Login</button>
                        <button className='btn btn-outline-secondary'><i className="fa fa-github fa-lg"></i></button>
                        <button className='btn btn-outline-secondary' disabled><i className="fa fa-google fa-lg"></i></button>
                    </div>
                    <div id='Welcome'>
                        <h1>Knowledge is <em className='pulsate'>{this.state.knowledge}</em>.</h1>
                    </div>
                </div>
            </div>
        );
    }
}