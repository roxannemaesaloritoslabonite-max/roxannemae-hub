
const tasks = [];
let nextId = 1;

// Add a new task
function addTask(text, priority = "Normal") {
    if (!text.trim()) {
        console.log("Please enter a task.");
        return;
    }

    const task = {
        id: nextId++,
        text: text,
        priority: priority,
        completed: false
    };

    tasks.push(task);
    console.log(`Task added: ${text}`);
}

// Complete a task
function completeTask(id) {
    const task = tasks.find(task => task.id === id);

    if (task) {
        task.completed = true;
        console.log(`Task completed: ${task.text}`);
    } else {
        console.log("Task not found.");
    }
}

// Delete a task
function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);

    if (index !== -1) {
        console.log(`Task deleted: ${tasks[index].text}`);
        tasks.splice(index, 1);
    } else {
        console.log("Task not found.");
    }
}

// Show all tasks
function showTasks() {
    if (tasks.length === 0) {
        console.log("No tasks available.");
        return;
    }

    console.log("\n--- TO-DO LIST ---");

    tasks.forEach(task => {
        const status = task.completed ? "✓" : " ";
        console.log(
            `${task.id}. [${status}] ${task.text} - Priority: ${task.priority}`
        );
    });
}

// Search for a task
function searchTask(keyword) {
    const results = tasks.filter(task =>
        task.text.toLowerCase().includes(keyword.toLowerCase())
    );

    console.log(`\n--- SEARCH RESULTS: "${keyword}" ---`);

    if (results.length === 0) {
        console.log("No matching tasks found.");
        return;
    }

    results.forEach(task => {
        const status = task.completed ? "✓" : " ";
        console.log(
            `${task.id}. [${status}] ${task.text} - Priority: ${task.priority}`
        );
    });
}

// Clear all completed tasks
function clearCompleted() {
    const remainingTasks = tasks.filter(task => !task.completed);

    tasks.length = 0;
    tasks.push(...remainingTasks);

    console.log("Completed tasks have been cleared.");
}

// Show task summary
function showSummary() {
    const completed = tasks.filter(task => task.completed).length;
    const pending = tasks.filter(task => !task.completed).length;

    console.log("\n--- TASK SUMMARY ---");
    console.log(`Total tasks: ${tasks.length}`);
    console.log(`Completed tasks: ${completed}`);
    console.log(`Pending tasks: ${pending}`);
}


// ====================
// EXAMPLE USAGE
// ====================

addTask("Study JavaScript", "High");
addTask("Finish homework", "High");
addTask("Go for a walk", "Low");
addTask("Read my notes", "Normal");

showTasks();

completeTask(1);

deleteTask(2);

searchTask("JavaScript");

showSummary();

clearCompleted();

showTasks();

showSummary();

