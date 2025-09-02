📦 User Directory – Fetch API Project

This project demonstrates how to fetch and display user data from a public API using JavaScript Fetch API.
It’s a simple web app that retrieves user details (name, email, and address) and displays them in a neat, card-based layout.

🎯 Objectives

Use Fetch API to request data from a public API

Parse and display the response dynamically on a webpage

Handle loading states and errors gracefully

Organize code into HTML, CSS, and JavaScript files for clarity

Add a reload button to refetch data

🛠️ Tech Stack

HTML5 → Page structure

CSS3 → Styling and responsive design

JavaScript (ES6+) → Fetch API, DOM updates, and error handling

🌐 API Used

Data is fetched from:
👉 https://jsonplaceholder.typicode.com/users

This is a free fake API often used for learning and testing.

✨ Features

✅ Fetches real-time user data from a public API
✅ Displays user name, email, and address in stylish cards
✅ Full-screen loading spinner while data is being fetched
✅ Error handling with clear messages if fetch fails (e.g., no internet)
✅ Reload button to refresh user data without reloading the page
✅ Responsive design – works on desktop and mobile

🚀 Getting Started
1. Clone the repo
git clone https://github.com/AbhijitRai2003/user-directory.git
cd user-directory

2. Open in VS Code (or any editor)
3. Run the project

Simply open index.html in your browser (no server required).

📂 Project Structure
project-folder/
│── index.html      # Main HTML file
│── style.css       # Styling
│── script.js       # JavaScript (Fetch API logic)


🧪 How to Test Error Handling

Run the project normally (it should fetch users).

Disconnect your internet or block the API URL.

Refresh or click “Refresh Data”.

You’ll see an error message displayed instead of data.

🙌 Acknowledgements

JSONPlaceholder
 for providing the free API

Inspiration from learning exercises in JavaScript Fetch API