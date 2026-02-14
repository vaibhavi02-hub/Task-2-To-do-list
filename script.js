const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const themeToggle = document.getElementById("themeToggle");

let count = 0;

// Default Light Mode
document.body.classList.add("light");

// ==========================
// ADD TASK FUNCTION
// ==========================
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create List Item
    const li = document.createElement("li");
    li.textContent = taskText;

    // Mark as Complete
    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    // Create Remove Button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "X";

    removeBtn.addEventListener("click", function (e) {
        e.stopPropagation(); // Prevent complete toggle

        // Add fade-out animation
        li.classList.add("fade-out");

        setTimeout(() => {
            taskList.removeChild(li);
            count--;
            updateCounter();
        }, 300);
    });

    li.appendChild(removeBtn);
    taskList.appendChild(li);

    taskInput.value = "";

    count++;
    updateCounter();
}

// ==========================
// UPDATE COUNTER
// ==========================
function updateCounter() {
    taskCount.textContent = count;
}

// ==========================
// BUTTON CLICK EVENT
// ==========================
addTaskBtn.addEventListener("click", addTask);

// ==========================
// ENTER KEY SUPPORT
// ==========================
taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

// ==========================
// DARK / LIGHT TOGGLE
// ==========================
themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");

    if (document.body.classList.contains("dark")) {
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }
});
