import * as React from 'react';

interface IBalanceBar {
    total: number
}

const BalanceBar: React.SFC<IBalanceBar> = ({total}) => (
    <div>
        <span>{"-Reserved-"}</span>
        <span>{"-Reserved-"}</span>
        <span>{total}</span>
    </div>
);

export default BalanceBar;