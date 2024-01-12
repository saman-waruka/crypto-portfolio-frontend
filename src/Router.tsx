import { Navigate, Route, Routes } from "react-router-dom";
import { PRIVATE_ROUTE, PUBLIC_ROUTE } from "./core/constants/routePaths";
import Login from "./pages/login";
import { useContext } from "react";
import { UserInformationContext } from "./core/authentication/context";
import Dashboard from "./pages/dashboard";
import Layout from "./components/Layout";
import Portfolio from "./pages/portfolio";
import Profile from "./pages/profile";

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
      <Route path="/" element={<Layout />}>
        <Route index path={PRIVATE_ROUTE.HOME} element={<Dashboard />} />
        <Route path={PRIVATE_ROUTE.PORTFOLIO} element={<Portfolio />} />
        <Route path={PRIVATE_ROUTE.PROFILE} element={<Profile />} />
        <Route
          path="*"
          element={<Navigate to={PRIVATE_ROUTE.HOME} replace />}
        />
      </Route>
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
