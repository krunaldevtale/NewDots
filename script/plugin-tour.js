const pluginSteps = [{
    title: "Welcome to the Plugin Tour 👋",
    content: "Explore and integrate powerful plugins to enhance your application. Easily add new features and tools to customize your experience and boost productivity.",
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
    title: "Search Bar",
    content: "Here you can search the plugins.",
    target: "#search-bar"
},
{
    title: "Enhance with Office",
    content: "Need PowerPoint? Click 'Add' to include it in your suite of applications for easy access.",
    target: "#office-container"
},
{
    title: "Customize the Plugin",
    content: "Click on the edit the app or to delete the app",
    target: "#dropdown1",
    beforeEnter: () => {
        document.getElementById("dropdown1").classList.remove('hidden')
    },
    afterLeave: () => {
        document.getElementById("dropdown1").classList.add('hidden')
    }
},

]

const tg = new tourguide.TourGuideClient({
    steps: pluginSteps,
    completeOnFinish: true,
    allowDialogOverlap: true,
    exitOnClickOutside: true,
    rememberStep: true,
})

function startGuide() {
    tg.start()
}