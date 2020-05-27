import OperatorListTableCell from './OperatorListTableCell';
import { OperatorListTableProps, OperatorListItem } from '../types';
import React from 'react';

class OperatorListTable extends React.PureComponent<OperatorListTableProps> {
    private readonly operatorsPerRow: number = 4

    constructor(props: OperatorListTableProps) {
        super(props);
    }

    public render() {
        const table = this.buildTable();
        return (
            { table }
        );
    }

    private buildTable() {
        const numberOfRows = Math.ceil(this.props.operators.length / this.operatorsPerRow);
        let operatorRows: JSX.Element[] = [];
        for (let i = 0; i < numberOfRows; i++) {
            const row = this.buildRow(this.props.operators.slice(i * this.operatorsPerRow, this.operatorsPerRow), i);
            operatorRows.push(row);
        }
        return (
            <div>
                {operatorRows}
            </div>
        );
    }

    private buildRow(operators: OperatorListItem[], rowNumber: number): JSX.Element {
        const list = operators.slice(rowNumber * this.operatorsPerRow, this.operatorsPerRow)
            .map((operator, index) => (<OperatorListTableCell key={index} name={operator.name} />));
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default OperatorListTable;