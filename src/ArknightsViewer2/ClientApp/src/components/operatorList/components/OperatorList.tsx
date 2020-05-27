import * as React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../../../store';
import * as OperatorListStore from '../../../store/operatorList/OperatorList';
import OperatorListTable from './OperatorListTable';
import { OperatorListItem } from '../types';
import { RouteComponentProps } from 'react-router';

import '../style.css'

type OperatorListProps =
    OperatorListStore.OperatorListState &
    typeof OperatorListStore.actionCreators &
    RouteComponentProps<{}>;

class OperatorList extends React.PureComponent<OperatorListProps> {
    public componentDidMount() {
        this.ensureDataFetched();
    }

    private ensureDataFetched() {
        this.props.getOperatorsList();
    }

    public render() {
        const operatorList: OperatorListItem[] = this.props.operators;
        return (
            <React.Fragment>
                <h1>Operators List</h1>

                <p>This is a simple Operators list for Arknights</p>

                <OperatorListTable operators={operatorList} />
            </React.Fragment>
        );
    }
}

export default connect(
    (state: ApplicationState) => state.operatorList,
    OperatorListStore.actionCreators
)(OperatorList as any);