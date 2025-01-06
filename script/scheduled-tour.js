const scheduledSteps = [
    {
        title: "Welcome to the Scheduled Task Tour👋",
        content: "Displays a list of all configured scheduled tasks, including their names, execution cycles, content, mission details, last execution time, status, and actions that can be performed on them (e.g., edit, delete).",
        target: "body"
    },
    {
        title: "Scheduled Tab",
        content: "This tab is for Sheduling the tasks",
        target: "#scheduled"
    },
    {
        title: "Restart Task",
        content: "Click on this to restart the task",
        target: "#restart-btn"
    },
    {
        title: "Task Manager",
        content: "Click on this to Task Manager",
        target: "#taskmanager-btn"
    },
    {
        title: "Task Manager",
        content: "View the Tasks here.",
        target: "#task-manager",
        beforeEnter: () => {
            document.getElementById('task-manager-modal').classList.remove('hidden')
        },
        afterLeave: () => {
            document.getElementById('task-manager-modal').classList.add('hidden')
        }

    },
    {
        title: "Add New Task",
        content: "This allows you to create a new task. Clicking this button will open a form to scheduled the task.",
        target: "#add-btn",
       
    },
    {
        title: "Add Task Form",
        content: "Use this form to scheduled the task",
        target: "#add-modal",
        beforeEnter: () => {
            document.getElementById('modal').classList.remove('hidden')
        },
        afterLeave: () => {
            document.getElementById('modal').classList.add('hidden')
        }
    },
    {
        title: "Delete Task",
        content: "Delete the Selected Task",
        target: ".delete-btn"
    },
    {
        title: "Table of Scheduled Task",
        content: "The table displays a list of Tasks, each with columns for 'Name', 'Exceution Cycle', 'Content', 'Mission Details', 'Last Execution', 'Status' and 'Action' This allows you to quickly see and manage the tasks.",
        target: ".nx-table-container"
    }
]

const tg = new tourguide.TourGuideClient({
    steps: scheduledSteps,
    completeOnFinish: true,
    allowDialogOverlap: true,
    exitOnClickOutside: true,
    rememberStep: true,
})

function startGuide() {
    tg.start()
}