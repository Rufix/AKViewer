import * as React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../../../store';
import * as SidebarActionCreators from '../../../store/sidebar/actionCreators';
import { SidebarState } from '../../../store/sidebar/state';

type SidebarProps =
    SidebarState &
    typeof SidebarActionCreators.actionCreators;

class SidebarToggleButton extends React.PureComponent<SidebarProps> {
    public render() {
        return (
            <button onClick={this.props.toggleSidebar}>Open</button>
        );
    }
}

export default connect(
    (state: ApplicationState) => state.sidebar,
    SidebarActionCreators.actionCreators
)(SidebarToggleButton as any);