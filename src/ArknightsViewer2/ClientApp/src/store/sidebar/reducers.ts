import { Action, Reducer } from "redux";
import { KnownAction } from "./actions";
import { SidebarState } from "./state";
import { SidebarComponent } from "../../components/shared/types";


const unloadedState: SidebarState = {
    isOpen: false,
    content: SidebarComponent.Null
}

export const reducer: Reducer<SidebarState> = (state: SidebarState | undefined, incomingAction: Action): SidebarState => {
    if (state === undefined) {
        return unloadedState;
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'REQUEST_SIDEBAR_TOGGLE':
            return unloadedState;
        case 'RECEIVE_SIDEBAR_TOGGLE':
            return {
                isOpen: action.isOpen,
                content: action.content
            };
    }

    return state;
};