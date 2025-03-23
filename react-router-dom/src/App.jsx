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
