import React, { Suspense, lazy, useRef, useState } from "react";
import "./App.css";
import { Page } from "./components/CustomTags";
import NavBar from "./components/NavBar";
import bgImage from "./assets/images/white-background-1.jpg";
import { PageContext } from "./Context";

import { RxCross2 } from "react-icons/rx";

const Clock = lazy(() => import("./clock/Clock"));
const Settings = lazy(() => import("./components/Settings"));

function App() {
  let current = localStorage.getItem("theme");

  const [setting, setSetting] = useState(false);
  const [theme, setTheme] = useState(current);

  // LocalStorage

  console.log(current);

  return (
    <PageContext.Provider value={{ setting, setSetting, theme, setTheme }}>
      <Page
        className={` fixed top-0 left-0 w-screen h-screen pb-5  ${
          theme === "Dark" && "bg-[#041016] text-[#fafafa]"
        } ${
          theme === "System" &&
          "bg-[#fafafa] dark:bg-[#041016] dark:text-[#fafafa]"
        } ${theme === "Light" && "bg-[#fafafa] "} `}
      >
        <section className=" relative w-full h-full max-w-[1000px] mx-auto ">
          <NavBar />

          <main className=" relative w-full h-full flex items-center justify-center ">
            <Suspense fallback={<p>Loading...</p>}>
              <Clock Clock={1} />

              <Settings />
            </Suspense>
          </main>
        </section>
      </Page>
    </PageContext.Provider>
  );
}

export default App;
