import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './routes/root';
import ErrorPage from './routes/error-page'
import Login from './routes/login'
import Lists from "./routes/lists";
import Register from "./routes/register";
import Profile from "./routes/profile";
import Grid from "@mui/material/Grid";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "login",
        element: <Login />
      },
      {
        path: "lists",
        element: <Lists />
      },
      {
        path: "profile",
        element: <Profile />
      },
      {
        path: "register",
        element: <Register />
      }
    ],
  }
]);

function App() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-end"
      alignItems="center"
    >
      <RouterProvider router={router} />
    </Grid>
  )
}
export default App;
