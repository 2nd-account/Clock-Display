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
          theme === "Dark" && " bg-[#0a2431] "
        } `}
        onClick={Toggle}
      >
        <span
          className={` menu_indicator ${theme === "Dark" && " bg-[#fafafa]"} `}
        ></span>
      </Box>
    </nav>
  );
}
