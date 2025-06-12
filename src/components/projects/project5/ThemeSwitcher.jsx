import { useState } from "react";
import Header from "../../Header";
export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("dark");

  const changeTheme = () => {
    if (theme === "dark") setTheme("light");
    else setTheme("dark");
  };
  return (
    <>
      <Header name={"click on image to switch theme"} />
      <main
        className={`${theme} bg-snow-white md:px-5 dark:bg-penguin-black flex-center gap-3 flex-col  sm:flex-row min-h-[100vh] flex-center `}
      >
        <h1 className="font-snow whitespace-nowrap dark:text-frost-mint text-glacier-teal  sm:text-shadow-xs text-shadow-ice-blue text-4xl leading-relaxed sm:text-6xl  text-center">
          React is Great!!!
        </h1>
        <img
          src={`./${theme}-peng.png`}
          alt="light"
          onClick={() => {
            changeTheme();
          }}
          className=" md:w-2/5 w-3/5 object-cover"
        />
      </main>
    </>
  );
}
