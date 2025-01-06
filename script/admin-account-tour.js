// Steps for tour
const steps = [
  {
    content:
      "Manage your profile, email, and password settings here. Keep your account secure and personalized by regularly updating your details.",
    title: "Welcome to Administrator Account Tour! 👋",
    target: "body",
  },
  ...(isMobile()
    ? []
    : [
        {
          content:
            "The Account Tab is your hub for managing personal information.",
          title: "Account Tab",
          target: "#account",
        },
      ]),
  {
    content:
      "This is where your current profile picture is displayed. It provides a visual representation of the administrator's identity.",
    title: "Avatar",
    target: ".avatar",
  },
  {
    content:
      " Displays the nickname associated with the account. This name is used for identification within the platform.",
    title: "Nickname",
    target: ".nickname",
  },
  {
    content:
      "When you click the 'Edit' button, You can modify the nickname associated with your account.",
    title: "Edit Nickname",
    target: "#nickname-edit",
  },
  {
    content:
      "Enter your desired nickname here. Note that it must be unique and cannot be the same as your current nickname.",
    title: "Modify Nickname",
    target: ".edit-nickname",
    beforeEnter: () => {
      document.getElementById("nickname-edit").click();
    },
  },
  {
    content:
      "The email address associated with this account is shown here. It is important for receiving notifications and account recovery options.",
    title: "Email",
    target: ".email",
  },
  {
    content:
      "When you click the 'Edit' button, You can update your email address to a new one.",
    title: "Edit Email",
    target: "#email-edit",
  },
  {
    content:
      "Enter your email address here. Some businesses may require you to verify your email before you can proceed.",
    title: "Modify Email",
    target: ".edit-email",
    beforeEnter: () => {
      document.getElementById("email-edit").click();
    },
  },
  {
    content:
      "This section allows you to update your account password. For security purposes, the current password is hidden.",
    title: "Password",
    target: ".password",
  },
  {
    content:
      "When you click the 'Edit' button, You can change your current password to maintain or enhance your account's security.",
    title: "Edit Password",
    target: "#password-edit",
  },
  {
    content:
      "Here you can update your password. Enter your old password, followed by your new password twice to confirm the change.",
    title: "Modify Password",
    target: ".edit-password",
    beforeEnter: () => {
      document.getElementById("password-edit").click();
    },
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
  document.getElementById("nickname-close").click();
  document.getElementById("email-close").click();
  document.getElementById("password-close").click();
});

// Start the tour guide
function startGuide() {
  tg.start();
}
