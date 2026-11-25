import { routes } from "../../data/routes";
import MethodBadge from "../ui/MethodBadge";
import Mascot from "../../common/Mascot";
import ThemeToggle from "../ThemeToggle";

const Sidebar = () => {
    return (
        <aside className="flex flex-col gap-7 p-8 h-screen sticky top-0 bg-paper">
            <div className="flex justify-between items-center gap-3">
                <p className="text-xs font-mono text-muted">
                    BASE_URL <span className="text-accent font-semibold">rohit</span>/api/v1
                </p>
                <ThemeToggle />
            </div>

            <div>
                <h1 className="text-5xl font-bold">
                    Rohit<span className="text-accent">.</span>
                </h1>
                <p className="font-mono text-sm mt-3">
                    <span className="inline-block w-2 h-2 mr-2 rounded-full bg-ok animate-pulse"></span>
                    Full-Stack Developer · open to work
                </p>
            </div>

            <p className="italic text-muted text-lg max-w-[26ch]">
                I build web apps end to end, from the screen you click to the server that answers.
            </p>

            <nav className="flex flex-col gap-1 font-mono text-sm">
                {routes.map((r) => (
                    <a
                        key={r.path}
                        href={r.href}
                        className="flex items-center gap-2 px-2 py-1.5 rounded-lg border border-transparent hover:border-ink/10 hover:bg-card hover:translate-x-1 hover:scale-[1.02] transition"
                    >
                        <MethodBadge method={r.method} />
                        {r.path}
                    </a>
                ))}
            </nav>

            <Mascot />

            <div className="flex gap-4 font-mono text-sm">
                <a className="border-b-2 border-rust" href="https://github.com/Rohitdhakal1" target="_blank" rel="noreferrer">GitHub</a>
                <a className="border-b-2 border-rust" href="https://www.linkedin.com/in/rohitdhakal/" target="_blank" rel="noreferrer">LinkedIn</a>
                <a className="border-b-2 border-rust" href="/Rohit_Dhakal_Resume.pdf" target="_blank" rel="noreferrer">Resume.pdf</a>
            </div>
        </aside>
    );
};

export default Sidebar;