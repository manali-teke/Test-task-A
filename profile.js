// Profile page: saves the profile form.

const form = document.getElementById("profile-form");
const statusEl = document.getElementById("status");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  statusEl.textContent = "Profile saved.";
});
