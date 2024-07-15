import logo from "./logo.svg";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterScreen from "./pages/RegisterScreen";
import CoursesPage from "./pages/CoursesPage";
import CreateCoursePage from "./pages/CreateCoursePage";
import ViewCourse from "./pages/ViewCourse";
import PrivateRoutes from "./context/PrivateRoute";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route index element={<HomePage />} />

          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/newcourse" element={<CreateCoursePage />} />
          <Route path="/viewcourse/:id" element={<ViewCourse />} />
        </Route>

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterScreen />} />
      </Routes>
    </div>
  );
}

export default App;
