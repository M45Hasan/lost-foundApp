import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";


import Home from "./pages/Home";
import Login from "./pages/Login";
import Regi from "./pages/Regi";
import Term from "./pages/Term";
import User from "./pages/User";

function App() {
  let router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Regi />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/term" element={<Term/>} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
