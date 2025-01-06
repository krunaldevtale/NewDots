// Tour steps for desktop view
const desktopSteps = [
  {
    content:
      "File Manager is designed to help you efficiently organize, manage, and share your files with ease. Let's take a quick tour to get you acquainted with all the features and functionalities.",
    title: "Welcome to File Manager Tour! 👋",
    target: "body",
    order: "",
  },
  {
    content:
      "You'll find everything you need to navigate and manage your files efficiently.",
    title: "Navigation Bar",
    target: ".sidebar",
    order: "",
    group: "groupA",
  },
  {
    content:
      "You can ensure that important documents are always within reach and that your personal, group, and collaborative efforts are well-coordinated.",
    title: "Position",
    target: ".position",
    order: "",
    group: "groupA",
  },
  {
    content:
      "Quickly access your most important and frequently used files by marking them as starred. Subdmenu: it allows you to create custom categories for your starred items. ",
    title: "Starred",
    target: ".starred",
    beforeEnter: () => {
      document.getElementById("subdrop-menu").classList.remove("hidden");
    },
    afterLeave: () => {
      document.getElementById("subdrop-menu").classList.add("hidden");
    },
  },
  {
    content:
      "Effortlessly manage files with the toolbar's quick access to essential tools and features.",
    title: "ToolBar",
    target: ".actionbar",
    order: "",
    group: "groupA",
  },
  {
    content: "Create a new folder or document.",
    title: "New",
    target: ".new",
    order: "",
    group: "groupA",
  },
  {
    content:
      "Click the dropdown next to 'New' to choose between creating a folder or various file types.",
    title: "New DropDown",
    target: "#new-dropdown",
    beforeEnter: () => {
      document.getElementById("new-dropdown").style.display = "block";
    },
    afterLeave: () => {
      document.getElementById("new-dropdown").style.display = "none";
    },
  },
  {
    content: "Add files from your device to the current directory.",
    title: "Upload",
    target: ".upload",
    order: "",
    group: "groupA",
  },
  {
    content:
      "Click to open the file upload dialog or drag and drop files directly onto the toolbar area.",
    title: "Upload DropDown",
    target: "#upload-dropdown",
    beforeEnter: () => {
      document.getElementById("upload-dropdown").style.display = "block";
    },
    afterLeave: () => {
      document.getElementById("upload-dropdown").style.display = "none";
    },
  },
  {
    content:
      "The 'Local Upload' feature allows users to select or drag and drop files for easy uploading, displaying file details like name, size, and status. Manage uploads with options to pause, clear all, or clear completed items for a streamlined experience.",
    title: "Local Upload",
    target: ".uploadPopup",
    beforeEnter: () => {
      document.getElementById("uploadPopup").classList.remove("hidden");
    },
    afterLeave: () => {
      document.getElementById("uploadPopup").classList.add("hidden");
    },
  },
  {
    content:
      "Remove selected files from their current location and prepare them to be moved.",
    title: "Cut",
    target: ".scissor",
    order: "",
    group: "groupA",
  },
  {
    content:
      "Duplicate selected files and prepare them to be placed elsewhere.",
    title: "Copy",
    target: ".copy",
    order: "",
    group: "groupA",
  },
  {
    content:
      " Insert files that you've cut or copied into the current directory.",
    title: "Paste",
    target: ".paste",
    order: "",
    group: "groupA",
  },
  {
    content: "Change the name of the selected file or folder.",
    title: "Rename",
    target: ".edit",
    order: "",
    group: "groupA",
  },
  {
    content:
      "The Share is a powerful tool for collaborating and sharing your files with others.",
    title: "Share",
    target: ".share",
    order: "",
    group: "groupA",
  },
  {
    content:
      "Sharing files securely and efficiently is just a few clicks away. Whether you’re collaborating on a project, sending important documents, or sharing media, this feature ensures you have full control over your shared content.",
    title: "Sharing Link",
    target: ".sharePopup",
    beforeEnter: () => {
      document.getElementById("sharePopup").classList.remove("hidden");
    },
    afterLeave: () => {
      document.getElementById("sharePopup").classList.add("hidden");
    },
  },
  {
    content: "Permanently remove selected files or folders.",
    title: "Delete",
    target: ".delete",
    order: "",
    group: "groupA",
  },
  {
    content: "Arrange files based on various criteria.",
    title: "Sort",
    target: ".sort",
    order: "",
    group: "groupA",
  },
  {
    content: " Sort by name, date, size, or type.",
    title: "Sort DropDown",
    target: "#sort-dropdown",
    beforeEnter: () => {
      document.getElementById("sort-dropdown").style.display = "block";
    },
    afterLeave: () => {
      document.getElementById("sort-dropdown").style.display = "none";
    },
  },
  {
    content: "Switch between different file display modes.",
    title: "View",
    target: ".view",
    order: "",
    group: "groupA",
  },
  {
    content:
      "Toggle between Grid View and List View based on your preference.View detail pane and preview pane of selected file or folder",
    title: "View DropDown",
    target: "#view-dropdown",
    beforeEnter: () => {
      document.getElementById("view-dropdown").style.display = "block";
    },
    afterLeave: () => {
      document.getElementById("view-dropdown").style.display = "none";
    },
  },
  {
    content: "Provides in-depth information about the selected file or folder.",
    title: "Detail Pane",
    target: "#panel",
    beforeEnter: () => {
      document.getElementById("panel").classList.remove("hidden");
      document.getElementById("detailContent").classList.remove("hidden");
    },
    afterLeave: () => {
      document.getElementById("detailContent").classList.add("hidden");
    },
  },
  {
    content:
      " This feature lets you quickly view the contents of a selected file without needing to open it fully.",
    title: "Preview Pane",
    target: "#panel",
    beforeEnter: () => {
      document.getElementById("previewContent").classList.remove("hidden");
    },
    afterLeave: () => {
      document.getElementById("panel").classList.add("hidden");
      document.getElementById("previewContent").classList.add("hidden");
    },
  },
  {
    content:
      "Your file manager's main workspace is the Grid View, where all your files and folders are neatly displayed as thumbnails. This view allows for easy browsing and quick access to your content.",
    title: "Files",
    target: "#gridContainer",
    order: "",
    group: "groupA",
  },
];

