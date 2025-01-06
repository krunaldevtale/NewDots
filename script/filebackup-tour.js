// Steps for tour
const steps = [
  {
    content:
      "Manage your database backups, view history, and perform manual backups or restorations from this section.",
    title: "Welcome to Storage/File Backup Tour! 👋",
    target: "body",
  },
  ...(isMobile()
    ? []
    : [
        {
          content:
            "You're currently in the 'Backup' section under 'Storage/file.' This is where all your backup operations are managed.",
          title: "Backup Tab",
          target: "#backup",
        },
      ]),
  {
    content:
      "This panel shows the status of your last backup, including database size, total backup time, and other key details.",
    title: "Backup Status",
    target: "#backup-succeeded",
  },
  {
    content: "Here, you can set up, start, or restore backups manually.",
    title: "Settings and Operation Management",
    target: "#settings",
  },
  {
    content:
      "Use the 'Setup' button to configure your backup settings, such as time, location, and content type.",
    title: "Setup",
    target: "#setup-button",
  },
  {
    content:
      "In this settings dialog, you can choose the backup time, location, and whether to back up the database or both database and files.",
    title: "Backup Settings Configuration",
    target: ".setting-modal",
    beforeEnter: () => {
      document.getElementById("setting-modal").classList.remove("hidden");
    },
    afterLeave: () => {
      document.getElementById("setting-modal").classList.add("hidden");
    },
  },
  {
    content:
      "Click this button to initiate the system restore process, allowing you to recover data from a backup.",
    title: "System Restore",
    target: "#restore",
  },
  {
    content:
      "This dialog provides detailed instructions on how to restore your system using a backup, including setting permissions and configuring the database.",
    title: "System Restore Instructions",
    target: ".restore-modal",
    beforeEnter: () => {
      document.getElementById("restore-modal").classList.remove("hidden");
    },
    afterLeave: () => {
      document.getElementById("restore-modal").classList.add("hidden");
    },
  },
  {
    content:
      "Click this button to permanently delete the selected backup. Ensure that you no longer need the backup, as this action cannot be undone.",
    title: "Delete Backup",
    target: "#delete-backup",
  },
  {
    content:
      "Confirm your decision to delete the backup. Once deleted, the data cannot be recovered, so proceed with caution.",
    title: "Confirm Backup Deletion",
    target: ".delete-modal",
    beforeEnter: () => {
      document.getElementById("delete-modal").classList.remove("hidden");
    },
    afterLeave: () => {
      document.getElementById("delete-modal").classList.add("hidden");
    },
  },
  {
    content:
      "This table lists all previous backups with details like storage name, node, size, and duration. You can also perform actions like 'Delete' or 'Reduction' here.",
    title: "Backup History Table",
    target: ".cm-table-container",
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
