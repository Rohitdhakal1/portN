import MethodBadge from "../ui/MethodBadge";

const Sidebar = () => {
    return (
        <aside className="flex flex-col gap-7 p-8 h-screen sticky top-0 border-r border-rust/30">
            <p className="text-xs font-mono text-muted">
                BASE_URL <span className="text-rust font-semibold">rohit</span>/api/v1
            </p>

            <div>
                <h1 className="text-5xl font-bold">
                    Rohit<span className="text-rust">.</span>
                </h1>
                <p className="font-mono text-sm mt-3">
                    <span className="inline-block w-2 h-2 mr-2 rounded-full bg-green-700 animate-pulse"></span>
                    Full-Stack Developer · open to work
                </p>
            </div>

            <p className="italic text-muted text-lg max-w-[26ch]">
                I build web apps end to end, from the screen you click to the server that answers.
            </p>

            <nav className="flex flex-col gap-1 font-mono text-sm">
                <a href="#home" className="flex items-center gap-2 px-2 py-1.5 rounded-lg border border-transparent hover:border-ink/10 hover:bg-white hover:translate-x-1 hover:scale-[1.02] transition">
                    <MethodBadge method="GET" />/
                </a>
                <a href="#about" className="flex items-center gap-2 px-2 py-1.5 rounded-lg border border-transparent hover:border-ink/10 hover:bg-white hover:translate-x-1 hover:scale-[1.02] transition">
                    <MethodBadge method="GET" />/about
                </a>
                <a href="#projects" className="flex items-center gap-2 px-2 py-1.5 rounded-lg border border-transparent hover:border-ink/10 hover:bg-white hover:translate-x-1 hover:scale-[1.02] transition">
                    < MethodBadge method="GET" />/projects
                </a >
                <a href="#offduty" className="flex items-center gap-2 px-2 py-1.5 rounded-lg border border-transparent hover:border-ink/10 hover:bg-white hover:translate-x-1 hover:scale-[1.02] transition">
                    < MethodBadge method="GET" />/off-duty
                </a >
                <a href="#contact" className="flex items-center gap-2 px-2 py-1.5 rounded-lg border border-transparent hover:border-ink/10 hover:bg-white hover:translate-x-1 hover:scale-[1.02] transition">
                    < MethodBadge method="POST" />/contact
                </a >
            </nav >

            <div className="flex gap-4 font-mono text-sm mt-auto">
                <a className="border-b-2 border-rust" href="#">GitHub</a>
                <a className="border-b-2 border-rust" href="#">LinkedIn</a>
                <a className="border-b-2 border-rust" href="#">Resume.pdf</a>
            </div>
        </aside >
    );
};

export default Sidebar;