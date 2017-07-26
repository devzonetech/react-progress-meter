'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import ReactProgressMeter from './ReactProgressMeter';

ReactDOM.render(
        <div id="wrapper">
            <h1>ReactProgressMeter ReactJs component demo</h1>
            <div>
                <p>React Js UI component 3D progress meter, progress indicator, progress bar. Light colored component, which indicates progress of some web process in your web site.</p>
            </div>
            <div>
                <ReactProgressMeter currentProgress="15" color="red" />
            </div>
            <div>
                <ReactProgressMeter currentProgress="30" showPercent={true} color="yellow" />
            </div>
            <div>
                <ReactProgressMeter currentProgress="45" color="lime" />
            </div>
            <div>
                <ReactProgressMeter currentProgress="60" showPercent={true} color="cyan" />
            </div>
            <div>
                <ReactProgressMeter currentProgress="75" color="white" />
            </div>
            <div>
                <ReactProgressMeter currentProgress="85" showPercent={true} color="navy" />
            </div>
            <div className="topSpace">
                <a href="https://www.npmjs.com/package/react-progress-meter" className="rightSpace">
                    <img alt="Github Logotype" src="https://docs.npmjs.com/images/npm.svg" width="200" />
                </a>
                <a href="https://github.com/devzonetech/react-progress-meter">
                    <img alt="Github Logotype" src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Logo.png" width="200" />
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
