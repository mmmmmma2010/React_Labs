import { Route, Switch } from "react-router-dom";

import { Contact } from "./pages/Contact";
import { Posts } from "./pages/Posts";
import { UserDetails } from "./pages/UserDetails";
import { Users } from "./pages/Users";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { Login } from "./pages/Login";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import { Navbar } from "./components/Navbar/index";

export const App = () => {
  const authContext = useContext(AuthContext);
  return (
    <>
      {authContext.isLoggedIn && <Navbar />}
      <div className="container">
        <Switch>
         
       
          <Route path="/contact">
            <Contact />
          </Route>
          <ProtectedRoute path="/posts">
            <Posts />
          </ProtectedRoute>
          <Route path="/users/:id">
            <UserDetails />
          </Route>
          <ProtectedRoute path="/users">
            <Users />
          </ProtectedRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
          <Login />
          </Route>
        </Switch>
      </div>
    </>
  );
};
