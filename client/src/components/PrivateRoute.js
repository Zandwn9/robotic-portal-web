import { AuthContext } from "../context/AuthProvider";
import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";

export default function PrivateRoute({ children, ...rest }) {
  const { user } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
