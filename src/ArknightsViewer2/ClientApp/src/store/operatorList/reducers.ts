import { Action, Reducer } from "redux";
import { KnownAction } from "./actions";
import { OperatorListState } from "./state";


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