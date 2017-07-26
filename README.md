# react-progress-meter
ReactJS progress meter/indicator
=========

React Js UI component 3D progress meter, progress indicator, progress bar. Light colored component, which indicates progress of some web process in your web site.

## Installation

  `npm install react-progress-meter --save`

## Usage

You must update the value of "currentProgress" prop to show the progress of your process.

    import ReactProgressMeter from 'react-progress-meter'
 
    export default class MyComponent extends React.Component {
        
        processCalculations () {
            this.setState({
                myProgress: 25 
            }); 
        }
        
        render() {
            return (
            <div>
                ...
                <ReactProgressMeter 
                    currentProgress={this.state.myProgress} 
                    showPercent={true}
                    show={true}
                    color="cyan" />
            </div>
            )
        }
    }

Demo: [https://www.devzonetech.com/demo/react-progress-meter/](https://www.devzonetech.com/demo/react-progress-meter/)

## Available component Props 

| *Prop name*       | *Default* | *Values*                                   | Description                                                                                      |
|-----------------|---------|----------------------------------------------------|--------------------------------------------------------------------------------------------------|
| currentProgress | 75      | Numbers: [0..100]                                   | Via this prop you can show the current progress of your process in the indicator as colored bar. |
| show            | true    | Boolean true or false                                      | Show or hide the component.                                                                      |
| showPercent     | false   | Boolean: true or false                                      | Show percent of the current progress as text in the progress meter.                              |
| color           | cyan    | String: "red", "yellow", "lime",  "cyan", "white", "navy"  | Color of your progress bar. [https://www.devzonetech.com/demo/react-progress-meter/](Color examples)    

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

[DEVZONE TECH Ltd.](https://www.devzonetech.com/)