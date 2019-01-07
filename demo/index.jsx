import React from 'react';
import ReactDOM from 'react-dom';
import MobileView from './components/mobile_view';
import DesktopView from './components/desktop_view';
import './index.scss';

export default class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            radio_value: 'desktop'
        }
    }

    handleOnChange = (e) =>{
        this.setState({radio_value: e.target.value})
    }

    render() {
        return (
            <React.Fragment>
                <div className="main-container">
                    <div className="radio-button">
                        <label>
                            <input type="radio" value='mobile' checked={this.state.radio_value === 'mobile' ? true : false} onChange={this.handleOnChange} />
                            Mobile View
                        </label>
                        <label>
                            <input type="radio" value="desktop" checked={this.state.radio_value === 'desktop' ? true : false} onChange={this.handleOnChange} />
                            Desktop View
                        </label>
                    </div>
                    {this.state.radio_value === 'mobile' ? <MobileView /> : <DesktopView />}
                </div>
            </React.Fragment>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)