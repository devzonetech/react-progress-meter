# ReactJS progress meter/indicator
[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]

[npm-url]: https://npmjs.org/package/react-progress-meter
[downloads-image]: http://img.shields.io/npm/dm/react-progress-meter.svg
[npm-image]: https://badge.fury.io/js/react-progress-meter.svg

React Js UI component 3D progress meter, progress indicator, progress bar. Light colored component, which indicates progress of some web process in your react application. Works with React 16.x.x versions.

## Demo
[https://www.devzonetech.com/demo/react-progress-meter/](https://www.devzonetech.com/demo/react-progress-meter/)

![Demo image of progress meter/indicator](https://raw.githubusercontent.com/devzonetech/react-progress-meter/master/src/img/react-progress-meter.png)

## Installation

  `npm install react-progress-meter --save`

## Usage
You must update periodically the value of "currentProgress" prop to show the progress of your process.

```jsx
import ReactProgressMeter from 'react-progress-meter'

export default class MyComponent extends React.Component {
    
    constructor() {
        super();

        this.state = {
            myProgress: 25,
        }
    }
    
    render() {
        return (
        <div>
            ...
            <ReactProgressMeter 
                currentProgress={this.state.myProgress} 
                showPercent={true}
                show={true}
                color="cyan" 
		width="80%"
	    />
        </div>
        )
    }
}
```

## Component Props 

| *Prop*       | *Default* | *Values*                                   | Description                                                                                      |
|-----------------|---------|----------------------------------------------------|--------------------------------------------------------------------------------------------------|
| currentProgress | 75      | Numbers: [0..100]                                   | Via this prop you can show the current progress of your process in the indicator as colored bar. |
| show            | true    | Boolean: true or false                                      | Show or hide the component.                                                                      |
| showPercent     | false   | Boolean: true or false                                      | Show percent of the current progress as text in the progress meter.                              |
| color           | cyan    | String: "red", "yellow", "lime",  "cyan", "white", "navy"  | Color of your progress bar.   
| width           | 100%    | String: percent or px. Examples: "100%" or "400px"  | Width of progress meter component.   

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

[DEVZONE TECH Ltd.](https://www.devzonetech.com/)