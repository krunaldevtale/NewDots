const roleSteps = [{
    title: "Welcome to the Roles Management👋",
    content: "This is the Roles Management page where you can view, edit, and manage user roles.",
    target: "body",
}, {
    title: "Role Tab",
    content: "The Role tab allows you to view, edit, and manage the roles assigned to users in the system, including permissions and access levels.",
    target: "#role",
},  {
    title: "Add New Role",
    content: "Click here to create a new user role. You can define specific permissions and assign roles to different users to manage their access within the system.",
    target: ".addRole-btn",
},
{
    title: "Add Role Form",
    content: "Use this form to create a new role.",
    target: ".addModal",
    beforeEnter: () => {
        const Modal = document.getElementById("add-modal");
        Modal.classList.remove("hidden");
    },
    afterLeave: () => {
        const Modal = document.getElementById("add-modal");
        Modal.classList.add("hidden");
    }
},

{
    title: "Delete Selected Role",
    content: "Click here to delete the selected roles.",
    target: ".delete-btn",
},
{
    title: "Role Management Table",
    content: "This table lists user roles with details like name, description, and last modification date.",
    target: ".cm-table-container",
},
{
    title: "Edit Role",
    content: "Click here to modify the selected role's details, including its permissions and description.",
    target: ".edit-btn"
},

]

const tg = new tourguide.TourGuideClient({
    steps: roleSteps,
    completeOnFinish: true,
    allowDialogOverlap: true,
    exitOnClickOutside: true,
    rememberStep: true,
})

function startGuide() {
    tg.start()
}