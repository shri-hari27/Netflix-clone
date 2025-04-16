# Netflix Clone - React + Vite

This project is a clone of the popular streaming service Netflix, built using React and Vite. Users can browse a selection of movies and TV shows, and importantly, **play trailers directly by clicking on the movie/show cards.** User registration and authentication are implemented using **Firebase**.

## Technologies Used

* **React:** A JavaScript library for building user interfaces.
* **Vite:** A build tool that provides a fast and lean development experience for modern web projects.
* **Firebase:** For user registration and authentication.


## Features

* **Homepage:** Displays a hero banner and various categories of movies and TV shows.
* **Play Trailers:** **Users can click on movie and TV show cards to play their respective trailers directly within the application.**
* **User Registration:** New users can create an account using Firebase.
* **User Login:** Existing users can log in to access the content using Firebase authentication.
* **[Add any other implemented features, e.g., responsive design, movie detail page (if implemented), etc.]**

## Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/shri-hari27/Netflix-clone.git](https://github.com/shri-hari27/Netflix-clone.git)
    cd Netflix-clone
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Set up Firebase:**
    * Create a new project in the [Firebase Console](https://console.firebase.google.com/).
    * Enable Authentication (Email/Password).
    * Get your Firebase project configuration object.
    * Create a `.env` file in the root of your project and add your Firebase configuration as environment variables. **Replace the placeholder values with your actual Firebase credentials:**
        ```
        VITE_FIREBASE_API_KEY="YOUR_FIREBASE_API_KEY"
        VITE_FIREBASE_AUTH_DOMAIN="YOUR_FIREBASE_AUTH_DOMAIN"
        VITE_FIREBASE_PROJECT_ID="YOUR_FIREBASE_PROJECT_ID"
        VITE_FIREBASE_STORAGE_BUCKET="YOUR_FIREBASE_STORAGE_BUCKET"
        VITE_FIREBASE_MESSAGING_SENDER_ID="YOUR_FIREBASE_MESSAGING_SENDER_ID"
        VITE_FIREBASE_APP_ID="YOUR_FIREBASE_APP_ID"
        # Add other Firebase config if needed
        ```
    * **Important:** Ensure `.env` is listed in your `.gitignore` file to prevent committing sensitive Firebase credentials.

4.  **Start the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

5.  **Open your browser:**
    Go to `http://localhost:5173` (or the port specified in your terminal).

