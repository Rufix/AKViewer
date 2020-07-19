import { ApplicationState, AppThunkAction } from "..";
import { KnownAction } from "./actions";
import { SidebarComponent } from "../../components/shared/types";

function doToggleSidebar(dispatch: (action: KnownAction) => void, getState: () => ApplicationState, content: SidebarComponent, props: any): void {
    const appState = getState();
    if (appState && appState.sidebar) {
        dispatch({ type: 'REQUEST_SIDEBAR_TOGGLE' });
        dispatch({ type: 'RECEIVE_SIDEBAR_TOGGLE', isOpen: !appState.sidebar.isOpen, content: content, props: props });
    }
}

export const actionCreators = {
    toggleSidebar: (content: SidebarComponent, props: any = {}): AppThunkAction<KnownAction> => (dispatch, getState) => {
        doToggleSidebar(dispatch, getState, content, props);
    }
};