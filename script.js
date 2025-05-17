// script.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    // You can later send this to backend using fetch()
    console.log("Message Sent:", { name, email, message });

    alert("Thanks for contacting us! We'll get back to you soon.");

    form.reset();
  });
});
