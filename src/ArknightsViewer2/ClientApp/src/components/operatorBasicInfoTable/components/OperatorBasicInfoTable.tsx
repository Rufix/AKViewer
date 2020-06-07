import { OperatorBasicInfoTableProps } from '../types';
import React from 'react';

import '../style.css'

class OperatorBasicInfoTable extends React.PureComponent<OperatorBasicInfoTableProps> {
    public render() {
        return (
            <table className="operator-basic-info-table">
                <tbody>
                    <tr>
                        <th>Rarity</th>
                        <th>Type</th>
                        <th>Target</th>
                        <th>Damage</th>
                    </tr>
                    <tr>
                        <td>{this.props.basicInfo.rarity}*</td>
                        <td>{this.props.basicInfo.type}</td>
                        <td>{this.props.basicInfo.targets}</td>
                        <td>{this.props.basicInfo.damageType}</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default OperatorBasicInfoTable;