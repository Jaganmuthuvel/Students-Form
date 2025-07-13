
window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("studentForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const genderInput = document.querySelector('input[name="gender"]:checked');
    const course = document.getElementById("course").value;
    const email = document.getElementById("email").value;

    if (!genderInput) {
      alert("Please select gender.");
      return;
    }

    const gender = genderInput.value;

    const li = document.createElement("li");
    li.className = "student-entry";
    li.innerHTML = `
      <p><strong>Name:</strong> ${name} | <strong>Age:</strong> ${age} | 
      <strong>Gender:</strong> ${gender} | 
      <strong>Course:</strong> ${course} | 
      <strong>Email:</strong> ${email}</p>
      <button onclick="deleteEntry(this)">Delete</button>
    `;

    document.getElementById("studentsList").appendChild(li);
    form.reset();
  });
});

function deleteEntry(button) {
  button.parentElement.remove();
}
