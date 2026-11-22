import MethodBadge from "./MethodBadge";

const EndpointSection = ({ id, method, path, status, action, children }) => {
    return (
        <section id={id} className="scroll-mt-8">
            <div className="flex items-center gap-3 font-mono bg-white border-2 border-ink rounded-t-lg px-4 py-3">
                <MethodBadge method={method} />
                <span className="font-semibold">{path}</span>
                {action && <div className="ml-auto">{action}</div>}
            </div>

            <div className="bg-paper-2 border-2 border-t-0 border-ink rounded-b-lg shadow-[6px_6px_0_var(--color-ink)]">
                <div className="flex gap-4 font-mono text-xs text-muted px-4 py-2 border-b border-line">
                    {status}
                </div>
                <div className="p-6">{children}</div>
            </div>
        </section>
    );
};

export default EndpointSection;