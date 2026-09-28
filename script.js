console.log("My To-Do List");

console.log("My To-Do List");

let task = "Study JavaScript";

console.log("Task:", task);

console.log("My To-Do List");

let tasks = [
    "Study JavaScript",
    "Practice coding",
    "Read notes"
];

console.log("Tasks:", tasks);

console.log("My To-Do List");

let tasks = [
    "Study JavaScript",
    "Practice coding",
    "Read notes"
];

for (let i = 0; i < tasks.length; i++) {
    console.log((i + 1) + ". " + tasks[i]);
}

console.log("My To-Do List");

let tasks = [
    "Study JavaScript",
    "Practice coding",
    "Read notes"
];

let completed = [true, false, false];

for (let i = 0; i < tasks.length; i++) {
    if (completed[i]) {
        console.log((i + 1) + ". " + tasks[i] + " - Completed");
    } else {
        console.log((i + 1) + ". " + tasks[i] + " - Not Completed");
    }
}