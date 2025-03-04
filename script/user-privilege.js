// Toggle dropdown visibility
function toggleDropdown(event) {
  event.stopPropagation(); // Prevent click from propagating to the window listener
  const dropdownMenu = document.getElementById('dropdown-menu');
  dropdownMenu.classList.toggle('hidden');
}

// Toggle Submenu (Request Status → Child Menu)
function toggleSubDropchild(id, element) {
  event.stopPropagation();
  const submenu = document.getElementById(id);
  submenu.classList.toggle('hidden');
}

// Show selected div and hide others
function showDiv(index) {
  console.log("Div to show:", index); // Debugging

  // Update the navbar title dynamically
  const navbarTitle = document.getElementById('navbar-title');
  const titles = [
    "Permissions Dashboard", // showDiv(0)
    "All Requests",          // showDiv(1)
    "Pending Requests",      // showDiv(2)
    "Rejected Requests",     // showDiv(3)
    "Approved Requests",     // showDiv(4)
    "Cancelled Requests"     // showDiv(5)
  ];

  if (index >= 0 && index < titles.length) {
    navbarTitle.textContent = titles[index];
  }

  // Hide all divs
  const divs = document.querySelectorAll('.hidden-div');
  divs.forEach(div => div.classList.add('hidden'));

  // Show the selected div
  const selectedDiv = document.getElementById(`div-${index}`);
  if (selectedDiv) {
    selectedDiv.classList.remove('hidden');
  }

  // Hide dropdown menu if visible
  document.getElementById('dropdown-menu').classList.add('hidden');
}

// Close dropdown if clicked outside
window.addEventListener('click', (e) => {
  const dropdown = document.getElementById('dropdown-menu');
  if (!e.target.closest('.relative')) {
    dropdown.classList.add('hidden');
  }
});

// ======= Popup Modal Functions =======

// Show Cancel Confirmation Popup
function showCancelPopup() {
  document.getElementById('cancel-popup').classList.remove('hidden');
}

// Show Send Confirmation Popup
function showSendPopup() {
  document.getElementById('send-popup').classList.remove('hidden');
}

// Close the Popup without any action
function closePopup(popupId) {
  document.getElementById(popupId).classList.add('hidden');
}

// Perform the Cancel Action
function cancelAction() {
  alert('You have canceled your action.');
  closePopup('cancel-popup');
}

// Perform the Send Action
function sendAction() {
  alert('You have sent your selection.');
  closePopup('send-popup');
}
