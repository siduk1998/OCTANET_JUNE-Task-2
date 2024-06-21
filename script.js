// script.js
document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('add-task-button');
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', () => {
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            const listItem = document.createElement('li');

            const checkBox = document.createElement('input');
            checkBox.type = 'checkbox';
            checkBox.classList.add('task-checkbox');
            checkBox.addEventListener('change', () => {
                listItem.classList.toggle('completed');
            });

            const taskSpan = document.createElement('span');
            taskSpan.classList.add('task-text');
            taskSpan.textContent = taskText;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = '✖';
            deleteButton.classList.add('delete-btn');
            deleteButton.addEventListener('click', () => {
                taskList.removeChild(listItem);
            });

            listItem.appendChild(checkBox);
            listItem.appendChild(taskSpan);
            listItem.appendChild(deleteButton);
            taskList.appendChild(listItem);

            newTaskInput.value = '';
        }
    });

    newTaskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskButton.click();
        }
    });
});
