import React from "react";
import { Box } from "./CustomTags";

export default function NavBar() {
  return (
    <nav className=" absolute top-0 left-0 w-full flex justify-between items-center ">
      <p
        className=" w-fit py-[10px] px-[4%] rounded-md text-[18px] bg-white"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
        }}
      >
        Clock Display
      </p>

      <Box className=" menu">
        <i className=" menu_indicator relative block w-[30px] h-[2px] bg-gray-900 rounded-md "></i>
      </Box>
    </nav>
  );
}
