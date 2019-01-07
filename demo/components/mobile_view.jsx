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
