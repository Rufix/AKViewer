import { OperatorListItem } from "../../components/operatorList/types";

interface RequestOperatorsAction {
    type: 'REQUEST_OPERATORS_LIST';
}

interface ReceiveOperatorsAction {
    type: 'RECEIVE_OPERATORS_LIST';
    operators: OperatorListItem[];
}

export type KnownAction = RequestOperatorsAction | ReceiveOperatorsAction;