import { Link } from "react-router-dom";


const Header = ({name}) => {
  return (
    <nav className="px-2 z-10 sm:px-5 h-12 bg-flipper-gray shadow-xs shadow-penguin-black w-full">
      <ul className="bg-flipper-gray h-12 flex justify-between flex-wrap">
        <li className="h-full">
          <Link to="/" className="flex justify-center items-center h-full">
            <img className="h-full object-contain" src="/logo.png" alt="" />
            <h2 className="text-white font-snow">React JS</h2>
          </Link>
        </li>

        <li className="flex-center">
            <h1 className='font-f1 text-center text-md sm:text-2xl text-snow-white'
            >{name}</h1>
        </li>

        <li className="flex justify-evenly underline underline-offset-2 gap-5  md:gap-10 items-center text-beak-orange font-f2">
          <Link to="/">Home</Link>
          <Link>About me</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
