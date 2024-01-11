import { Navigate, Route, Routes } from "react-router-dom";
import { PUBLIC_ROUTE } from "./constants/routePaths";
import Login from "./pages/login/Login";

const Router = () => {
  const PublicRoutes = () => (
    <Routes>
      <Route path={PUBLIC_ROUTE.LOGIN} element={<Login />} />
      <Route path="*" element={<Navigate to={PUBLIC_ROUTE.LOGIN} replace />} />
    </Routes>
  );

  return (
    <Routes>
      <Route path="*" element={<PublicRoutes />} />
    </Routes>
  );
};

export default Router;
