import {XWindow, XSelection} from "jSelection";

export interface MarkupListener {
    onSelect: (selection: XSelection)=>void;
    onDeselect: ()=>void;
}

export function listen(root: Element, listener: MarkupListener) {
    return XWindow.from(root);
}
