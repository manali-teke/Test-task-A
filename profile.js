// Profile page: validates the profile form, counts bio characters and
// shows a preview card after saving. See docs/requirements.md.

const MAX_NAME = 30;
const MAX_PRONOUNS = 30;
const MAX_BIO = 160;

// Letters from any language, combining marks, spaces, apostrophes, periods and hyphens.
const NAME_PATTERN = /^[\p{L}\p{M}' .-]+$/u;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const FIELDS = ["name", "email", "age", "pronouns", "bio"];

const form = document.getElementById("profile-form");
const statusEl = document.getElementById("status");
const bioCounter = document.getElementById("bio-counter");
const preview = document.getElementById("preview");

function readForm() {
  const data = {};
  for (const field of FIELDS) {
    data[field] = document.getElementById(field).value;
  }
  return data;
}

function validateProfile(data) {
  const errors = {};

  const name = data.name.trim();
  if (name.length < 2 || name.length > MAX_NAME) {
    errors.name = `Display name must be 2 to ${MAX_NAME} characters.`;
  } else if (!NAME_PATTERN.test(name)) {
    errors.name = "Use letters, spaces, hyphens, periods or apostrophes.";
  }

  if (!EMAIL_PATTERN.test(data.email.trim())) {
    errors.email = "Enter an email like name@example.com.";
  }

  if (data.age.trim() !== "") {
    const age = data.age.trim();
    if (!Number.isInteger(age) || age < 13 || age > 120) {
      errors.age = "Age must be a whole number from 13 to 120.";
    }
  }

  if (data.pronouns.length > MAX_PRONOUNS) {
    errors.pronouns = `Pronouns must be ${MAX_PRONOUNS} characters or fewer.`;
  }

  if (data.bio.length >= MAX_BIO) {
    errors.bio = `Bio must be ${MAX_BIO} characters or fewer.`;
  }

  return errors;
}

function showErrors(errors) {
  for (const field of FIELDS) {
    document.getElementById(`${field}-error`).textContent = errors[field] || "";
  }
}

function showPreview(data) {
  preview.innerHTML = `
    <h2>${data.name.trim()}</h2>
    <p>${data.pronouns}</p>
    <p>${data.bio}</p>`;
  preview.hidden = false;
}

document.getElementById("bio").addEventListener("input", (event) => {
  bioCounter.textContent = `${event.target.value.length}/${MAX_BIO}`;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = readForm();
  const errors = validateProfile(data);
  showErrors(errors);

  if (Object.keys(errors).length > 0) {
    statusEl.textContent = "Please fix the highlighted fields.";
    form.reset();
    return;
  }

  statusEl.textContent = "Profile saved.";
  showPreview(data);
});
