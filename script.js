document.addEventListener('DOMContentLoaded', function() {
   
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const subjectError = document.getElementById('subjectError');
    const messageError = document.getElementById('messageError');
    const formSuccess = document.getElementById('formSuccess');

    function showError(element, message) {
        element.textContent = message;
        element.classList.add('show');
        element.style.height = element.scrollHeight + 'px';
    }

    function hideError(element) {
        element.textContent = '';
        element.classList.remove('show');
        element.style.height = '0';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        hideError(nameError);
        hideError(emailError);
        hideError(subjectError);
        hideError(messageError);
        formSuccess.textContent = '';

        let isValid = true;

        if (nameInput.value.trim() === '') {
            showError(nameError, 'Name is required.');
            isValid = false;
        }

        if (emailInput.value.trim() === '') {
            showError(emailError, 'Email is required.');
            isValid = false;
        } else if (!emailRegex.test(emailInput.value.trim())) {
            showError(emailError, 'Please enter a valid email address.');
            isValid = false;
        }

        if (subjectInput.value.trim() === '') {
            showError(subjectError, 'Subject is required.');
            isValid = false;
        }

        if (messageInput.value.trim() === '') {
            showError(messageError, 'Message is required.');
            isValid = false;
        }

        if (isValid) {
            formSuccess.textContent = 'Form submitted successfully!';
            contactForm.reset();
            console.log('Form data:', {
                name: nameInput.value.trim(),
                email: emailInput.value.trim(),
                subject: subjectInput.value.trim(),
                message: messageInput.value.trim()
            });
        }
    });

    
    nameInput.addEventListener('input', () => { if (nameInput.value.trim() !== '') hideError(nameError); });
    emailInput.addEventListener('input', () => {
        if (emailInput.value.trim() !== '' && emailRegex.test(emailInput.value.trim())) hideError(emailError);
    });
    subjectInput.addEventListener('input', () => { if (subjectInput.value.trim() !== '') hideError(subjectError); });
    messageInput.addEventListener('input', () => { if (messageInput.value.trim() !== '') hideError(messageError); });


    const todoInput = document.getElementById('todoInput');
    const addTodoBtn = document.getElementById('addTodoBtn');
    const todoList = document.getElementById('todoList');
    const todoMessage = document.getElementById('todoMessage');

    function updateTodoMessage() {
        if (todoList.children.length === 0) {
            todoMessage.textContent = "No tasks yet! Add one above.";
        } else {
            todoMessage.textContent = "";
        }
    }

    function addTask() {
        const taskText = todoInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        const listItem = document.createElement('li');

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        taskSpan.addEventListener('click', function() {
            listItem.classList.toggle('completed');
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', function() {
            todoList.removeChild(listItem);
            updateTodoMessage();
        });

        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteBtn);

        todoList.appendChild(listItem);

        todoInput.value = '';
        todoInput.focus();

        updateTodoMessage();
    }

    addTodoBtn.addEventListener('click', addTask);

    todoInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    updateTodoMessage();
});