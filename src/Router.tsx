import { Navigate, Route, Routes } from "react-router-dom";
import { PRIVATE_ROUTE, PUBLIC_ROUTE } from "./core/constants/routePaths";
import Login from "./pages/login/Login";
import { useContext } from "react";
import { UserInformationContext } from "./core/authentication/context";
import Welcome from "./pages/Welcome";

const Router = () => {
  const { isLoggedIn } = useContext(UserInformationContext);

  const PublicRoutes = () => (
    <Routes>
      <Route path={PUBLIC_ROUTE.LOGIN} element={<Login />} />
      <Route path="*" element={<Navigate to={PUBLIC_ROUTE.LOGIN} replace />} />
    </Routes>
  );

  const PrivateRoutes = () => (
    <Routes>
      <Route path={PRIVATE_ROUTE.HOME} element={<Welcome />} />
      <Route path="*" element={<Navigate to={PRIVATE_ROUTE.HOME} replace />} />
    </Routes>
  );

  return (
    <Routes>
      {isLoggedIn ? (
        <Route path="*" element={<PrivateRoutes />} />
      ) : (
        <Route path="*" element={<PublicRoutes />} />
      )}
    </Routes>
  );
};

export default Router;
