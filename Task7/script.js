const container = document.getElementById("users");
const refreshBtn = document.getElementById("refresh");
const statusMsg = document.getElementById("status");
const loadingOverlay = document.getElementById("loading-overlay");

// Fetch data from API and display
async function loadUsers() {
  container.innerHTML = "";     
  statusMsg.textContent = "";  
  loadingOverlay.classList.remove("hidden"); // Show overlay

  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    let data = await response.json();

    // Hide overlay once data is ready
    loadingOverlay.classList.add("hidden");

    data.forEach(user => {
      let card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <h2>${user.name}</h2>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Location:</strong> ${user.address.street}, ${user.address.city}</p>
      `;

      container.appendChild(card);
    });

  } catch (err) {
    console.error(err);
    loadingOverlay.classList.add("hidden"); // Hide overlay if error
    statusMsg.textContent = "⚠️ Unable to retrieve user details. Check your internet connection.";
  }
}

// Reload data when button is clicked
refreshBtn.addEventListener("click", loadUsers);

// Load on first visit
loadUsers();
