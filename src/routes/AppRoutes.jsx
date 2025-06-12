import { Routes, Route } from "react-router-dom";
import App from "../App";
import Home from "../components/home";
import ProjectLayout from "../components/ProjectLayout";
import Counter from "../components/projects/project1/Counter";
import ToDoList from "../components/projects/project2/ToDoList";
import Menu from "../components/projects/project3/Menu";
import Calculator from "../components/projects/project4/Calculator";
import ThemeSwitcher from "../components/projects/project5/ThemeSwitcher";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>

      <Routes>
        <Route element={<ProjectLayout/>} />
        <Route path="/counter" element={<Counter/>} />
        <Route path="/todolist" element={<ToDoList/>} />
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/calci" element={<Calculator/>}/>
        <Route path="/theme" element={<ThemeSwitcher/>}/>
      </Routes>
    </>
  );
};

export default AppRoutes;
