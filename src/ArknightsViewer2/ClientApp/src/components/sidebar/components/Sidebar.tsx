import * as React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../../../store';
import * as SidebarActionCreators from '../../../store/sidebar/actionCreators';
import { SidebarState } from '../../../store/sidebar/state';
import '../style.css'
import { SidebarComponent } from '../../shared/types';
import OperatorDetails from '../../operatorDetails/components/OperatorDetails';

type SidebarProps =
    SidebarState &
    typeof SidebarActionCreators.actionCreators;

class Sidebar extends React.PureComponent<SidebarProps> {
    public render() {
        return this.props.isOpen
            ? this.renderSidebar()
            : null;
    }

    private renderSidebar(): JSX.Element {
        return (
            <div className="sidebar-modal" onClick={() => this.props.toggleSidebar(this.props.content)}>
                <div className="sidebar">
                    {this.chooseContent()}
                </div>
            </div>
        );
    }

    private chooseContent(): JSX.Element | null {
        switch (this.props.content) {
            case SidebarComponent.OperatorDetails:
                return (<OperatorDetails {...this.props.props} />);
            default: 
                return (null);
        }
    }
}

export default connect(
    (state: ApplicationState) => state.sidebar,
    SidebarActionCreators.actionCreators
)(Sidebar as any);
