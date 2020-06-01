import { ApplicationState, AppThunkAction } from "..";
import { OperatorListService } from "../../components/operatorList/services/implementation/OperatorListService";
import { IOperatorListService } from "../../components/operatorList/services/IOperatorListService";
import { KnownAction } from "./actions";


const operatorListService: IOperatorListService = new OperatorListService();

function doGetOperatorsList(dispatch: (action: KnownAction) => void, getState: () => ApplicationState): void {
    const appState = getState();
    if (appState && appState.operatorList) {
        operatorListService.getOperators()
            .then(data => {
                dispatch({ type: 'RECEIVE_OPERATORS_LIST', operators: data });
            });

        dispatch({ type: 'REQUEST_OPERATORS_LIST' });
    }
}

export const actionCreators = {
    getOperatorsList: (): AppThunkAction<KnownAction> => (dispatch, getState) => {
        doGetOperatorsList(dispatch, getState);
    }
};