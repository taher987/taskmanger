let totalCreated = 0;

function switchTab(el, tabId) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.getElementById(tabId + '-tab').classList.add('active');
    el.classList.add('active');
}

function addTask() {
    const title = document.getElementById('taskInput').value;
    const date = document.getElementById('taskDate').value;
    const prio = document.getElementById('taskPriority').value;

    if (!title || !date) { alert("Please fill Title and Date!"); return; }

    totalCreated++;
    const grid = document.getElementById('taskGrid');
    const row = document.createElement('div');
    row.className = 'task-item active-task';
    row.innerHTML = `
        <div style="display:flex; align-items:center; gap:10px;">
            <input type="checkbox" onchange="toggleComplete(this)">
            <span>${title}</span>
        </div>
        <span>${date}</span>
        <span class="tag ${prio}">${prio}</span>
        <button onclick="this.parentElement.remove(); updateCounts();" style="background:none; border:none; cursor:pointer;">🗑️</button>
    `;
    grid.prepend(row);
    document.getElementById('taskInput').value = "";
    updateCounts();
}

function toggleComplete(checkbox) {
    const row = checkbox.closest('.task-item');
    if (checkbox.checked) {
        row.classList.add('completed');
        row.classList.remove('active-task');
    } else {
        row.classList.remove('completed');
        row.classList.add('active-task');
    }
    updateCounts();
}

function updateCounts() {
    const active = document.querySelectorAll('.active-task').length;
    const done = document.querySelectorAll('.completed').length;
    document.getElementById('active-count').innerText = active;
    document.getElementById('done-count').innerText = done;
    document.getElementById('total-stat').innerText = totalCreated;
}

function toggleTheme() { document.body.classList.toggle('dark'); }