'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

var ReactProgressMeter = require('../dist/index.js');

class ReactProgressMeterExamples extends React.Component {
    
    constructor() {
        super();
        this.updateProgress = this.updateProgress.bind(this);
        
        this.state = {
            progress: 0,
        }
    }
    
    componentDidMount() {
        this.updateProgress();
    }
    
    updateProgress() {
        var _self = this;
        setInterval(function () {
            var newProgress = 0;
            if (_self.state.progress < 100) {
                newProgress = _self.state.progress + 1;
            }
            _self.setState({progress: newProgress});
        }, 100);
    }
    
    render() {
        return (
            <div>
                <div>
		    <h2>Example 1</h2>
                    <ReactProgressMeter currentProgress={15} color="red" />
                </div>
                <div>
		    <h2>Example 2</h2>
                    <ReactProgressMeter currentProgress={30} showPercent={true} color="yellow" />
                </div>
                <div>
		    <h2>Example 3</h2>
                    <ReactProgressMeter currentProgress={45} color="lime" />
                </div>
                <div>
		    <h2>Example 4</h2>
                    <ReactProgressMeter currentProgress={this.state.progress} showPercent={true} color="cyan" />
                </div>
                <div>
		    <h2>Example 5</h2>
                    <ReactProgressMeter currentProgress={75} color="white" />
                </div>
                <div>
		    <h2>Example 6</h2>
                    <ReactProgressMeter currentProgress={85} showPercent={true} color="navy" />
                </div>
            </div>);    
    }
}

ReactDOM.render(
        <div id="wrapper">
            <h1>ReactProgressMeter ReactJs component demo</h1>
            <div>
                <p>React Js UI component 3D progress meter, progress indicator, progress bar. Examples in different colors of the component, which indicates progress of some web process in your web site.</p>
            </div>
            
            <ReactProgressMeterExamples />
            
            <div className="topSpace">
                <a href="https://www.npmjs.com/package/react-progress-meter" className="rightSpace">
                    <img alt="Npmjs Logo" src="https://raw.githubusercontent.com/npm/logos/master/npm%20logo/npm-logo-red.png" width="200" />
                </a>
                <a href="https://github.com/devzonetech/react-progress-meter">
                    <img alt="Github Logo" src="https://www.devzonetech.com/demo/react-show-more-text/build/img/github_logo.png" width="200" />
                </a> 
            </div>
            <div className="topSpace">
                <p>
                ReactProgressMeter ReactJs component is developed by <a href="https://www.devzonetech.com/">DEVZONE TECH Ltd</a><br />
                Styling and design by Rafael González.
                </p>
            </div>
        </div>
    ,document.getElementById('content')
);
