import {  createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './routes/root';
import ErrorPage from './routes/error-page'
import Login from './routes/login'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "login",
        element: <Login />
      }
    ]
  },
]);

function App() {
  return (
    <div>
       <RouterProvider router={router} />
    </div>
  )
}
export default App;
