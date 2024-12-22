const taskInput = document.querySelector('#taskInput');
const taskList = document.querySelector('#taskList');
const addBtn = document.querySelector('#add');
const removeBtn = document.querySelector('#remove');

addBtn.addEventListener('click', function () {
       const task = taskInput.value.trim();
       if (task) {
              const li = document.createElement('li');
              li.textContent = task;
              taskList.appendChild(li);
              taskInput.value = "";
       }
       else {
              alert("please enter a task!");
       }
});
removeBtn.addEventListener('click', function () {
       const lastTask = taskList.lastElementChild;
       if (lastTask) {
              taskList.removeChild(lastTask);
       }
       else {
              alert('No task available');
       }
})

