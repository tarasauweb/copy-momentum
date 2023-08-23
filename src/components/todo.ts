class Todo {
    footerWrapp:HTMLElement;
    constructor(footerWrapp:HTMLElement) {
        this.footerWrapp = footerWrapp;
        this.createTodo();
        this.listenerTodo();
    }

    private createTodo () {
        const todo = document.createElement('div');
        todo.classList.add('todo');
        const todoBtn = document.createElement('button');
        const todoBlock = document.createElement('div');
        todoBlock.classList.add('todo__block');
        todo.insertAdjacentElement('afterbegin' , todoBtn);
        todoBtn.classList.add('todo__btn');
        todoBtn.textContent = 'ToDo';
        todo.insertAdjacentElement('beforeend' , todoBlock);
        this.footerWrapp.insertAdjacentElement('beforeend' , todo);
    }

    private listenerTodo () {
        const todoBtn = document.querySelector('.todo__btn') as HTMLElement;
        const todoBlock = document.querySelector('.todo__block') as HTMLElement;
        let todoOpen : boolean = false;
        todoBtn.addEventListener('click' , ()=>{
            if(todoOpen) {
                todoOpen = false;
                todoBlock.style.display = 'none';
            }
            else{
                todoOpen = true;
                todoBlock.style.display = 'block';
            }
            
        })
    }
}

export default Todo