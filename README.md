# AngularJS Client Management System

A simple and responsive client management system built with AngularJS. This project includes features for listing, adding, and deleting clients, with a user-friendly interface and mobile responsiveness.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Live Demo](#live-demo)
- [Screenshots](#screenshots)

---

## Features
- **Client List:** View a list of clients with real-time filtering.
- **Add Client:** Fill out a form to add new clients with validations.
- **Delete Client:** Remove existing clients with a simple button click.
- **Mobile-Responsive:** Fully optimized for mobile and desktop views.
- **Search Feature:** Filter clients dynamically by name, email, or document.

---

## Technologies Used
- **Frontend Framework:** [AngularJS](https://angularjs.org/)
- **Styling:** Bootstrap 5 & Custom CSS
- **Deployment Platform:** [Vercel](https://vercel.com/)

---

## Getting Started

### Prerequisites
To run this project locally, you will need:
- Node.js and npm installed on your machine
- A basic understanding of AngularJS

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/enzopatriarca/angularjs-project.git
2.Navigate to the project directory:
cd angularjs-project/app

3.Open the index.html file in your browser to preview the application.

app/
├── assets/
│   ├── css/                # Global and component-specific styles
│   ├── fonts/              # Fonts used in the project
│   └── images/             # Images and icons
├── components/
│   ├── footer/             # Footer HTML, CSS, and controller
│   ├── navbar/             # Navbar HTML, CSS, and controller
├── modules/
│   └── client/
│       ├── form/           # Add Client form
│       └── list/           # Client listing table
├── shared/
│   ├── directives/         # AngularJS custom directives
│   └── filters/            # AngularJS filters for formatting
├── vendor/                 # External libraries and dependencies
├── app.module.js           # Main AngularJS module
├── app.routes.js           # Application routing
└── index.html              # Main HTML entry point


4 Live demo 
The project is deployed on Vercel. You can access it at: https://angularjsprojectsofttienzo.vercel.app/#/list

License
This project is open-source and available under the MIT License.

Acknowledgments
AngularJS for the framework.
Bootstrap 5 for responsive styling.
Vercel for seamless deployment.
