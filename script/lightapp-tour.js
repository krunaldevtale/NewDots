const lightappSteps = [{
    title: "Welcome to the LightApp Tour 👋",
    content: "Explore and add lightweight applications to streamline your tasks. Easily manage tools like PPT, Excel, ERP, and more from one place.",
    target: "body"
},
    {
        title: "Explore Categories",
        content: "Navigate through various categories such as Tools, Games, Movies, and more to find your desired applications.",
        target: ".sidebar"
    },
    {
        title: "View All Applications",
        content: "This tab shows all available applications, giving you an overview of everything that can be added.",
        target: ".all-tab"
    },
    {
        title: "Create a New Light App",
        content: "Click here to create a new light application tailored to your needs.",
        target: "#create-btn"
    },
    {
        title: "New Application Setup",
        content: "Configure your new light application by providing a name, link, description, and more. Adjust settings like dialog size and window type to match your preferences.",
        target: "#createapp-modal",
        beforeEnter: () => {
            document.getElementById("Create-modal").classList.remove('hidden')
        },
        afterLeave: () => {
            document.getElementById("Create-modal").classList.add('hidden')
        }
    },
    {
        title: "Enhance with PPT",
        content: "Need PowerPoint? Click 'Add' to include it in your suite of applications for easy access.",
        target: "#ppt-container"
    },
    {
        title: "Edit or Delete the App",
        content: "Click on the edit the app or to delete the app",
        target: "#dropdown1",
        beforeEnter: () => {
            document.getElementById("dropdown1").classList.remove('hidden')
        },
        afterLeave: () => {
            document.getElementById("dropdown1").classList.add('hidden')
        }
    },
    {
        title: "Customize Your Application",
        content: "Edit your app by providing a name, link, description, and more. Adjust settings like dialog size and window type to match your preferences.",
        target: "#editapp-modal",
        beforeEnter: () => {
            document.getElementById("Edit-modal").classList.remove('hidden')
        },
        afterLeave: () => {
            document.getElementById("Edit-modal").classList.add('hidden')
        }
    },
    {
        title: "Confirm App Deletion",
        content: "Confirm your decision to delete the App.",
        target: "#deleteapp-modal",
        beforeEnter: () => {
            document.getElementById("Delete-modal").classList.remove('hidden')
        },
        afterLeave: () => {
            document.getElementById("Delete-modal").classList.add('hidden')
        }
    }
]

const tg = new tourguide.TourGuideClient({
    steps: lightappSteps,
    completeOnFinish: true,
    allowDialogOverlap: true,
    exitOnClickOutside: true,
    rememberStep: true,
})

function startGuide() {
    tg.start()
}