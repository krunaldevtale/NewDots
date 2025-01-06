const noticeSteps = [{
    title: "Welcome to the Notice Management Tour 👋",
    content: "This page allows you to manage all system notices. You can add, edit, and delete notices, as well as control their status and push timings. Use the tools provided to efficiently organize and update the notices displayed to users.",
    target: "body",
}, {
    title: "Notice Tab",
    content: "This tab for View and manage system notices.",
    target: "#notice"
},{
    title: "Add New Notice",
    content: "Click here to create a new notice.You can define the notice details, including its content, push date, and status.",
    target: "#add-btn",
    },
    {
        title: "New Notice Form",
        content: "Use this form to create a new notice",
        target: ".modal-content",
        beforeEnter: () => {
            document.getElementById("modal").classList.remove("hidden");
        },
        afterLeave: () => {
            document.getElementById("modal").classList.add("hidden");
        },
},
{
    title: "Search Notices",
    content: "Use this search bar to quickly find specific user roles by name or status.",
    target: "#search-bar",
},
{
    title: "Delete Selected Notices",
    content: "Click here to delete the selected notices.",
    target: "#delete-btn",
},
{
    title: "Notice Management Table",
    content: "This table displays a list of notices, including their name, status, push date, and creation time.",
    target: ".cm-table-container",
},
{
    title: "Edit Notice",
    content: "Click here to modify the selected notice's details, including its content and push settings.",
    target: ".edit-btn"
    },
    {
        title: "Preview Notice",
        content: "Click here to preview the notice before it's published. This allows you to see how the notice will appear to users and make any necessary adjustments.",
        target: ".preview-btn"
    },

]

const tg = new tourguide.TourGuideClient({
    steps: noticeSteps,
    completeOnFinish: true,
    allowDialogOverlap: true,
    exitOnClickOutside: true,
    rememberStep: true,
})

function startGuide() {
    tg.start()
}