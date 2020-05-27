import { IOperatorListService } from '../IOperatorListService';
import { OperatorListItem } from '../../types';

export class OperatorListService implements IOperatorListService {
    getOperators(): OperatorListItem[] {
        return [
            {
                name: 'Amiya'
            },
            {
                name: 'FEater'
            },
            {
                name: 'Gavial'
            },
            {
                name: 'Gitano'
            },
            {
                name: 'Glaucus'
            },
            {
                name: 'Grani'
            },
            {
                name: 'Haze'
            },
            {
                name: 'Hoshiguma'
            },
            {
                name: 'Ifrit'
            },
            {
                name: 'Lappland'
            },
            {
                name: 'Liskarm'
            },
            {
                name: 'Meteor'
            },
            {
                name: 'Nearl'
            },
            {
                name: 'Nightingale'
            },
            {
                name: 'Platinum'
            },
            {
                name: 'Plume'
            },
            {
                name: 'Project Red'
            },
            {
                name: 'Pramanix'
            },
            {
                name: 'Ptilopsis'
            },
            {
                name: 'Savage'
            },
            {
                name: 'Shirayuki'
            },
            {
                name: 'Silence'
            },
            {
                name: 'Skadi'
            },
            {
                name: 'Specter'
            },
            {
                name: 'Texas'
            },
            {
                name: 'Zima'
            },
        ];
    }
}