import React from "react";
import DatePicker from './DatePicker.ios';
const TimePicker = props => {
    return (<DatePicker mode={'time'} {...props} onDateSelected={props.onTimeSelected}/>);
};
export default TimePicker;
