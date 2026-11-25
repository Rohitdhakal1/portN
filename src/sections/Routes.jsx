import MethodBadge from "../components/ui/MethodBadge";
import { routes } from "../data/routes";

const Routes = () => {
    return (
        <div className="bg-paper-2 border-1 border-ink rounded-lg overflow-hidden">
            <div className="font-mono text-[11px] uppercase tracking-wide text-muted px-4 py-2.5 border-b border-line">
                available endpoints
            </div>

            {routes
                .filter((r) => r.path !== "/")
                .map((r) => (
                    <a
                        key={r.path}
                        href={r.href}
                        className="grid grid-cols-[54px_110px_1fr] items-center gap-3 px-4 py-3 font-mono text-sm border-b border-dashed border-line last:border-b-0 hover:bg-card hover:pl-6 transition-all"
                    >
                        <MethodBadge method={r.method} />
                        <span>{r.path}</span>
                        <span className="font-serif italic text-muted text-[15px]">{r.desc}</span>
                    </a>
                ))}
        </div>
    );
};

export default Routes;