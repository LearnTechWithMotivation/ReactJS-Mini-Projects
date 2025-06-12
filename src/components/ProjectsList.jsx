import { BiSolidCalculator } from "react-icons/bi";
import { CgDarkMode } from "react-icons/cg";
import { IoFastFoodSharp } from "react-icons/io5";
import { LuListTodo } from "react-icons/lu";
import { TbPlusMinus } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";

const ProjectsList = () => {
  return (
    <section className="w-[90%] font-f2 bg-glacier-teal  m-auto opacity-80 p-2 gap-4 orange-ring mt-10 text-center grid  grid-cols-2 sm:grid-cols-4 ">
      <div className="project">
        <TbPlusMinus className="project-icon" />
        <Link to='/counter'
         >Counter</Link>
      </div>
      <div className="project  "><LuListTodo className="project-icon" /><Link to='/todolist'>
      ToDo List</Link></div>
      <div className="project"><IoFastFoodSharp className="project-icon"/><Link to={"/menu"}>Food Menu</Link></div>
      <div className="project"><BiSolidCalculator className="project-icon"/><Link to={"/calci"}>Calculator</Link></div>
      <div className="project"><CgDarkMode className="project-icon" /><Link to={"/theme"}>Theme Switcher</Link></div>
      {/* <div className="project">project name</div>
      <div className="project">project name</div>
      <div className="project">project name</div>
      <div className="project">project name</div>
      <div className="project">project name</div> */}
    </section>
  );
};

export default ProjectsList;
