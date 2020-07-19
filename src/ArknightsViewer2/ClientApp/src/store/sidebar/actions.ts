interface RequestSidebarAction {
    type: 'REQUEST_SIDEBAR_TOGGLE';
}

interface ReceiveSidebarToggle {
    type: 'RECEIVE_SIDEBAR_TOGGLE';
    isOpen: boolean;
}

export type KnownAction = RequestSidebarAction | ReceiveSidebarToggle;