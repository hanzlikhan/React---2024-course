import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./routes/App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Bag from "./routes/Bag.jsx";
import { Home } from "./routes/Home.jsx";
import hanzalStore from "./store/index.js";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />, // Corrected Home component rendering
      },
      {
        path: "/bag",
        element: <Bag />,
      },
    ],
  },
]);

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <Provider store={hanzalStore}>
//       <RouterProvider router={router} />
//     </Provider>
//   </StrictMode>
// );
