**Website Password Manager Chrome Extension**

The Website Password Manager Chrome Extension is a browser extension designed to securely save, manage, and retrieve website credentials. It provides a convenient way to store site names, usernames, and passwords directly within your browser while allowing easy navigation and editing of saved entries.


**Features**
**Core Features**
**Credential Management:**

* Save site names, usernames, and passwords.
* Edit or delete saved credentials.
* Auto-Fill and Manual Entry:

* Automatically capture login credentials during website submission (optional).
* Manually add site credentials through the extension interface.
Navigation:
* Click on a saved site name to navigate directly to the website.

**Copy Functionality:**

* Click the username or password in the list to copy it to the clipboard.
* A "Copied!" notification is displayed briefly after clicking.

**Secure Password Display:**

* Passwords are hidden by default and can be revealed by clicking the eye icon inside the input field.

**Responsive Interface:**

* Designed to work seamlessly on all screen sizes.

**Persistent Data Storage:**

Uses Chrome’s chrome.storage.sync or chrome.storage.local for saving credentials, ensuring data is retained across sessions.

**Installation**

Step 1: Download or Clone the Repository


**Copy code**
git clone https://github.com/your-repo/website-password-manager-extension.git

Step 2: Load the Extension in Chrome
Open Chrome and navigate to chrome://extensions/.

Enable Developer mode in the top-right corner.

Click Load unpacked and select the folder containing the extension files.

**Usage**

**Adding Credentials**

* Open the extension by clicking its icon in the Chrome toolbar.
* Enter the Site Name, Username, and Password.
* Click the Save button to store the credential.
  
**  Editing or Deleting Credentials** 

* In the extension popup, view the saved credentials in a table.
* Use the Edit or Delete buttons to modify or remove entries.
  
**Navigating to Websites**

Click on the Site Name in the saved credentials list to open the website in a new tab.

**Copying Credentials**
Click on the Username or Password fields to copy the text.
A "Copied!" message will appear briefly.
