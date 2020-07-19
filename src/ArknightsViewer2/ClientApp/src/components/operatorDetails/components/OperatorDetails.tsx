import * as React from 'react';
import { OperatorDetailsProps } from '../types';

export default class OperatorDetails extends React.PureComponent<OperatorDetailsProps> {
    public render() {
        return (
            <div>
                {this.props.id}
            </div>
        );
    }
}