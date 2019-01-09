# react-js-circular-stepper

When your form has multiple pages, a stepper is a must. Steppers keep users informed about their progress by indicating what step they’re on and how many steps are left.

Displaying steppers on mobile forms is a challenge due to the limited screen space. Using the same stepper on your desktop form for your mobile form causes readability and visibility issues.

This circulat stepper is more useful for Mobile Forms. It is completely responsive and it will fit in any size of mobile screen.

# React Stepper Demo
https://pkbadiger.github.io/react-js-circular-stepper/


## Installation

The package can be installed via NPM:

```
npm i react-js-circular-stepper

```
You will need to install and configure sass-loader withing webpack.config.js, since all the styles required for react-js-stepper component is written using css preprocessor "SASS".

## Usage

The most basic use of the react-js-stepper can be described with:

```
import React from 'react';
import CircularStepper from '../../src/circular_stepper';

const steps = [{title: 'Contact Details', subtitle: 'Next: Shipping Information'}, 
{title: 'Shipping Information', subtitle: 'Next: Billing Address'}, 
{title: 'Billing Address', subtitle: 'Next: Payment & Review'},
{title: 'Payment & Review', subtitle: ''}];

export default class MobileView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            activeStep:1
        }
    }

    handleOnClickNext = () => {
        const step = this.state.activeStep + 1;
        this.setState({activeStep: step})
    }

    handleOnClickBack = () => {
        const step = this.state.activeStep - 1;
        this.setState({activeStep: step})
    }

    render() {
        return (
            <React.Fragment>
                <div className="circular-stepper-demo-wrapper">
                    <div className="demo-container-header">
                        <span> 4:32 </span>
                        <hr/>
                            <CircularStepper
                                activeStep={this.state.activeStep}
                                steps={steps}
                                strokeWidth={6}
                                size={80} />
                        <hr/>
                    </div>
                    <div className="demo-container-body">
                        Hello, You are in <b>{steps[this.state.activeStep - 1].title} </b>step!
                    </div>
                    <div className="demo-container-footer">
                        <hr />
                        <input className="back" type="button" value="Back" onClick={this.state.activeStep != 1 ? this.handleOnClickBack : null} />
                        <input className="next" type="button" value="Next" onClick={this.state.activeStep === steps.length ? null : this.handleOnClickNext} />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

```

## Configuration

The most basic use of the react-js-stepper can be described with:

```
    <CircularStepper
        activeStep={this.state.activeStep}
        steps={steps}
        strokeWidth={6}
        size={80} />

```

`activeStep` is a number passed to stepper to highlight or show active step among list of steps.

`size` height and width of the circle

`strokeWidth` width of the circle line

`steps` array of objects with properties name called `title` & `subtitle` passed to stepper to display number of steps or stages.

## Props

| Name     | Type           | Default     | Description  |
|----------|----------------|-------------|--------------|
| steps| array of objects | steps = [{title: 'Title - 1', subtitle: 'subtile - 1'}, 
            {title: 'Title - 2', subtitle: 'subtile - 2'}, 
            {title: 'Title - 3', subtitle: 'subtile - 3'},
            {title: 'Title - 4', subtitle: 'subtile - 4'}] | Constants passed to display stepper|
|activeStep | number | 4 |  |
|strokeWidth| number | 5 | 
|showTitle | boolean | true | Enable/disable Title
|showSubTitle | boolean | true | Enable/disable Sub Title

