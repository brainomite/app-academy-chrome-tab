import React from 'react';

class SetTimer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hours: 0,
            minutes: 15,
        }
    }

    update(field) {
        return (e) => {
            const value = parseInt(e.target.value)
            this.setState({
                [field]: value
            })
        };
    }
    
    render() {
        const hours = [0,1,2,3,4,5,6,7,8,9];
        const times = [1,2,3,4,5,10,15,20,25,30,35,40,45,50,55];
        const timer = (this.state.hours * 60) + (this.state.minutes);
        this.props.set(timer);
        return (
            <section className="alarm-section">
                <span id="set-alarm">Choose Alarm Interval:</span>
                <div id="alarm-interval-selector">
                    <div id="alarm-selector">
                        <span>Hours</span>
                        <select onChange={this.update('hours')} value="0">
                            {hours.map(time => {
                                return <option
                                key={`time-${time}`}
                                value={time}>
                                {time}
                            </option>})}
                        </select>
                    </div>
                    <div id="alarm-selector">
                        <span>Minutes</span>                
                        <select onChange={this.update('minutes')} value={this.state.minutes}>
                            {times.map(time => {
                                return <option
                                    key={`time-${time}`}
                                    value={time}>
                                    {time}
                            </option>
                            })}
                        </select>
                    </div>
                </div>
            </section>
        );
    };
};

export default SetTimer;

