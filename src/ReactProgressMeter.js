import React from 'react';
import PropTypes from 'prop-types';
import "!style-loader!css-loader!./css/styles.css";
import "!style-loader!css-loader!./css/bar.styles.css";

class ReactProgressMeter extends React.Component {
    
    constructor() {
        super();
    }
    
    render() {
        
        var progressClasses = "bar bar-" + this.props.currentProgress + " " + this.props.color;
        var styleProps = {
            width: this.props.width,
        }
        
        return (
            <div style={styleProps} className={this.props.show ? "chart showProgress" : "chart hideProgress"}>
                <div className={progressClasses}>
                    <div className="face top">
                        <div className="growing-bar"></div>
                    </div>
                    <div className="face side-0">
                        <div className="growing-bar"></div>
                    </div>
                    <div className="face floor">
                        <div className="growing-bar">{this.props.showPercent ? this.props.currentProgress + '%' : '' }</div>
                    </div>
                    <div className="face side-a"></div>
                    <div className="face side-b"></div>
                    <div className="face side-1">
                        <div className="growing-bar"></div>
                    </div>
                </div>
            </div>);    
    }
}

ReactProgressMeter.propTypes = {
    currentProgress: PropTypes.number,
    show: PropTypes.bool,
    showPercent: PropTypes.bool,
    color: PropTypes.string,
    width: PropTypes.string,
};

ReactProgressMeter.defaultProps = {
    currentProgress: 75,
    show: true,
    showPercent: false,
    color: "cyan",
    width: "100%",
};

export default ReactProgressMeter;