// Tour steps for mobile view
const mobileSteps = [
  {
    content:
      "File Manager is designed to help you efficiently organize, manage, and share your files with ease. Let's take a quick tour to get you acquainted with all the features and functionalities.",
    title: "Welcome to File Manager Tour! 👋",
    target: "body",
    order: "",
  },
  {
    content:
      "Effortlessly manage files with the toolbar's quick access to essential tools and features.",
    title: "ToolBar",
    target: "#taskbar",
    order: "",
    group: "groupA",
  },
  {
    content:
      "Use the search bar to locate files without manually browsing through folders, especially in large directories.",
    title: "Search",
    target: "#search",
    order: "",
    group: "groupA",
  },
  {
    content: "Click here to access additional options.",
    title: "More Views",
    target: "#more-button",
    order: "",
    group: "groupA",
  },
  {
    content:
      " This dropdown provides quick access to various detail pane and preview pane.",
    title: "More DropDown",
    target: "#more-dropdown",
    beforeEnter: () => {
      document.getElementById("more-dropdown").style.display = "block";
    },
    afterLeave: () => {
      document.getElementById("more-dropdown").style.display = "none";
    },
  },
  {
    content: "Provides in-depth information about the selected file or folder.",
    title: "Detail Pane",
    target: "#panel",
    beforeEnter: () => {
      document.getElementById("panel").classList.remove("hidden");
      document.getElementById("detailContent").classList.remove("hidden");
    },
    afterLeave: () => {
      document.getElementById("detailContent").classList.add("hidden");
    },
  },
  {
    content:
      " This feature lets you quickly view the contents of a selected file without needing to open it fully.",
    title: "Preview Pane",
    target: "#panel",
    beforeEnter: () => {
      document.getElementById("previewContent").classList.remove("hidden");
    },
    afterLeave: () => {
      document.getElementById("panel").classList.add("hidden");
      document.getElementById("previewContent").classList.add("hidden");
    },
  },
  {
    content:
      "Use this button to toggle between grid view and list view for your files.",
    title: "View",
    target: "#view-button",
    order: "",
    group: "groupA",
  },
  {
    content:
      "Your file manager's main workspace is the Grid View, where all your files and folders are neatly displayed as thumbnails. This view allows for easy browsing and quick access to your content.",
    title: "Files",
    target: "#gridContainer",
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
  steps: isMobile() ? mobileSteps : desktopSteps,
  completeOnFinish: true,
  allowDialogOverlap: true,
  exitOnClickOutside: true,
  rememberStep: true,
});

// Start the tour guide
function startGuide() {
  tg.start();
}
