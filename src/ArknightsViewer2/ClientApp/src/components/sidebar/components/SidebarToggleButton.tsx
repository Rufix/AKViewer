import * as React from 'react';
import { SidebarState } from '../../../store/sidebar/state';
import * as SidebarActionCreators from '../../../store/sidebar/actionCreators';

type SidebarToggleButtonProps =
    SidebarState &
    typeof SidebarActionCreators.actionCreators;

abstract class SidebarToggleButton extends React.PureComponent<SidebarToggleButtonProps> {
    public render() {
        return (
            <button onClick={this.toggleSidebar.bind(this)}>Open</button>
        );
    }

    protected abstract toggleSidebar(): void;
}

export default SidebarToggleButton;