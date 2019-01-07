import React from 'react';
import './style/styles.scss';

export default class CircularSteppers extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {size, strokeWidth, activeStep, steps, showTitle, showSubTitle} = this.props;
        const radius = (size - strokeWidth) / 2;
        // Arc length at 100% coverage is the circle circumference
        const dashArray = radius * Math.PI * 2;
        // Scale 100% coverage overlay with the actual percent
        const percentage = (activeStep / steps.length) * 100;
        const dashOffset = dashArray - dashArray * percentage / 100;

        return (
            <React.Fragment>
                <div className="circular-stepper-container">
                    <div className="circular-stepper">
                        <svg width={size} height={size}>
                            <circle
                                className="circle-background" 
                                cx={size/2} 
                                cy={size/2} 
                                r={radius} 
                                strokeWidth={`${strokeWidth}px`} 
                                />
                            <circle
                                className="circle-progress" 
                                cx={size/2} 
                                cy={size/2} 
                                r={radius} 
                                strokeWidth={`${strokeWidth}px`}
                                transform={`rotate(-90 ${size / 2} ${size/ 2})`}
                                style={{
                                    strokeDasharray: dashArray,
                                    strokeDashoffset: dashOffset
                                }} />
                            <text x="50%" y="50%" dy=".3em" textAnchor="middle" className="circle-text">
                                {activeStep} of {steps.length}
                            </text>
                        </svg>
                    </div>
                    <div className="circular-stepper-text">
                            {showTitle && <h3> {steps[activeStep - 1].title} </h3> }
                            {showSubTitle && <span> {steps[activeStep - 1].subtitle} </span>}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

CircularSteppers.defaultProps = {
    size: 150,
    strokeWidth: 5,
    activeStep: 4,
    steps: [{title: 'Title - 1', subtitle: 'subtile - 1'}, 
            {title: 'Title - 2', subtitle: 'subtile - 2'}, 
            {title: 'Title - 3', subtitle: 'subtile - 3'},
            {title: 'Title - 4', subtitle: 'subtile - 4'}],
    showTitle: true,
    showSubTitle: true
}