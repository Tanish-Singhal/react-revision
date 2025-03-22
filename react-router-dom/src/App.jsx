import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import Post from "./pages/Posts";
import PostComments from "./pages/PostComments";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/posts",
        element: <Post />,
      },
      {
        path: "/posts/:postId",
        element: <PostComments />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
