# Star Rating Component in Vue 3

## Objective
This project aims to create a star rating component using Vue 3 that allows users to rate artworks on a scale of 1 to 5 stars in the following categories:

- **Fits to my Wall**
- **That's my Style**
- **Enjoy this Artist**

## Features
- A separate component for each category with a 1-5 star rating system.
- Interactive and responsive UI where users can select the number of stars for each category.
- A reactive Vue 3 component that tracks user selections and displays the ratings.
- Easily customizable to add more categories in the future.

## Installation

Follow these steps to get started with the project:

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v14.x or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) (optional)

### Steps

1. Clone the repository:
    ```bash
    git clone <repository-url>
    ```

2. Navigate into the project directory and install the necessary dependencies:
    ```bash
    cd <project-directory>
    npm install
    ```

3. Run the development server:
    ```bash
    npm run dev
    ```

4. Open the app in your browser:
   Visit [http://localhost:5173](http://localhost:5173) to interact with the star rating component.

## Build & Static Deployment

To prepare your app for production, follow these steps to create a static build:

1. Create the production-ready build:
    ```bash
    npm run build
    ```

2. The build files will be generated in the `dist/` directory.

3. You can deploy these files to any static hosting service (e.g., [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/), or a traditional web server).

## Testing

### Unit Tests
For unit testing, run the following command:
```bash
npm run test:unit
```

### End-to-End (E2E) Testing
To run end-to-end tests, use:
```bash
npm run test:e2e
```
Add :dev at the end if testing on dev envirment