import { SidebarComponent } from "../../components/shared/types";

interface RequestSidebarAction {
    type: 'REQUEST_SIDEBAR_TOGGLE';
}

interface ReceiveSidebarToggle {
    type: 'RECEIVE_SIDEBAR_TOGGLE';
    isOpen: boolean;
    content: SidebarComponent;
    props: any;
}

export type KnownAction = RequestSidebarAction | ReceiveSidebarToggle;