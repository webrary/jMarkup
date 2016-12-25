namespace jMarkup {
    type XWindow = jSelection.XWindow;
    type XSelection = jSelection.XSelection;

    export interface MarkupListener{
        onSelect:(selection:XSelection)=>void;
        onDeselect:()=>void;
    }

    export function scope(root: Node): XWindow {
        return XWindow.from(root);
    }

    export function listen(listener:MarkupListener) {

    }
}
