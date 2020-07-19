import { ApplicationState, AppThunkAction } from "..";
import { KnownAction } from "./actions";

function doToggleSidebar(dispatch: (action: KnownAction) => void, getState: () => ApplicationState): void {
    const appState = getState();
    if (appState && appState.sidebar) {
        dispatch({ type: 'REQUEST_SIDEBAR_TOGGLE' });
        dispatch({ type: 'RECEIVE_SIDEBAR_TOGGLE', isOpen: !appState.sidebar.isOpen });
    }
}

export const actionCreators = {
    toggleSidebar: (): AppThunkAction<KnownAction> => (dispatch, getState) => {
        doToggleSidebar(dispatch, getState);
    }
};