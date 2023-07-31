import { getUserAuthData } from "entities/User";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

function RequireAuth({ children }: { children: JSX.Element }) {
  let auth = useSelector(getUserAuthData);
  const location = useLocation();

  if (!auth) {
    // Redirect the user to login page, but save the current location
    // when logged in redirect them to saved page

    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }

  return children;
}
