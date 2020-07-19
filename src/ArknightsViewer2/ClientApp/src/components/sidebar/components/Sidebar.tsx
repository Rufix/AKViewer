import * as React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../../../store';
import * as SidebarActionCreators from '../../../store/sidebar/actionCreators';
import { SidebarState } from '../../../store/sidebar/state';
import '../style.css'

type SidebarProps =
    SidebarState &
    typeof SidebarActionCreators.actionCreators;

class Sidebar extends React.PureComponent<SidebarProps> {
    public render() {
        return this.props.isOpen
            ? this.renderSidebar()
            : null;
    }

    private renderSidebar() {
        return (
            <div className="sidebar-modal" onClick={this.props.toggleSidebar}>
                <div className="sidebar">
                </div>
            </div>
        );
    }
}

export default connect(
    (state: ApplicationState) => state.sidebar,
    SidebarActionCreators.actionCreators
)(Sidebar as any);
