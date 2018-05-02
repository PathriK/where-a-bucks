import * as React from 'react';

interface IBalanceBar {
    currentBalance: number,
    diffAmount: number,
    total: number,
    date: string,
    onCurrentChange: (currentBalance: number, date: string) => void
}

const BalanceBar: React.SFC<IBalanceBar> = ({currentBalance, diffAmount, total, date, onCurrentChange}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const elem = e.target;
        const val = parseFloat(elem.value);
        onCurrentChange(val, date);
    }
    return (
        <div>
            <span>
                <label>
                    Current Balance:
                    <input
                    type="number"
                    value={currentBalance}
                    onChange={handleChange}/>
                </label>
            </span>
            ||
            <span>{diffAmount}</span>
            ||
            <span>{total}</span>
        </div>        
    )
};

export default BalanceBar;