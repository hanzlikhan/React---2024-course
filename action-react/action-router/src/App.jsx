// src/App.js
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ContactForm } from "./components/ContactForm";
import { ThankYou } from "./components/ThankYou";
import { contactAction } from "./actions/contactAction";
import ErrorPage from "./components/ErrorPage"; // Import the ErrorPage component

const router = createBrowserRouter([
  {
    path: "/contact",
    element: <ContactForm />,
    action: contactAction, // Attach the action to this route
    errorElement: <ErrorPage />, // Set the error element for this route
  },
  {
    path: "/thank-you",
    element: <ThankYou />,
  },
  {
    path: "*", // Catch-all route for undefined paths
    element: <ErrorPage error={{ message: "404 Not Found" }} />, // Display custom 404 message
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
