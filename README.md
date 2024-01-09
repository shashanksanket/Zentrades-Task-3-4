# SmartServ Login Dashboard Application

This is a React application designed to implement a login dashboard with specified functionality. The application includes a login page with email validation and password complexity requirements. Upon successful login, users are redirected to a dashboard page that displays actual components like charts and dropdowns.

## Problem Statement

### Login Page

#### Features:

1. The login page should look like the provided image: [login_page.png](path/to/login_page.png).

2. The username field should only accept an email format. The validation should happen through JavaScript.

3. The password field must be a masked field and should not reveal what's being entered.

4. The password field should not accept any special character other than '@' and must contain an uppercase letter and a number.

5. Entering the password as 'SmartServTest@123' should redirect the user to a dashboard page. Any other password should throw an error.

6. Clicking on the "Forgot your password" link should open any email client to send an email to support@smartserv.io for resetting the password.

#### Deliverables:

- Hosting URL on Heroku / Github pages.
- Github repository link to your solution.
- Time taken to complete this.

### Dashboard Page

#### Features:

1. The dashboard page should look like the provided image: [dashboard2.png](path/to/dashboard2.png).

2. All components on the dashboard page must be actual components like charts and dropdowns. No image use is allowed.

#### Deliverables:

- Hosting URL on Heroku / Github pages.
- Github repository link to your solution.
- Time taken to complete this.

### Live Link:
https://shashanksanket.github.io/Zentrades-Task-3n4/

## Getting Started

Follow these steps to set up and run the application:

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/shashanksanket/Zentrades-Task-3-4.git
   ```

2. Change into the project directory:

   ```bash
   cd task3
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Usage

1. Run the application:

   ```bash
   npm start
   ```

2. Open your web browser and navigate to [http://localhost:3000](http://localhost:3000).

3. Follow the on-screen instructions to use the login page and explore the dashboard.

## Components

### Login

The `Login` component is responsible for rendering the login page with specified functionality.

### Dashboard

The `Dashboard` component displays actual components like charts and dropdowns, following the provided design.

### ApexChart

The `ApexChart` component is a reusable component for rendering progress bar graphs using ApexCharts.

## Folder Structure

```
|-- public
|-- src
    |-- assets
        |-- logo.png
    |-- components
        |-- login.js
        |-- dashboard.js
        |-- progressBarGraph.js
    |-- App.css
    |-- App.js
    |-- index.css
    |-- index.js
|-- .gitignore
|-- package.json
|-- README.md
```

## Dependencies

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [ApexCharts](https://apexcharts.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to [ApexCharts](https://apexcharts.com/) for providing a powerful charting library.
- Built with [React](https://reactjs.org/) and [Tailwind CSS](https://tailwindcss.com/).

---
##Images
<img width="1440" alt="Screenshot 2024-01-10 at 4 13 36 AM" src="https://github.com/shashanksanket/Zentrades-Task-3n4/assets/40575030/ba5e91ce-c43b-496d-bdac-4c796ac842b4">

<img width="1440" alt="Screenshot 2024-01-10 at 4 13 58 AM" src="https://github.com/shashanksanket/Zentrades-Task-3n4/assets/40575030/c707f2a6-7654-422a-b422-e10b23762a46">
