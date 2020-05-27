import { OperatorListItem } from '../types';
import React from 'react';

class OperatorListTableCell extends React.PureComponent<OperatorListItem> {
    public render() {
        return (
            <div className="operator-list-table-cell">
                <p>
                    {this.props.name}
                </p>
            </div>
        );
    }
}

export default OperatorListTableCell;