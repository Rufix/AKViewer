import { IOperatorListService } from '../IOperatorListService';
import { OperatorListItem } from '../../types';

export class OperatorListService implements IOperatorListService {
    public getOperators(): Promise<OperatorListItem[]> {
        return fetch('operatorlist/get')
            .then(response => response.json() as Promise<OperatorListItem[]>);
    }
}