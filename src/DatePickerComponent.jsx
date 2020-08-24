import React, {useState} from 'react';
import moment from 'moment';

import {IconSettings, Datepicker} from '@salesforce/design-system-react';

const DatePickerComponent = () => {
    const [value, setValue] = useState(undefined);
    const handleChange = (event, data) => {
		setValue(data.date);
	};
    return(
        <IconSettings iconPath="/_slds/icons">
        <Datepicker
            labels={{
                label: 'Date',
            }}
            onChange={(event, data) => {
                handleChange(event, data);
            }}
            onCalendarFocus={(event, data) => {
            }}
            formatter={(date) => {
                return date ? moment(date).format('M/D/YYYY') : '';
            }}
            parser={(dateString) => {
                return moment(dateString, 'MM-DD-YYYY').toDate();
            }}
            value={value}
        />
    </IconSettings>
    )
}

export default DatePickerComponent;