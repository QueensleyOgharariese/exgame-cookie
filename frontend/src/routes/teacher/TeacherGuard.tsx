import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
interface TeacherGuardProps {
  isAuthenticated: boolean;
}

export const TeacherGuard: React.FC<TeacherGuardProps> = () => {

  const isAuthenticated  = 

  useEffect(() => {
 fetch('/users/me').then((user) =>
  }, [] );

  if (!isAuthenticated) {
    return <Outlet />;
  }

  return <Navigate to="/login" replace />;
};
