import React from 'react';
import OperatorBasicInfoTable from '../../operatorBasicInfoTable/components/OperatorBasicInfoTable';
import SidebarToggleButton from '../../sidebar/components/SidebarToggleButton';
import { OperatorListTableCellProps } from '../types';
import OperatorListSidebarToggleButton from './OperatorListSidebarToggleButton';

class OperatorListTableCell extends React.PureComponent<OperatorListTableCellProps> {
    public render() {
        return (
            <div className="operator-list-table-cell">
                <div className="operator-list-table-cell-content">
                    <div className="operator-list-table-cell-content-left">
                        <p>{this.props.operator.name}</p>
                        <OperatorBasicInfoTable basicInfo={this.props.operator.basicInfo} />
                        <OperatorListSidebarToggleButton />
                    </div>
                    <div className="operator-list-table-cell-content-right">
                        <div className="operator-cg-miniature">
                            <img src={this.props.operator.miniatureUrl}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OperatorListTableCell;