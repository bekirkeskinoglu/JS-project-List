document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task');
    const taskList = document.getElementById('list');
    const toastSuccess = document.querySelector('.toast.success');
    const toastError = document.querySelector('.toast.error');

    function showToast(toast) {
        $(toast).toast('show');
    }

    function newElement() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            showToast(toastError);
            return;
        }

        const li = document.createElement('li');
        li.innerHTML = `
            ${taskText}
            <span class="close" onclick="removeElement(this)">&#10005;</span>
        `;

        taskList.appendChild(li);
        taskInput.value = '';
        showToast(toastSuccess);
    }

    window.newElement = newElement;

    window.removeElement = function(element) {
        const li = element.parentNode;
        taskList.removeChild(li);
    };
});