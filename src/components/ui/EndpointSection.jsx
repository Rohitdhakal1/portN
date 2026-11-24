import MethodBadge from "./MethodBadge";

const EndpointSection = ({ id, method, path, query, request, meta, status, children }) => {
    const statusLine = request ? (
        request.loading ? (
            <span className="text-accent font-bold">pending…</span>
        ) : request.error ? (
            <span className="text-red-700 font-bold">500 failed</span>
        ) : (
            <>
                <span className="text-ok font-bold">200 OK</span>
                <span>{request.ms} ms</span>
                {meta && <span>{meta}</span>}
            </>
        )
    ) : (
        status
    );

    return (
        <section id={id} className="scroll-mt-8">
            <div className="flex items-center gap-3 font-mono bg-card border-2 border-ink rounded-t-lg px-4 py-3">
                <MethodBadge method={method} />
                <span className="font-semibold">{path}</span>
                {query && <span className="text-xs text-muted">{query}</span>}
                {request && (
                    <button
                        onClick={request.load}
                        disabled={request.loading}
                        className="ml-auto font-mono text-xs font-semibold bg-ink text-paper rounded-md px-3 py-1.5 hover:bg-rust disabled:opacity-50 transition"
                    >
                        {request.loading ? "Sending…" : "Send ▶"}
                    </button>
                )}
            </div>

            <div className="bg-paper-2 border-2 border-t-0 border-ink rounded-b-lg shadow-[6px_6px_0_var(--color-ink)]">
                <div className="flex gap-4 font-mono text-xs text-muted px-4 py-2 border-b border-line">
                    {statusLine}
                </div>
                <div className="p-5">{children}</div>
            </div>
        </section>
    );
};

export default EndpointSection;