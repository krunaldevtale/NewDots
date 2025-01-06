// Steps for tour
const steps = [
  {
    content:
      "This section allows you to manage document permissions for different user roles. Here, you can view, edit, and assign permissions such as document list, preview, download, upload, and other key actions for various roles within the system.",
    title: "Welcome to Document Permission Tour! 👋",
    target: "body",
    order: "",
  },
  // Add steps for mobile or desktop only
  ...(isMobile()
    ? []
    : [
        {
          content:
            "This tab is for managing document permission, where you manage and assign permissions for various user roles.",
          title: "Document Permission Tab",
          target: "#document-permission",
          order: "",
          group: "groupA",
        },
      ]),
  {
    content:
      "This allows you to create a new document permission role. Clicking this button will open a form to define the permissions for the new role.",
    title: "Add New Document Permission",
    target: "#add-permission",
    order: "",
    group: "groupA",
  },
  {
    content:
      "This form allows you to define a user's document permissions by specifying the role name and selecting from various access options like viewing, editing, sharing, and more. ",
    title: "Document Permission",
    target: ".modal-content",
    beforeEnter: () => {
      document.getElementById("modal").classList.remove("hidden");
    },
    afterLeave: () => {
      document.getElementById("modal").classList.add("hidden");
    },
  },
  {
    content:
      "The 'Edit' link in each row lets you quickly modify the permissions for the corresponding role.",
    title: "Edit Document Permission",
    target: "#edit-permission",
    order: "",
    group: "groupA",
  },
  {
    content:
      "You can modify an existing document permission by updating the user name and adjusting specific access rights, such as viewing, editing, downloading, and sharing files.",
    title: "Edit Document Permission",
    target: ".modal-content",
    beforeEnter: () => {
      document.getElementById("modal").classList.remove("hidden");
    },
    afterLeave: () => {
      document.getElementById("modal").classList.add("hidden");
    },
  },
  {
    content:
      "The 'Delete' button allows you to delete selected roles from the document permissions list. Make sure to select the checkboxes next to the roles you wish to remove before clicking delete.",
    title: "Delete Permission",
    target: "#delete-permission",
    order: "",
    group: "groupA",
  },
  {
    content:
      "The table displays a list of roles, each with columns for 'Name,' 'Information,' 'Permission,' and 'Action.' This allows you to quickly see and manage the permissions associated with each role.",
    title: "Table of Document Permission",
    target: ".cm-table-container",
    order: "",
    group: "groupA",
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
