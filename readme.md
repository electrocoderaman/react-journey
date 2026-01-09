# React Learning Journey ⚛️

This repository contains my code and exercises as I learn React. It documents my progress from understanding the basics to building functional components with advanced hooks, Context API, Redux Toolkit, and Tailwind CSS.

## 📂 Projects Included

| Project Folder        | Description                                                                              | Tech Stack            |
| :-------------------- | :--------------------------------------------------------------------------------------- | :-------------------- |
| **01vitereact**       | Setting up a faster React environment using Vite.                                        | React, Vite           |
| **customReact**       | A look under the hood at how React renders elements.                                     | Vanilla JS            |
| **counter**           | A classic counter app to learn State (`useState`) and Hooks.                             | React, Vite           |
| **tailwindProps**     | Learning how to pass Props and style components using Tailwind.                          | React, Vite, Tailwind |
| **backgroundChanger** | An interactive app to change background colors on click.                                 | React, Vite           |
| **passwordGenerator** | A password generator with length/character controls and copy-to-clipboard functionality. | React, Vite, Tailwind |
| **currencyConverter** | Real-time currency conversion using custom hooks and API integration.                    | React, Vite, Tailwind |
| **themeSwitcher**     | A theme toggler (Light/Dark mode) using the Context API to manage global state.          | React, Vite, Tailwind |
| **todoList**          | A Todo management app with CRUD operations using Context API and Local Storage.          | React, Vite, Tailwind |
| **reduxToolkitTodo**  | A scalable Todo app demonstrating state management using Redux Toolkit slices and store. | React, Redux Toolkit  |

## 🚀 How to Run These Projects

All projects in this repo use **Vite**. To run a specific project locally:

1.  **Clone the repository:**
    ```bash
     git clone https://github.com/electrocoderaman/react-journey.git
    ```

2.  **Navigate to the project folder:**
    ```bash
    cd reduxToolkitTodo  # (or any other folder name)
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

## 🛠️ Concepts Learned
* **Virtual DOM**: Understanding how React handles rendering efficiently.
* **JSX**: Writing HTML-like syntax inside JavaScript.
* **State Management**: Using `useState` to handle UI updates.
* **Side Effects**: Using `useEffect` to synchronize components (e.g., generating password on load or updating DOM classes for themes).
* **Optimization**: Using `useCallback` to cache functions and prevent unnecessary re-renders.
* **Refs**: Using `useRef` to access DOM elements directly (used for the clipboard feature).
* **Props**: Passing data between parent and child components.
* **Context API**: Managing global state (like theme mode) to avoid prop drilling.
* **Redux Toolkit**: Implementing complex global state management with `configureStore` and `createSlice`.
* **React-Redux**: Connecting components to the store using `Provider`, `useSelector` (reading data), and `useDispatch` (sending actions).
* **Tailwind CSS**: Utility-first styling for building modern UIs quickly (including Dark Mode configuration).
* **Custom Hooks**: Creating reusable logic functions (e.g., `useCurrencyInfo` for fetching data).
* **API Integration**: Fetching external data from JSON endpoints and handling responses.

---
*This repository is a work in progress (WIP).*