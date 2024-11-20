# Zawadi App

Zawadi App is a React + TypeScript application built with Vite. It provides a dashboard that displays a hierarchical list of employees. Managers can be expanded to show the employees under them. Users can add new employees through a form that collects the employee's name, role, and manager.

## Features

- **Hierarchical Employee List**: View employees organized under their respective managers.
- **Add Employees**: Use a form to add new employees by specifying their name, role, and manager.
- **Interactive UI**: Expand and collapse managers to show or hide their employees.

## Setup

Follow these steps to get the Zawadi App running on your local machine:

### Prerequisites

- Node.js (version 14 or later)
- yarn (version 1.22 or later)

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/nerdychap/zawadi-app.git
    cd zawadi-app
    ```

2. **Install dependencies**:
    ```bash
    yarn install
    ```

### Running the App

1. **Start the development server**:
    ```bash
    yarn dev
    ```

2. Open your browser and navigate to `http://localhost:5173` to see the app in action.

### Building for Production

1. **Build the app**:
    ```bash
    yarn build
    ```

2. **Preview the production build**:
    ```bash
    yarn preview
    ```