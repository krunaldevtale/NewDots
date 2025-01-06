// Steps for tour
const steps = [
  {
    content:
      "This page allows you to monitor, filter, and export detailed logs of user operations, providing insights into actions taken within the system.",
    title: "Welcome to Operation Log Tour! 👋",
    target: "body",
  },
  ...(isMobile()
    ? []
    : [
        {
          content:
            "Shows your navigation path within the settings, currently focused on the Safety Control > Operation Log section.",
          title: "Safety Control Operation Tab",
          target: "#safety-operation",
        },
      ]),
  {
    content:
      "Click this button to export the displayed operation logs for external use.",
    title: "Export Button",
    target: ".export",
  },

  {
    content:
      "Use the filter buttons to quickly view operation logs for specific time periods or customize your view to include advanced filtering options.",
    title: "Filter Options",
    target: ".filter",
  },
  {
    content:
      "Hover over the Select User button to filter the operation logs based on specific user operations.",
    title: "Select User",
    target: ".user",
    order: "",
    group: "groupA",
  },
  {
    content:
      "Use the Select User dropdown to filter operation logs by specific user activities, such as file operations or backend access.",
    title: "Select User DropDown",
    target: "#user-dropdown",
    beforeEnter: () => {
      document.getElementById("user-dropdown").style.display = "block";
      document.getElementById("user-dropdown").style.zIndex = "1";
    },
    afterLeave: () => {
      document.getElementById("user-dropdown").style.display = "none";
    },
  },
  {
    content:
      "This table shows the details of user operations including user, date, time, action, system, client, and location.",
    title: "Operation Log Table",
    target: ".operation-table",
  },
];

// Function to check if the screen is mobile
function isMobile() {
  return window.innerWidth <= 768;
}

// Initialize a new TourGuideClient with custom configuration
const tg = new tourguide.TourGuideClient({
  steps: steps,
  completeOnFinish: true,
  allowDialogOverlap: true,
  exitOnClickOutside: true,
  rememberStep: true,
});

// Start the tour guide
function startGuide() {
  tg.start();
}
