document.addEventListener("DOMContentLoaded", () => {
    const siteNameInput = document.getElementById("site-name");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const saveButton = document.getElementById("save-button");
    const eyeIcon = document.getElementById("eye-icon");
    const credentialsTable = document.getElementById("credentials-table").querySelector("tbody");
  
    let credentials = JSON.parse(localStorage.getItem("credentials")) || [];
  
    // Toggle Password Visibility
    eyeIcon.addEventListener("click", () => {
      const type = passwordInput.type === "password" ? "text" : "password";
      passwordInput.type = type;
    });
  
    // Render credentials table
    function renderTable() {
      credentialsTable.innerHTML = "";
      credentials.forEach((credential, index) => {
        const row = document.createElement("tr");
  
        row.innerHTML = `
          <td><a href="#" class="copyable" data-copy="${credential.siteName}">${credential.siteName}</a></td>
          <td><a href="#" class="copyable" data-copy="${credential.username}">${credential.username}</a></td>
          <td>
            <a href="#" class="copyable" data-copy="${credential.password}">${credential.password}</a>
          </td>
          <td>
            <button class="edit-button" data-index="${index}">Edit</button>
            <button class="delete-button" data-index="${index}">Delete</button>
          </td>
        `;
  
        credentialsTable.appendChild(row);
      });
    }
  
    // Add new credential
    saveButton.addEventListener("click", () => {
      const siteName = siteNameInput.value.trim();
      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();
  
      if (!siteName || !username || !password) {
        alert("Please fill out all fields.");
        return;
      }
  
      credentials.push({ siteName, username, password });
      localStorage.setItem("credentials", JSON.stringify(credentials));
  
      siteNameInput.value = "";
      usernameInput.value = "";
      passwordInput.value = "";
  
      renderTable();
    });
  
    // Handle edit and delete
    credentialsTable.addEventListener("click", (event) => {
      const target = event.target;
  
      if (target.classList.contains("delete-button")) {
        const index = target.dataset.index;
        credentials.splice(index, 1);
        localStorage.setItem("credentials", JSON.stringify(credentials));
        renderTable();
      }
  
      if (target.classList.contains("edit-button")) {
        const index = target.dataset.index;
        const credential = credentials[index];
  
        siteNameInput.value = credential.siteName;
        usernameInput.value = credential.username;
        passwordInput.value = credential.password;
  
        credentials.splice(index, 1);
        localStorage.setItem("credentials", JSON.stringify(credentials));
        renderTable();
      }
  
      if (target.classList.contains("copyable")) {
        copyToClipboard(target.dataset.copy);
      }
    });
  
    // Initial render
    renderTable();
  });
  
  // Copy to Clipboard and show "Copied" message
  function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
      const copiedMessage = document.getElementById("copied-message");
      copiedMessage.textContent = "Copied to clipboard!";
      copiedMessage.style.display = "block";
  
      // Hide message after 1 second
      setTimeout(() => {
        copiedMessage.style.display = "none";
      }, 1000);
    });
  }
