import OperatorListTableCell from './OperatorListTableCell';
import { OperatorListItem } from '../types';
import React from 'react';

export type OperatorListTableProps = {
    operators: OperatorListItem[];
};

class OperatorListTable extends React.PureComponent<OperatorListTableProps> {
    private readonly operatorsPerRow: number = 3

    constructor(props: OperatorListTableProps) {
        super(props);
    }

    public render() {
        const table = this.buildTable();
        return (
            <React.Fragment>
                {table}
            </React.Fragment>
        );
    }

    private buildTable(): JSX.Element {
        const numberOfRows = Math.ceil(this.props.operators.length / this.operatorsPerRow);
        let operatorRows: JSX.Element[] = [];
        for (let i = 0; i < numberOfRows; i++) {
            const row = this.buildRow(this.props.operators.slice(i * this.operatorsPerRow, (i + 1) * this.operatorsPerRow), i);
            operatorRows.push(row);
        }
        return (
            <div className="operator-list-table">
                {operatorRows}
            </div>
        );
    }

    private buildRow(operators: OperatorListItem[], rowNumber: number): JSX.Element {
        const list = operators.map((operator) => (<OperatorListTableCell key={operator.name} operator={operator} />));
        return (
            <div key={rowNumber}>
                {list}
            </div>
        );
    }
}

export default OperatorListTable;