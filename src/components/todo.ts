class Todo {
    footerWrapp:HTMLElement;
    arrTasks : string[];
    constructor(footerWrapp:HTMLElement) {
        this.footerWrapp = footerWrapp;
        this.createTodo();
        this.listenerTodo();
        this.arrTasks = [];
    }

    private createTodo () {
        const inputTodo = document.createElement('input');
        const todoBtn = document.createElement('button');
        const todoBlock = document.createElement('div');
        const todo = document.createElement('div');
        const todoTasks = document.createElement('ul');
        todoTasks.classList.add('todo__tasks');
        inputTodo.setAttribute('type' , 'text');
        inputTodo.setAttribute('placeholder' , 'Enter your task');
        inputTodo.classList.add('todo__input')
        todo.classList.add('todo');
        todoBlock.classList.add('todo__block');
        todo.insertAdjacentElement('afterbegin' , todoBtn);
        todoBtn.classList.add('todo__btn');
        todoBtn.textContent = 'ToDo';
        todo.insertAdjacentElement('beforeend' , todoBlock);
        todoBlock.insertAdjacentElement('beforeend' , inputTodo);
        todoBlock.insertAdjacentElement('afterbegin' , todoTasks);
        this.footerWrapp.insertAdjacentElement('beforeend' , todo);
    }

    private listenerTodo () {
        const todoBtn = document.querySelector('.todo__btn') as HTMLElement;
        const todoBlock = document.querySelector('.todo__block') as HTMLElement;
        const inputTask = document.querySelector('.todo__input') as  HTMLInputElement;
        const todoTasks = document.querySelector('.todo__tasks') as HTMLElement;
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
        inputTask.addEventListener('change' , ()=>{
            this.arrTasks.push(inputTask.value);
            const task = this.createTask (this.arrTasks[this.arrTasks.length - 1]);
            todoTasks.insertAdjacentElement('beforeend' , task);
            inputTask.value = '';
        })
    }

    private createTask (data:string) : HTMLElement {
        const li = document.createElement('li');
        const task = document.createElement('span');
        const inputCompliteTask = document.createElement('input');
        inputCompliteTask.setAttribute('type' , 'checkbox');
        inputCompliteTask.classList.add('todo__complite');
        task.classList.add('todo__task');
        li.classList.add('todo__item');
        li.insertAdjacentElement('beforeend' , task);
        li.insertAdjacentElement('afterbegin' , inputCompliteTask);
        task.textContent = data;
        inputCompliteTask.addEventListener('click' , ()=>{
            if(inputCompliteTask.checked){
                inputCompliteTask.classList.add('tool')
                task.classList.add('task__through');
            }
            else{
                task.classList.remove('task__through');
                inputCompliteTask.classList.remove('tool')
            }
        })
        return li
    }
}

export default Todo

