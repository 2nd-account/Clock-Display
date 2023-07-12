import React, { Suspense, useContext } from "react";
import { PageContext } from "../Context";
import { CiBrightnessDown, CiDark, CiMonitor } from "react-icons/ci";

function Settings() {
  const { setting, setSetting, theme, setTheme } = useContext(PageContext);

  const Toggle = () => {
    setSetting(!setting);
    console.log(setting);
  };

  const themes = [
    { icon: <CiBrightnessDown />, name: "Light" },
    { icon: <CiDark />, name: "Dark" },
    { icon: <CiMonitor />, name: "System" },
  ];

  const themeLocalStorage = (name) => {
    localStorage.setItem("theme", name);
    setTheme(name);
  };
  return (
    <>
      {
        <div
          className={`${
            setting ? "sm:w-full md:w-[300px] " : " sm:w-0 md:w-0 "
          } settings absolute top-0 right-0  h-full z-20 overflow-hidden pt-5 ${
            theme === "Dark" && " bg-[#061822]"
          } ${theme === "System" && "bg-[#f5f5f5] dark:bg-[#061822]"} `}
        >
          <section className=" flex ">
            <div
              onClick={Toggle}
              className={` w-fit text-gray-700 bg-white rounded-md mx-[20px] text-center cursor-pointer ${
                theme === "Dark" && " bg-[#062c41] text-[#fafafa]"
              } ${
                theme === "System" &&
                "bg-[#f5f5f5] dark:bg-[#062c41] dark:text-[#fafafa]"
              } `}
              style={{ padding: " .2em 1em", fontSize: "1em" }}
            >
              Close
            </div>
          </section>

          <section className=" mt-5 mx-[20px] mb-4">
            <p className=" min-w-[250px]" style={{ fontSize: "1em" }}>
              Choose a theme
            </p>
          </section>

          <main className=" grid grid-cols-1 gap-2 ">
            <section className=" grid gap-2 mx-[15px]">
              {themes.map((index) => (
                <div
                  key={index.name}
                  className={` flex items-center gap-2 rounded-md cursor-pointer bg-white ${
                    theme === "Dark" && "bg-[#0a2431]"
                  }  ${theme === "System" && "bg-[#fff] dark:bg-[#0a2431] "} `}
                  style={{ padding: ".3em 1em" }}
                  onClick={() => themeLocalStorage(index.name)}
                >
                  {index.icon}
                  <span style={{ fontSize: ".8em" }}>{index.name}</span>
                </div>
              ))}
            </section>
          </main>
        </div>
      }
    </>
  );
}

export default Settings;

{
  // localStorage.setItem("theme", "light")
  // localStorage.setItem("theme", "dark")
  // localStorage.setItem("theme", "system")
}
