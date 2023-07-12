import React, { useContext } from "react";
import { Box } from "./CustomTags";
import "../App.css";
import { PageContext } from "../Context";

export default function NavBar() {
  const { setting, setSetting, theme, setTheme } = useContext(PageContext);

  function Toggle() {
    setSetting(!setting);
    console.log(setting);
  }

  return (
    <nav
      className={` absolute navbar top-0 left-0 w-full flex justify-between pt-5 z-10 `}
    >
      <p
        className=" w-fit py-[5px] pl-[20px] rounded-md  "
        style={{ fontSize: "1.2em" }}
      >
        Clock Display
      </p>

      <Box
        className={` menu cursor-pointer ${
          theme === "Dark" && " bg-[rgb(10,36,49)] "
        }  ${
          theme === "System" && " bg-[rgb(255,255,255)] dark:bg-[rgb(10,36,49)]"
        } `}
        onClick={Toggle}
      >
        <span
          className={` menu_indicator ${
            theme === "Dark" && " bg-[rgb(250,250,250)]"
          } ${
            theme === "System" && " dark:bg-[rgb(250,250,250)] bg-[rgb(0,0,0)]"
          } `}
        ></span>
      </Box>
    </nav>
  );
}
