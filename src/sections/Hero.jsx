import MethodBadge from "../components/ui/MethodBadge";
import Button from "../components/ui/Button";
import NowLog from "./NowLog";
import Routes from "./Routes";

const Hero = () => {
    return (
        <section id="home" className="flex flex-col gap-8 pt-20">
            <div className="flex w-fit items-center gap-2 self-start font-mono font-semibold bg-card border-2 border-ink rounded-lg px-4 py-2 shadow-[4px_4px_0_var(--color-ink)]">
                <MethodBadge method="GET" />
                <span>/</span>
                <span className="w-2 h-4 bg-rust animate-blink"></span>
            </div>

            <div>
                <p className="font-mono text-sm text-muted">// welcome to</p>
                <h2 className="text-7xl font-bold leading-none mt-2">
                    Rohit builds<br />
                    <em className="text-accent font-normal">the whole stack.</em>
                </h2>
                <p className="text-xl italic text-muted max-w-md mt-5">
                    Frontend, backend, and everything in between. This site works like an API: pick a section, hit send, see what comes back.
                </p>
            </div>

            <div className="flex gap-3">
                <Button href="#projects" variant="primary">Explore /projects ▶</Button>
                <Button href="#contact" variant="outline">POST /contact</Button>
            </div>

            <NowLog />
            <Routes />
        </section>
    );
};

export default Hero;