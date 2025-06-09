let tasks = [];

function renderTasks() {
  const tasksDiv = document.getElementById('tasks');
  tasksDiv.innerHTML = '';
  tasks.forEach((task, index) => {
    tasksDiv.innerHTML += `
      <div class="task ${task.completed ? 'completed' : ''}">
        <strong>${task.title}</strong><br>
        ${task.description}<br>
        <button class="toggle" onclick="toggleTask(${index})">
          ${task.completed ? 'Undo' : 'Complete'}
        </button>
        <button class="delete" onclick="deleteTask(${index})">Delete</button>
      </div>`;
  });
}

function addTask() {
  const title = document.getElementById('title').value;
  const description = document.getElementById('desc').value;
  if (title.trim() && description.trim()) {
    tasks.push({ title, description, completed: false });
    document.getElementById('title').value = '';
    document.getElementById('desc').value = '';
    renderTasks();
  }
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

renderTasks();
