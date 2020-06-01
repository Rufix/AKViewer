import { OperatorListItem } from "../types";

export interface IOperatorListService {
    getOperators(): Promise<OperatorListItem[]>;
}