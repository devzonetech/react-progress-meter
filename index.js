import React from 'react';
import PropTypes from 'prop-types';
import "!style!css!./css/styles.css";

export default class ReactProgressMeter extends React.Component {
    
    constructor() {
        super();
    }
    
    render() {
        
        var progressClasses = "bar bar-" + this.props.currentProgress + " " + this.props.color;
        
        
        return (      
            <div class={this.props.show ? "chart showProgress" : "chart hideProgress"}>
                <div class={progressClasses}>
                    <div class="face top">
                        <div class="growing-bar"></div>
                    </div>
                    <div class="face side-0">
                        <div class="growing-bar"></div>
                    </div>
                    <div class="face floor">
                        <div class="growing-bar"></div>
                    </div>
                    <div class="face side-a"></div>
                    <div class="face side-b"></div>
                    <div class="face side-1">
                        <div class="growing-bar"></div>
                    </div>
                </div>
            </div>);    
    }
}

ReactProgressMeter.propTypes = {
    currentProgress: PropTypes.number,
    show: PropTypes.bool,
    color: PropTypes.string,
};

ReactProgressMeter.defaultProps = {
    currentProgress: 10,
    show: true,
    color: "cyan"
};