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
        this.countdown = setInterval(this.nextKnowledgeIs, 9000);
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
                    <a id='settings-link' href='/profile/settings'>Settings</a>
                    <a id='home-link' href='/'>Home</a>
                    <div id='Welcome'>
                        <h1>Knowledge is <em className='pulsate'>{this.state.knowledge}</em>.</h1>
                    </div>
                </div>
            </div>
        );
    }
}