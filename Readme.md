Bhootkal – Heritage Explorer

Bhootkal (meaning Past / History) is a simple, interactive web project designed to help users explore the historical marvels of Maharashtra using the What, Why, How model.
The project is built using HTML, CSS, and JavaScript, and includes navigation, dynamic page switching, a travel-tip generator, and a dark-mode toggle.

🌐 Project Overview

Heritage Explorer showcases three iconic historical sites of Maharashtra:

Shaniwar Wada

Sinhagad Fort

Ajanta Caves

Each section explains:

What the monument is

Why it was built or important

How it was constructed

The website uses interactive features to improve engagement and learning.

✨ Features
🧭 Dynamic Navigation

Navbar links load different content sections (Home, Shaniwar Wada, Sinhagad, Ajanta).

Navigation does not reload the page — switches using JavaScript.

💡 Random Travel Tip

A button on the home page generates a travel tip dynamically (via JavaScript in bhoot.js).

🌙 Dark Mode Toggle

Footer includes a button allowing users to switch between light and dark themes.

🧱 Modular Structure

HTML handles structure

CSS (bhoot.css) styles the layout and theme

JavaScript (bhoot.js) manages:

Page switching

Travel tips

Theme change

Highlighting the active nav link

📱 Responsive

Meta viewport ensures compatibility with mobile devices.

📁 Project Structure
/
│── index.html        # Main webpage
│── bhoot.css         # Stylesheet for layout and theming
│── bhoot.js          # JavaScript for interactivity
│── README.md         # Project documentation

🚀 How to Run the Project

Download or clone the project folder.

Make sure the following files are in the same directory:

index.html

bhoot.css

bhoot.js

Open index.html in any web browser (Chrome, Edge, Firefox, etc.).

Interact using the navigation menu and on-page buttons.

🔧 Technical Explanation
Navigation Switching

Each nav link calls:

showPage('home')


This hides other sections and shows only the selected section using CSS (e.g., .hidden { display: none; }).

Travel Tip Button

A button with ID:

#tip-btn


updates:

#tip-text


with random tips stored in an array inside bhoot.js.

Dark Mode

The button:

#theme-toggle


toggles a CSS class on the <body> to switch themes.

🎯 Purpose of the Project

This project appears to be a first-year Web Technologies assignment meant to demonstrate:

Semantic HTML

DOM manipulation

Event listeners

Layout + styling

Basic interactive features

It successfully combines education + interactivity in a clean way.

📜 License

This project is free to use for academic or learning purposes.
