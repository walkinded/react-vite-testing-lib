import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import UserDetailsPage from "../pages/UserDetailsPage";
import UsersPage from "../pages/UsersPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/users/:id" element={<UserDetailsPage />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRouter;
