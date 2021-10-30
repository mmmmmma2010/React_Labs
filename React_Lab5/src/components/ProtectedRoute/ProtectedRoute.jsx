import { Route, Redirect } from "react-router-dom";
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';

export const ProtectedRoute = ({ path, children }) => {
  const authContext = useContext(AuthContext)

  return authContext.isLoggedIn ? (
    <Route path={path}>{children}</Route>
  ) : (
    <Route path="/">
      <Redirect to="/login" />
    </Route>
  );
};
