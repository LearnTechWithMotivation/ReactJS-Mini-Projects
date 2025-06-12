import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="h-12 w-full px-2 sm:px-5 sm:h-16 sticky top-0 z-5  bg-flipper-gray/90 shadow-xs shadow-penguin-black">
      <ul className="h-full flex justify-between px-5">
        <li className="h-full">
          <Link to="/" className="flex justify-center items-center h-full">
            <img className="h-full object-contain" src="/logo.png" alt="" />
            <h2 className="text-white font-snow">React JS</h2>
          </Link>
        </li>

        <li className="flex justify-evenly underline underline-offset-2 gap-10 items-center text-beak-orange font-f2">
          <Link to="/">Home</Link>
          <Link>About me</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
