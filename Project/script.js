if (!localStorage.getItem("currentUser") && window.location.pathname.includes("dashboard.html")) {
    window.location.href = "index.html";
}
let weeklyChart;
(function () {
    emailjs.init("v3_QcvLdiaWERuY_g");
})();

function login(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // simple demo validation
    if (email && password) {
        localStorage.setItem("currentUser", email); // store logged-in user
        window.location.href = "dashboard.html";
    } else {
        alert("Enter valid details");
    }
}


function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "index.html";
}

// TASK STORAGE
let currentUser = localStorage.getItem("currentUser");

let tasks = JSON.parse(localStorage.getItem(currentUser + "_tasks")) || [];
let chart;


// PAGE LOAD
window.onload = function () {

    if (document.getElementById("taskList")) {
        saveDailyProgress();
        renderTasks();
        updateProgress();
        updateStreak();
        loadWeeklyChart();
        autoSendWeeklyReport();

        let user = localStorage.getItem("currentUser");
        let welcome = document.getElementById("welcomeUser");

        if (welcome) {
            welcome.innerText = "Welcome, " + user;
        }

    }
}


// ADD TASK
function addTask() {

    let input = document.getElementById("taskInput");
    let category = document.getElementById("category").value;
    let priority = document.getElementById("priority").value;

    let text = input.value;

    if (text === "") return;

    tasks.push({
        title: text,
        completed: false,
        category: category,
        priority: priority
    });

    input.value = "";

    saveTasks();
}




// TOGGLE TASK
function toggleTask(index) {

    tasks[index].completed = !tasks[index].completed;

    saveTasks();

}


// SAVE TASKS
function saveTasks(){

    localStorage.setItem(currentUser + "_tasks", JSON.stringify(tasks));
    saveDailyProgress();   
    renderTasks();
    updateProgress();
    updateStreak();
    loadWeeklyChart();   
}


// RENDER TASKS
function renderTasks() {

    let list = document.getElementById("taskList");
    if (!list) return;

    if (tasks.length === 0) {
        list.innerHTML = "<p>No tasks yet 🚀</p>";
        return;
    }

    list.innerHTML = "";

    tasks.forEach((task, i) => {
        list.innerHTML += `
<div class="task-card ${task.priority}">
<div class="task-header">
<span class="${task.completed ? 'completed' : ''}">
${task.title} <small>(${task.category})</small>
</span>
<div>
<input type="checkbox" ${task.completed ? "checked" : ""} onclick="toggleTask(${i})">
<button onclick="deleteTask(${i})">Delete</button>
</div>
</div>
</div>
`;
    });
}


// PROGRESS BAR
function updateProgress() {

    let done = tasks.filter(t => t.completed).length;

    let percent = tasks.length ? (done / tasks.length) * 100 : 0;

    let bar = document.getElementById("progressBar");

    if (bar) {
        bar.style.width = percent + "%";
    }

}


// LOAD CHART


// SAVE DAILY PROGRESS
function saveDailyProgress(){

    let history = JSON.parse(localStorage.getItem(currentUser + "_weeklyProgress")) || [];

    let done = tasks.filter(t => t.completed).length;
    let total = tasks.length;

    let today = new Date();
    today.setHours(0,0,0,0);

    let todayStr = today.toDateString();

    let found = false;

    for(let i = 0; i < history.length; i++){
        let d = new Date(history[i].date);
        d.setHours(0,0,0,0);

        if(d.toDateString() === todayStr){
            history[i].completed = done;
            history[i].total = total;
            found = true;
            break;
        }
    }

    if(!found){
        history.push({
            date: todayStr,
            completed: done,
            total: total
        });
    }

    localStorage.setItem(currentUser + "_weeklyProgress", JSON.stringify(history));
}


// AUTO SEND SUNDAY
function autoSendWeeklyReport(){

    let today = new Date();
    let day = today.getDay(); // 0 = Sunday

    let lastSent = localStorage.getItem(currentUser + "_lastReportDate");

    let todayDate = today.toDateString();

    // ✅ Send only if Sunday AND not already sent today
    if(day === 0 && lastSent !== todayDate){

        sendWeeklyReport();

        localStorage.setItem(currentUser + "_lastReportDate", todayDate);
    }
}
function deleteTask(index) {

    tasks.splice(index, 1);

    saveTasks();

}
function updateStreak() {

    let history = JSON.parse(localStorage.getItem(currentUser + "_weeklyProgress")) || [];

    if (history.length === 0) return;

    let streak = 0;

    // Check from last day backwards
    for (let i = history.length - 1; i >= 0; i--) {

        let day = history[i];

        if (day.completed > 0) {
            streak++;
        } else {
            break;
        }
    }

    localStorage.setItem(currentUser + "_streak", streak);

    let streakBox = document.getElementById("streak");

    if (streakBox) {
        streakBox.innerText = "🔥 Streak: " + streak + " days";
    }
}

function loadWeeklyChart(){

    let canvas = document.getElementById("weeklyChart");
    if(!canvas) return;

    let ctx = canvas.getContext("2d");

    let history = JSON.parse(localStorage.getItem(currentUser + "_weeklyProgress")) || [];

    // ✅ Today
    let today = new Date();
    today.setHours(0,0,0,0);

    let todayIndex = today.getDay(); // 0 = Sunday

    // ✅ Get current week's Sunday
    let firstDay = new Date(today);
    firstDay.setDate(today.getDate() - today.getDay());

    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let data = [0,0,0,0,0,0,0];

    // ✅ Fill from history (for past days)
    history.forEach(h => {

        let d = new Date(h.date);
        d.setHours(0,0,0,0);

        let diff = Math.floor((d - firstDay) / (1000 * 60 * 60 * 24));

        if(diff >= 0 && diff < 7){
            data[diff] = h.completed;
        }

    });

    // 🔥 KEY FIX: override TODAY with LIVE tasks
    let done = tasks.filter(t => t.completed).length;
    data[todayIndex] = done;

    // destroy old chart
    if(weeklyChart){
        weeklyChart.destroy();
    }

    weeklyChart = new Chart(ctx,{

        type:'bar',

        data:{
            labels: days,
            datasets:[{
                label:"Tasks Completed",
                data: data,
                backgroundColor:'#e50914'
            }]
        },

        options:{
            responsive:true,
            maintainAspectRatio:false,

            plugins:{
                legend:{
                    labels:{
                        color:'white',
                        font:{ size:16, weight:'bold' }
                    }
                }
            },

            scales:{
                x:{
                    ticks:{
                        color:'white',
                        font:{ size:14, weight:'bold' }
                    },
                    grid:{ color:'#333' }
                },
                y:{
                    ticks:{
                        color:'white',
                        font:{ size:14 }
                    },
                    beginAtZero:true,
                    grid:{ color:'#333' }
                }
            }
        }
    });
}