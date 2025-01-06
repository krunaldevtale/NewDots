// Steps for tour
const steps = [
  {
    content:
      "This page allows you to manage and share files within your personal and departmental spaces. Customize link sharing and organize your documents efficiently.",
    title: "Welcome to Link Sharing Tour! 👋",
    target: "body",
  },
  ...(isMobile()
    ? []
    : [
        {
          content:
            "Manage your file sharing settings here. You can edit or cancel link sharing directly from this section.",
          title: "Link Sharing Tab",
          target: "#sharing",
        },
      ]),
  {
    content:
      "Files in this section are stored in your personal space. Manage your documents and organize them as needed.",
    title: "Personal Space",
    target: ".personal",
  },

  {
    content:
      "Shared files across departments are stored here. Collaborate and share files easily with your team.",
    title: "Departmental Space",
    target: ".departmental",
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
