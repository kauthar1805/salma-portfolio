window.onload = function () {
  const greeting = document.createElement('div');
  greeting.style.textAlign = 'center';
  greeting.style.fontSize = '1.2em';
  greeting.style.margin = '10px';
  let hour = new Date().getHours();
  let message = "Welcome to my portfolio!";
  if (hour < 12) message = "Good morning! Welcome to my portfolio.";
  else if (hour < 18) message = "Good afternoon! Welcome to my portfolio.";
  else message = "Good evening! Welcome to my portfolio.";
  greeting.innerText = message;
  document.body.prepend(greeting);
};

// (Contact form)
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.querySelector("form[action='#']");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      const emailInput = contactForm.querySelector("input[type='email']");
      const nameInput = contactForm.querySelector("input[type='text']");

      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      const namePattern = /^[A-Za-z\s]{3,}$/;

      if (!emailPattern.test(emailInput.value)) {
        alert("Please enter a valid email address.");
        e.preventDefault();
      }

      if (!namePattern.test(nameInput.value)) {
        alert("Please enter a valid name (only letters, min 3 characters).");
        e.preventDefault();
      }
    });
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const thankYouMessage = document.getElementById("thankYouMessage");

    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Stop actual form submission
      thankYouMessage.style.display = "block"; // Show the thank you message
      form.reset(); // Optional: clear form fields
    });
  });
  }
});

// Toggle
const themeToggle = document.createElement('button');
themeToggle.innerText = 'Toggle Dark/Light Mode';
themeToggle.style.position = 'fixed';
themeToggle.style.top = '10px';
themeToggle.style.right = '10px';
themeToggle.style.padding = '10px';
themeToggle.style.zIndex = '999';
document.body.appendChild(themeToggle);

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Dark mode styles
const style = document.createElement('style');
style.innerHTML = `
  .dark-mode {
    background-color: #121212 !important;
    color: white !important;
  }

  .dark-mode input, .dark-mode textarea, .dark-mode select {
    background-color: #333 !important;
    color: white !important;
  }

  .dark-mode a {
    color: #9cf !important;
  }
`;
document.head.appendChild(style);

// Dynamic Content:Hide Project Details
document.addEventListener("DOMContentLoaded", function () {
  const projectBoxes = document.querySelectorAll('.box');

  projectBoxes.forEach(box => {
    box.style.cursor = 'pointer';
    const para = box.querySelector('p');
    if (para) para.style.display = 'none';

    box.addEventListener('click', () => {
      if (para.style.display === 'none') {
        para.style.display = 'block';
      } else {
        para.style.display = 'none';
      }
    });
  });
});

//  Access and Update DOM Elements
document.addEventListener("DOMContentLoaded", () => {
  const heading = document.getElementById("head");
  if (heading) {
    heading.textContent = "Updated Survey Form Heading!";
  }
});

// Event Listeners for Mouse Clicks and Input Focus
document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll("input, textarea");

  inputs.forEach(input => {
    input.addEventListener("focus", () => {
      input.style.border = "2px solid #007BFF";
    });

    input.addEventListener("blur", () => {
      input.style.border = "";
    });
  });

  const buttons = document.querySelectorAll("button");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      console.log("Button clicked:", btn.textContent);
    });
  });
});