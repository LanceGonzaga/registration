# Signup & Login Form

A responsive signup and login form built with React. It uses controlled components, real-time validation, and shows success messages upon valid submissions. Includes a toggle between login and registration views.

## Live Demo

[Live Project Link](https://your-live-site-link.com)

## Technologies Used

* React
* HTML/CSS
* JavaScript (ES6+)

## Features

* Signup and login forms
* Real-time validation with inline error messages
* Success message on valid submission
* Controlled components using `useState`
* Responsive and centered layout

## Form Validation Approach

Validation is handled in real-time using functions triggered on input change or form submission.

## State Management Strategy

All form inputs and error messages are managed using the `useState` hook. The login/signup toggle is also controlled with `useState`.

## Project Structure

```
signup-login-form/
├── src/
│   ├── App.js
│   ├── styles.css
│   └── index.js
├── public/
│   └── index.html
├── README.md
└── package.json
```

## How to Run Locally

```bash
cd signup-login-form
npm install
npm run dev
```