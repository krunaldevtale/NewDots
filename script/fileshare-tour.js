// Steps for tour
const steps = [
  {
    content:
      "This page allows you to manage and monitor the files shared within your system. Utilize the filters and search features to quickly locate shared files, view detailed information, and perform actions like canceling or exporting sharing reports.",
    title: "Welcome to Storage/File Share Tour! 👋",
    target: "body",
  },
  ...(isMobile()
    ? []
    : [
        {
          content:
            "You're currently in the 'Share' section under 'Storage/file.'",
          title: "Share menu",
          target: "#share-menu",
        },
      ]),
  ...(isMobile()
    ? [
        {
          content:
            "The search bar allows you to quickly find specific shared files.Enter keywords or strings to filter through the shared files.",
          title: "Search Bar",
          target: "#mobilesearchbutton",
        },
      ]
    : [
        {
          content:
            "The search bar allows you to quickly find specific shared files.Enter keywords or strings to filter through the shared files.",
          title: "Search Bar",
          target: "#searchbutton",
        },
      ]),
  ...(isMobile()
    ? [
        {
          content:
            "Click this button to cancel the sharing of selected files.This option helps you quickly revoke access to shared files.",
          title: "Cancel Sharing Button",
          target: "#mobilecancelbutton",
        },
      ]
    : [
        {
          content:
            "Click this button to cancel the sharing of selected files.This option helps you quickly revoke access to shared files.",
          title: "Cancel Sharing Button",
          target: "#cancelbutton",
        },
      ]),

  {
    content:
      "The export button enables you to download a report of shared files.This is useful for keeping records of your file-sharing activities.",
    title: "Export Button",
    target: ".export",
  },
  {
    content:
      "The Share tab displays the sharing options for your files.Here, you can manage shared files, view sharing reports, and customize settings.",
    title: "Share Tab",
    target: "#tab-sharing",
  },
  {
    content:
      "Use these filters to narrow down your search for shared files.You can filter by date, user, file type, and more for precise results.",
    title: "Sharing Filter Options",
    target: ".sharing-filter",
  },
  {
    content:
      "This table displays a list of all shared files along with their details.You can see the sharer, file type, view/download status, expiration date, and more.",
    title: "File Sharing Table",
    target: ".sharing-table",
  },
  {
    content:
      "This tab displays reports related to file sharing activities.You can track and manage reports of shared files, including any issues flagged by users.",
    title: "Sharing Report Tab",
    target: "#tab-sharing-report",
    beforeEnter: () => {
      document.getElementById("tab-sharing-report").click();
    },
  },
  {
    content:
      "Use the date filters to narrow down reports by time range, and refine results further with user and type filters. Bulk operations allow you to efficiently manage multiple reports simultaneously.",
    title: "Reports Filter Options",
    target: ".report-filter",
  },
  {
    content:
      "This table displays detailed information about each sharing report.View the whistleblower, reason for reporting, processing time, and results of each report.",
    title: "Sharing Report Table",
    target: ".report-table",
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

// Perform any additional actions after the tour finishes
tg.onFinish(() => {
  document.getElementById("tab-sharing").click();
});

// Start the tour guide
function startGuide() {
  tg.start();
}
