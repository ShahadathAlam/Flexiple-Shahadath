# Flexiple React App

This is a React web application for the **Flexiple** project. It allows users to explore and hire developers, find jobs, and view relevant content on the platform.

## Features

- **Responsive Navbar**: A collapsible menu for navigation.
- **Hire Developers Section**: Browse developers based on skills and availability.
- **Reusable Components**: Reusable Button, Card, and Footer components with Tailwind CSS for styling.
- **Sticky Sidebar**: Sticky card component that remains visible when scrolling.
- **Icons**: React Icons integration for adding various icons.

## Technologies Used

- React
- Tailwind CSS
- React Icons
- JSX/ES6

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/flexiple-react-app.git
```

### 2. Install dependencies

- Navigate to the project directory and run:
  -npm install

### 3.Set up Tailwind CSS (If not already set up)

- If Tailwind is not already set up, run:
- npm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init
- @tailwind base;
- @tailwind components;
- @tailwind utilities;

### 4. Run the app

- npm start

### Folder Structure

- /src
- components - Reusable components like Button, Navbar, etc.
- pages - Different views like Home, HireDevelopers, etc.
- assets - Static assets like images, fonts, etc.
- App.js - Main component that renders everything.
- index.js - Entry point for the app.
- index.css - Global styles (using Tailwind CSS).
- tailwind.config.js - Tailwind CSS configuration file.
- package.json - Project dependencies and scripts.

### Usage

- The project uses Tailwind CSS for styling, so you can customize your styles in tailwind.config.js and index.css.
- Reusable components like buttons, cards, and navigations are defined in the components folder.
- Pages are configured in the pages folder.
- You can add your own components and extend functionality as per your requirement.

### Dependencies

- react: Version 18.0.0
- react-dom: Version 18.0.0
- tailwindcss: Version 3.0.0
- react-icons: Version 4.2.0
- react-router-dom: Version 6.4.0
