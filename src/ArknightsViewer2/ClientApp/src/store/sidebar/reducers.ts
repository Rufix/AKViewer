import { Action, Reducer } from "redux";
import { KnownAction } from "./actions";
import { SidebarState } from "./state";


const unloadedState: SidebarState = {
    isOpen: false
}

export const reducer: Reducer<SidebarState> = (state: SidebarState | undefined, incomingAction: Action): SidebarState => {
    if (state === undefined) {
        return unloadedState;
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'REQUEST_SIDEBAR_TOGGLE':
            return {
                isOpen: state.isOpen
            };
        case 'RECEIVE_SIDEBAR_TOGGLE':
            return {
                isOpen: action.isOpen
            };
    }

    return state;
};