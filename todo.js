    const tasks = [];
let nextId = 1;

function addTask(text) {
    if (!text.trim()) {
        console.log("Please enter a task.");
        return;
    }

    const task = {
        id: nextId++,
        text: text,
        completed: false
    };

    tasks.push(task);
    console.log(`Task added: ${text}`);
}

function completeTask(id) {
    const task = tasks.find(task => task.id === id);

    if (task) {
        task.completed = true;
        console.log(`Task completed: ${task.text}`);
    } else {
        console.log("Task not found.");
    }
}

function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);

    if (index !== -1) {
        console.log(`Task deleted: ${tasks[index].text}`);
        tasks.splice(index, 1);
    } else {
        console.log("Task not found.");
    }
}

function showTasks() {
    if (tasks.length === 0) {
        console.log("No tasks available.");
        return;
    }

    console.log("\n--- TO-DO LIST ---");

    tasks.forEach(task => {
        const status = task.completed ? "✓" : " ";
        console.log(`${task.id}. [${status}] ${task.text}`);
    });
}

// Example usage
addTask("Study JavaScript");
addTask("Finish homework");
addTask("Go for a walk");

showTasks();

completeTask(1);

deleteTask(2);

showTasks();
