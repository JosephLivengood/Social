import React from 'react';
import {render} from 'react-dom';
import ReactTooltip from 'react-tooltip'

export default class Banner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {onlineNow: 2}
    }
    render () {
        return (
            <div id="TopNav">
                <div className="pos-f-t">
                  <nav className="navbar navbar-inverse bg-inverse">
                    <button className="navbar-toggler nav-item" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div id='nav-text'>
                        <span className="quote text-muted">An investment in knowledge pays the best interest. -Benjamin Franklin</span>
                        <span className="online-now ml-4">{this.state.onlineNow} online now!</span>
                    </div>
                  </nav>
                  <div className="collapse" id="navbarToggleExternalContent">
                    <div className="bg-inverse p-4">
                      <h4 className="text-white">Top trending</h4>
                      <span className="text-muted">Toggleable via the navbar brand.</span>
                    </div>
                  </div>
                </div>
            </div>
        );
    }
}