class Todo {
    footerWrapp:HTMLElement;
    arrTasks : Array<HTMLElement>;
    constructor(footerWrapp:HTMLElement) {
        this.arrTasks = [];
        this.footerWrapp = footerWrapp;
        this.createTodo();
        this.listenerTodo();
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
            const task = this.createTask (inputTask.value);
            this.arrTasks.unshift(task);
            this.renderTasks(todoTasks,this.arrTasks);
            inputTask.value = '';
        })
        todoBlock.addEventListener('click' , (e)=>{
            const elem = e.target as HTMLElement;
            if(elem.textContent === 'del'){
                const parentElem = elem.parentNode as HTMLElement;
                const indexElem = this.arrTasks.indexOf(parentElem);
                indexElem === 0 ? this.arrTasks.splice(indexElem,1) : this.arrTasks.splice(indexElem,indexElem)
                this.renderTasks(todoTasks,this.arrTasks);
            }
            if(elem.textContent === 'edit') {
                const inputEdit = document.createElement('input') as HTMLInputElement;
                const parentElem = (elem.parentNode as HTMLElement);
                const childElemForChangeTask = parentElem.childNodes[1] as HTMLElement;
                const childElemInput = parentElem.childNodes[0] as HTMLElement;
                const taskTextBeforeChange = childElemForChangeTask.textContent as string;
                childElemForChangeTask.style.display = 'none';
                inputEdit.setAttribute('type' , 'text');
                inputEdit.setAttribute('value' , taskTextBeforeChange);
                childElemInput.insertAdjacentElement('afterend' , inputEdit);
                inputEdit.classList.add('todo__edit_input');
                inputEdit.focus();
                inputEdit.selectionStart = inputEdit.value.length
                inputEdit.addEventListener('change' , ()=>{
                    this.arrTasks.find(elem=>{
                        if(elem.childNodes[2].textContent === taskTextBeforeChange){
                            elem.childNodes[2].textContent = inputEdit.value
                        }
                    })
                    childElemForChangeTask.style.display = 'block';
                    this.renderTasks(todoTasks,this.arrTasks);
                    inputEdit.remove();
                })
            }
        })
    }

    private renderTasks (todoTasks:HTMLElement, array:Array<HTMLElement>):HTMLElement {
        todoTasks.innerHTML = '';
        for(let i = 0 ; i < array.length ; i++) {
            todoTasks.insertAdjacentElement('afterbegin' , array[i])
        }
        return todoTasks;
    }

    private createTask (data:string) : HTMLElement {
        const btnDeleteTask = document.createElement('button');
        const btnEditTask = document.createElement('button');
        const li = document.createElement('li');
        const task = document.createElement('span');
        const inputCompliteTask = document.createElement('input');
        btnDeleteTask.classList.add('task__delete');
        btnEditTask.classList.add('task__edit');
        btnDeleteTask.textContent = 'del';
        btnEditTask.textContent = 'edit';
        inputCompliteTask.setAttribute('type' , 'checkbox');
        inputCompliteTask.classList.add('todo__complite');
        task.classList.add('todo__task');
        li.classList.add('todo__item');
        li.insertAdjacentElement('beforeend' , task);
        li.insertAdjacentElement('beforeend' , btnDeleteTask);
        li.insertAdjacentElement('beforeend' , btnEditTask);
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

