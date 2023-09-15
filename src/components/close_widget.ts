class CloseWidget {
    widgets:HTMLElement[];
    menu:HTMLElement;
    constructor(widgets : Array<HTMLElement> , menu : HTMLElement) {
        this.widgets = widgets;
        this.menu = menu;
        this.closeWidget();
    }
    private closeWidget () {
        this.menu.addEventListener('click' , (e)=>{
            const widgetName = (e.target as HTMLElement).textContent;
            (e.target as HTMLElement).classList.toggle('task__through')
            this.widgets.forEach(widget=>{
                widget.classList[0] === widgetName?.trim() ? widget.classList.toggle('close-widget') : false;
            })
        })
    }
}

export default CloseWidget