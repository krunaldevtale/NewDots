// Steps for tour
const steps = [
  {
    content:
      "Manage all users, roles, space usage, and groups within the system. Use filters, search, and actions to efficiently organize your user base.",
    title: "Welcome to Users & Groups Tour! 👋",
    target: "body",
    order: "",
  },
  // Add steps for mobile or desktop only
  ...(isMobile()
    ? []
    : [
        {
          content:
            "The sidebar gives quick access to system settings. Navigate to 'Users & Groups', 'Role', 'Document Permission', and more here.",
          title: "Sidebar",
          target: ".sidebar",
          order: "",
          group: "groupA",
        },
      ]),
  ...(isMobile()
    ? []
    : [
        {
          content:
            "This tab is for managing users and groups. View and organize user accounts, roles, and associated groups.",
          title: "Users & Groups Tab",
          target: "#users-group",
          order: "",
          group: "groupA",
        },
      ]),

  {
    content:
      "Click the plus icon to add a new user or group. Fill in the necessary details in the form provided.",
    title: "Add New User",
    target: isMobile() ? "#add-user-mobile" : "#add-user",
    order: "",
    group: "groupA",
  },
  {
    content:
      "Fill out the user's details, set space limits, and assign roles. Manage group permissions and access additional settings.",
    title: "User Info",
    target: ".newUserModal",
    beforeEnter: () => {
      document.getElementById("newUserModal").classList.remove("hidden");
    },
    afterLeave: () => {
      document.getElementById("newUserModal").classList.add("hidden");
    },
  },
  {
    content:
      "Click the Edit button to modify user information. This opens a form to update user details.",
    title: "Edit User",
    target: "#edit",
    order: "",
    group: "groupA",
  },
  {
    content:
      "Edit user details, adjust space limits, and assign roles. Manage group permissions and additional settings here.",
    title: "Edit User Info",
    target: ".newUserModal",
    beforeEnter: () => {
      document.getElementById("newUserModal").classList.remove("hidden");
    },
    afterLeave: () => {
      document.getElementById("newUserModal").classList.add("hidden");
    },
  },
  {
    content:
      "Hover over the Group button to view available groups. You can explore the groups associated with the users.",
    title: "Group",
    target: ".group",
    order: "",
    group: "groupA",
  },
  {
    content:
      "Use this dropdown to filter users by groups. Switch between groups to manage settings or perform group-specific actions.",
    title: "Group DropDown",
    target: "#group-dropdown",
    beforeEnter: () => {
      document.getElementById("group-dropdown").style.display = "block";
      document.getElementById("group-dropdown").style.zIndex = "1";
    },
  },
  {
    content:
      "Click on 'Add Group' to open the form for creating a new group. Enter group details, assign parent groups, and set permissions.",
    title: "Add Group",
    target: "#add-group",
    order: "",
    group: "groupA",
  },
  {
    content:
      "Manage group details in this popup. Enter the group name, assign parent groups, and set specific permissions.",
    title: "Add Group Info",
    target: ".editModal",
    beforeEnter: () => {
      document.getElementById("editModal").classList.remove("hidden");
    },
    afterLeave: () => {
      document.getElementById("editModal").classList.add("hidden");
    },
  },
  {
    content:
      "Click on a group name to open the edit group form. Modify group details, parent groups, and permissions here.",
    title: "Edit Group",
    target: "#edit-group",
    order: "",
    group: "groupA",
  },
  {
    content:
      "This popup allows you to edit group information. Manage group names, assign parent groups, and configure permissions.",
    title: "Edit Group Info",
    target: ".editModal",
    beforeEnter: () => {
      document.getElementById("editModal").classList.remove("hidden");
    },
    afterLeave: () => {
      document.getElementById("editModal").classList.add("hidden");
      document.getElementById("group-dropdown").style.display = "none";
    },
  },
  {
    content:
      "Use this button to delete selected users or groups. Ensure you select the checkboxes next to the items you wish to delete.",
    title: "Delete",
    target: "#delete",
    order: "",
    group: "groupA",
  },
  {
    content:
      "This table displays users and groups. View details like nickname, role, space usage, and group association. Click to edit.",
    title: "Table of Users and Groups",
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
