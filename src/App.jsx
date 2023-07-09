import "./App.css";
import { Page } from "./components/CustomTags";
import NavBar from "./components/NavBar";
import bgImage from "./assets/images/white-background-1.jpg";
import DigtalClock_One from "./clock/DigtalClock_One";

function App() {
  return (
    <Page className=" fixed top-0 left-0 w-screen h-screen pt-5 pb-10 bg-[#fafafa] ">
      <section className=" relative w-full h-full max-w-[1000px] mx-auto ">
        <NavBar />

        <main className=" w-full h-full flex items-center justify-center">
          <DigtalClock_One />
        </main>
      </section>
    </Page>
  );
}

export default App;
