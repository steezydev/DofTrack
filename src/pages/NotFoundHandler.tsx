import { Navigate, useLocation } from "react-router-dom";

export default function NotFoundHandler({ to }: { to: string }) {
  const prevRoute = useLocation();
  return <Navigate to={to} state={{ prevRoute }} replace />;
}
