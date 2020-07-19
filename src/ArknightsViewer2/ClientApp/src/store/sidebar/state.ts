import { SidebarComponent } from "../../components/shared/types";

export interface SidebarState {
    isOpen: boolean;
    content: SidebarComponent;
}