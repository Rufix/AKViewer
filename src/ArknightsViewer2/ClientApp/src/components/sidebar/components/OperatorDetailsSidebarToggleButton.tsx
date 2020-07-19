import { connect } from 'react-redux';
import { ApplicationState } from '../../../store';
import * as SidebarActionCreators from '../../../store/sidebar/actionCreators';
import { SidebarState } from '../../../store/sidebar/state';
import { SidebarComponent } from '../../shared/types';
import React from 'react';
import { OperatorDetailsProps } from '../../operatorDetails/types';

type SidebarToggleButtonProps =
    SidebarState &
    OperatorDetailsProps &
    typeof SidebarActionCreators.actionCreators;

export class OperatorListSidebarToggleButton extends React.Component<SidebarToggleButtonProps> {
    public render() {
        return (
            <button onClick={this.toggleSidebar.bind(this)}>Open</button>
        );
    }

    private toggleSidebar(): void {
        this.props.toggleSidebar(SidebarComponent.OperatorDetails, { id: this.props.id });
    }
}

export default connect(
    (state: ApplicationState) => state.sidebar,
    SidebarActionCreators.actionCreators,
)(OperatorListSidebarToggleButton as any);