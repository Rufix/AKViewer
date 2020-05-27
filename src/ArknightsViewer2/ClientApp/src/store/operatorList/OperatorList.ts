import { OperatorListItem } from "../../components/operatorList/types";
import { IOperatorListService } from "../../components/operatorList/services/IOperatorListService";
import { OperatorListService } from "../../components/operatorList/services/implementation/OperatorListService";
import { ApplicationState, AppThunkAction } from "..";
import { Action, Reducer } from "redux";

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface OperatorListState {
    operators: OperatorListItem[];
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

interface RequestOperatorsAction {
    type: 'REQUEST_OPERATORS_LIST';
}

interface ReceiveOperatorsAction {
    type: 'RECEIVE_OPERATORS_LIST';
    operators: OperatorListItem[];
}

type KnownAction = RequestOperatorsAction | ReceiveOperatorsAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

const operatorListService: IOperatorListService = new OperatorListService();

function doGetOperatorsList(dispatch: (action: KnownAction) => void, getState: () => ApplicationState): void {
    const appState = getState();
    if (appState && appState.operatorsList) {
        dispatch({ type: 'REQUEST_OPERATORS_LIST' });
        dispatch({ type: 'RECEIVE_OPERATORS_LIST', operators: operatorListService.getOperators() });
    }
}

export const actionCreators = {
    getOperatorsList: (): AppThunkAction<KnownAction> => (dispatch, getState) => {
        doGetOperatorsList(dispatch, getState);
    }
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

const unloadedState: OperatorListState = {
    operators: []
}

export const reducer: Reducer<OperatorListState> = (state: OperatorListState | undefined, incomingAction: Action): OperatorListState => {
    if (state === undefined) {
        return unloadedState;
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'REQUEST_OPERATORS_LIST':
            return {
                operators: []
            };
        case 'RECEIVE_OPERATORS_LIST':
            return {
                operators: action.operators
            };
    }

    return state;
};
