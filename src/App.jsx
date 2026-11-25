import Sidebar from "./components/layout/Sidebar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import OffDuty from "./sections/OffDuty";
import Contact from "./sections/Contact";

const App = () => {
  return (
    <div className="grid grid-cols-[320px_1fr] min-h-screen">
      <Sidebar />
      <main className="w-full max-w-5xl mx-auto px-12 pb-24 flex flex-col gap-14">
        <Hero />
        <About />
        <Projects />
        <OffDuty />
        <Contact />
      </main>
    </div>
  );
};

export default App;