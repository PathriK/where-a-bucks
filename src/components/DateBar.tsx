import * as React from 'react';

interface IDateBarProps {
    date: string
}

const DateBar: React.SFC<IDateBarProps> = ({date}) => (
    <div>
        <span>{date}</span>
    </div>
);

export default DateBar;