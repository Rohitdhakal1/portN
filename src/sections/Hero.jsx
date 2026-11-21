import MethodBadge from "../components/ui/MethodBadge";
import Button from "../components/ui/Button";

const Hero = () => {
    return (
        <section id="home">
            <div className="flex item-center gap-2 self-start font-mono font-semibold bg-white border-2 border-ink rounded-lg px-4 py-2 shadow-[4px_4px_0_var(--color-ink)]">
                <MethodBadge method="GET" />
                <span>/</span>
                <span className="w-2 h-4 bg-rust animate-blink"></span>
            </div>
            <div>

                <p>// Welcome to</p>
                <h2>Rohit Builds <em>the whole stack.</em></h2>
                <p>Frontend, backend, and everything in between.This site works like an API: pick a section, hit send, see what comes back.</p>

            </div>

            <div>
                <Button href="#projects" variant="primary"></Button>
                <Button href="#contact" variant="outline"></Button>
            </div>
        </section>


    )
}

export default Hero;