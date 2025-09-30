const todoUrl = "http://localhost:5000/api/todos";
const token = localStorage.getItem("token");
if (!token) window.location.href = "login.html";

// Add Todo
document.getElementById("todoForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const task = document.getElementById("todoInput").value.trim();
  if (!task) return alert("Please enter a task");

  const res = await fetch(todoUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
    body: JSON.stringify({ task })
  });
  if (res.ok) { document.getElementById("todoInput").value = ""; loadTodos(); }
  else { const data = await res.json(); alert(data.message || "Error adding todo"); }
});

// Load Todos
async function loadTodos() {
  const res = await fetch(todoUrl, { headers: { "Authorization": `Bearer ${token}` } });
  const todos = await res.json();
  const list = document.getElementById("todoList");
  list.innerHTML = "";

  todos.forEach(todo => {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox"; checkbox.checked = todo.completed;
    checkbox.onchange = () => toggleTodo(todo._id);

    const span = document.createElement("span");
    span.textContent = todo.task;
    if (todo.completed) span.style.textDecoration = "line-through";

    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.onclick = () => deleteTodo(todo._id);

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

// Toggle Completed
async function toggleTodo(id) {
  await fetch(`${todoUrl}/toggle/${id}`, { method: "PUT", headers: { "Authorization": `Bearer ${token}` } });
  loadTodos();
}

// Delete Todo
async function deleteTodo(id) {
  await fetch(`${todoUrl}/${id}`, { method: "DELETE", headers: { "Authorization": `Bearer ${token}` } });
  loadTodos();
}

// Logout
document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("token");
  window.location.href = "login.html";
});

// Initial load
loadTodos();
