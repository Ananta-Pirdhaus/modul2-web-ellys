document.addEventListener("DOMContentLoaded", function () {
  const taskList = document.getElementById("taskList");
  const newTaskInput = document.getElementById("newTask");
  const addTaskButton = document.getElementById("addTask");

  // Fungsi untuk membuat elemen tugas
  function createTaskElement(task) {
    const li = document.createElement("li");
    li.innerHTML = `
            <span>${task}</span>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        `;
    taskList.appendChild(li);
  }

  // Fungsi untuk menambahkan tugas
  function addTask() {
    const task = newTaskInput.value.trim();
    if (task !== "") {
      createTaskElement(task);
      newTaskInput.value = "";
    }
  }

  // Fungsi untuk menghapus tugas
  function deleteTask(event) {
    if (event.target.classList.contains("delete-btn")) {
      event.target.parentElement.remove();
    }
  }

  // Fungsi untuk mengedit tugas
  function editTask(event) {
    if (event.target.classList.contains("edit-btn")) {
      const taskText =
        event.target.parentElement.querySelector("span").textContent;
      const editedTask = prompt("Edit task:", taskText);
      if (editedTask !== null) {
        event.target.parentElement.querySelector("span").textContent =
          editedTask;
      }
    }
  }

  // Mendengarkan klik pada tombol "Add Task"
  addTaskButton.addEventListener("click", addTask);

  // Mendengarkan klik pada daftar tugas untuk menghapus
  taskList.addEventListener("click", deleteTask);

  // Mendengarkan klik pada daftar tugas untuk mengedit
  taskList.addEventListener("click", editTask);
});
