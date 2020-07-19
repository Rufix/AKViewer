import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../../../store';
import * as OperatorListActionCreators from '../../../store/operatorList/actionCreators';
import { OperatorListState } from '../../../store/operatorList/state';
import '../style.css';
import { OperatorListItem } from '../types';
import OperatorListTable from './OperatorListTable';

type OperatorListProps =
    OperatorListState &
    typeof OperatorListActionCreators.actionCreators &
    RouteComponentProps<{}>;

class OperatorList extends React.PureComponent<OperatorListProps> {
    public componentDidMount(): void {
        this.ensureDataFetched();
    }

    private ensureDataFetched(): void {
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
    OperatorListActionCreators.actionCreators
)(OperatorList as any);