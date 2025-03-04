function showTab(tabId) {
    // Remove active class from all tab contents
    document.querySelectorAll('.tab-content').forEach(content => {
      content.classList.remove('active');
    });
  
    // Remove active class from all buttons
    document.querySelectorAll('.uspr-tab-control').forEach(button => {
      button.classList.remove('active');
    });
  
    // Add active class to the selected tab content
    document.getElementById(tabId)?.classList.add('active');
  
    // Add active class to the clicked button
    const activeButton = document.querySelector(`.uspr-tab-control[data-tab="${tabId}"]`);
    if (activeButton) {
      activeButton.classList.add('active');
    }
  
    // Dynamically update the navbar title
    const navbarTitle = document.getElementById('navbar-title');
    if (activeButton && navbarTitle) {
      navbarTitle.textContent = activeButton.textContent; // Set the title to the clicked button's text
    }
  }
  
  // Existing functions remain unchanged
  let currentCheckbox = null;
  
  function handleToggle(checkbox) {
    if (checkbox.checked) {
      currentCheckbox = checkbox;
      document.getElementById('revoke-popup').classList.remove('hidden');
      checkbox.checked = false;
    }
  }
  
  function closeRevokePopup() {
    document.getElementById('revoke-popup').classList.add('hidden');
    currentCheckbox = null;
  }
  
  function confirmRevoke() {
    if (currentCheckbox) {
      currentCheckbox.checked = true;
      console.log('Revoke action confirmed and toggle switched on.');
    }
    document.getElementById('revoke-popup').classList.add('hidden');
    currentCheckbox = null;
  }
  
  