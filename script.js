// Wait until DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".booking form");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // stop page refresh

    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const date = form.querySelector('input[type="date"]').value;
    const message = form.querySelector("textarea").value.trim();

    // Basic validation
    if (name === "" || email === "" || date === "") {
      alert("Please fill in all required fields.");
      return;
    }

    // Email format check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Success message
    alert(
      `Thank you, ${name}! 📸\nYour booking request for ${date} has been received.`
    );

    // Reset form
    form.reset();
  });
});
