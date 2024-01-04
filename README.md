# React Library Application

Welcome to the documentation for our React-based library application! This library app allows users to explore, discover, and purchase books. The main functionalities include browsing featured books, exploring various genres, viewing book details, managing a shopping cart, and more.

## Table of Contents
* [Installation](#installation)
* [File Structure](#file-structure)
* [Components](#components)
* [State Management](#state-management)
* [Routing](#routing)
* [Hooks](#hooks)

## Installation
To get started with the application, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/library-app.git
    ```

2. Install dependencies:

    ```bash
    cd library-app
    npm install
    ```

3. Run the application:

    ```bash
    npm start
    ```

Now you should have the application up and running locally!

## File Structure
The key files and directories in the project include:

- `src/components`: Contains individual React components.
- `src/pages`: Holds the main page components like Home, Books, BookInfo, and Cart.
- `src/data.js`: Provides sample book data.
- `src/index.css`: Stylesheet for the application.
- `src/App.js`: The main entry point of the application.

## Components
The application is composed of several React components, each serving a specific purpose. Here's a brief overview of some key components:

- `Discounted`: Component for displaying discounted books.
- `Explore`: Component for exploring books by genre.
- `Featured`: Component showcasing featured books.
- `Highlights`: Component displaying book highlights.
- `Landing`: Component for the landing page.
- `Nav`: Navigation bar component.
- `Footer`: Footer component.
- `Home`: Home page component.
- `Books`: Component for displaying a list of books.
- `BookInfo`: Component for detailed information about a specific book.
- `Cart`: Component for managing the shopping cart.

## State Management
### Cart State
The `App` component manages the cart state using the `useState` hook. The cart state is an array containing book objects with an added quantity property to represent the number of items in the cart.

Functions for cart management:

- `addToCart`: Adds a book to the cart.
- `changeQuantity`: Modifies the quantity of a specific book in the cart.
- `removeItem`: Removes a book from the cart.

The cart state is passed down to relevant components to ensure a consistent view of the shopping cart throughout the application.

### Skeleton Loading State
The application provides a seamless user experience by implementing skeleton loading states. These states are displayed while the content is being fetched, ensuring a visually appealing transition for the user.

## Routing
The application uses the `react-router-dom` library for navigation. The `Routes` component in the `App` file defines the different routes, each associated with a specific page component.

Example routes:

- `/`: Home page
- `/books`: Books page
- `/books/:id`: Book details page
- `/cart`: Shopping cart page

## Hooks
The `useEffect` hook is utilized to log the cart state whenever it changes. This can be helpful for debugging and monitoring changes to the shopping cart in real-time.

```javascript
useEffect(() => {
  console.log(cart);
}, [cart]);
