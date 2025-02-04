import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./assets/styles/App.css";
import {
  About,
  Contactus,
  Home,
  HomeLayerOut,
  Service,
  Experience,
  Resume,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayerOut />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contactus",
        element: <Contactus />,
      },

      {
        path: "/Service",
        element: <Service />,
      },
      {
        path: "/Experience",
        element: <Experience />,
      },
      {
        path: "/Resume",
        element: <Resume />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
