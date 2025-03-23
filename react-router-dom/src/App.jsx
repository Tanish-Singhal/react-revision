import "./App.css";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import Post from "./pages/Posts";
import PostComments from "./pages/PostComments";
import Error from "./components/Error";
import Signup from "./components/Signup";
import Login from "./components/Login";
import RequireAuth from "./components/RequireAuth";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "signup",
            element: <Signup />,
          },
          {
            path: "login",
            element: <Login />,
          },
        ],
      },
      {
        path: "/posts",
        element: (
          <RequireAuth>
            <Post />
          </RequireAuth>
        ),
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

// Old Fashion React Router DOM

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<AppLayout />}>
//           <Route index element={<Home />} />
//           <Route path="/posts" element={<Post />} />
//           <Route path="/posts/:postId" element={<PostComments />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

export default App;
