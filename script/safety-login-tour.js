// Steps for tour
const steps = [
  {
    content:
      "This page allows you to view, filter, and export detailed logs of user login activities, providing insights into system access and security.",
    title: "Welcome to Login Log Tour! 👋",
    target: "body",
  },
  ...(isMobile()
    ? []
    : [
        {
          content:
            "Shows your navigation path within the settings, currently focused on the Safety Control > Login section.",
          title: "Safety Control Login Tab",
          target: "#safety-login",
        },
      ]),
  {
    content:
      "Click this button to export the displayed login logs for external use.",
    title: "Export Button",
    target: ".export",
  },

  {
    content:
      "Use the Today, Last 7 days, and Last 30 days buttons to filter login logs based on different time periods.Click Customize to configure advanced filters and tailor the displayed login logs to your preferences.",
    title: "Filter Options",
    target: ".filter",
  },
  {
    content:
      "Hover over the Select User button to filter the login logs based on specific user operations.",
    title: "Select User",
    target: ".user",
    order: "",
    group: "groupA",
  },
  {
    content:
      "Use the Select User dropdown to filter login logs by specific user activities, such as file operations or backend access.",
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
      "This table shows the details of user logins including user, date, time, system, and login address.",
    title: "Login Log Table",
    target: ".login-table",
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
