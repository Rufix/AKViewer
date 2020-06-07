import { OperatorBasicInfo } from "../shared/types";

export type OperatorListItem = {
    name: string;
    miniatureUrl: string;
    basicInfo: OperatorBasicInfo;
};

export type OperatorListTableProps = {
    operators: OperatorListItem[];
};

export type OperatorListTableCellProps = {
    operator: OperatorListItem;
};