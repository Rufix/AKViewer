import { connect } from 'react-redux';
import { ApplicationState } from '../../../store';
import * as SidebarActionCreators from '../../../store/sidebar/actionCreators';
import { SidebarComponent } from '../../shared/types';
import SidebarToggleButton from '../../sidebar/components/SidebarToggleButton';

class OperatorListSidebarToggleButton extends SidebarToggleButton {
    protected toggleSidebar(): void {
        this.props.toggleSidebar(SidebarComponent.OperatorList);
    }
}

export default connect(
    (state: ApplicationState) => state.sidebar,
    SidebarActionCreators.actionCreators
)(OperatorListSidebarToggleButton as any);