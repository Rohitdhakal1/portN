import { useEffect, useState } from "react";

import MethodBadge from "./ui/MethodBadge";

const endpoints = [
    { label: './about', url: '/api/about.json' },
    { label: './projects', url: '/api/projects.json' },
    { label: './off-duty', url: '/api/off-duty.json' }
];

const prettyJson = (obj) =>
    JSON.stringify(obj, null, 2).replace(
        /\[\s+([^\]\[{}]*?)\s+\]/g,
        (match, inside) => "[" + inside.replace(/\s*\n\s*/g, " ") + "]"
    );

const MiniPostmen = () => {
    const [selected, setSelected] = useState(endpoints[0].url);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null); // for status , ms , size , body

    const send = async () => {
        setLoading(true);
        const start = performance.now();
        try {
            const res = await fetch(selected, { cache: "no-store" });
            if (!res.ok) throw new Error(res.status);
            const text = await res.text();
            const ms = Math.round(performance.now() - start);
            setResult({ status: res.status, ms, size: text.length, body: prettyJson(JSON.parse(text)) });
        } catch (error) {
            setResult({ status: "ERR", ms: null, size: 0, body: "// request failed" });
        }
        setLoading(false);
    };

    useEffect(() => {
        send();
    }, []);

    return (
        <div className="bg-card border-2 border-ink rounded-xl overflow-hidden shadow-[7px_7px_0_var(--color-rust)] font-mono text-sm">
            <div className="flex items-center gap-2 px-3 py-2.5 border-b border-line">
                <MethodBadge method="GET" />
                <select
                    value={selected}
                    onChange={(e) => setSelected(e.target.value)}
                    aria-label="Endpoint"
                    className="flex-1 min-w-0 font-semibold bg-paper text-ink border border-line rounded-md px-2 py-1.5 cursor-pointer"
                >
                    {endpoints.map((ep) => (
                        <option key={ep.url} value={ep.url}>{ep.label}</option>
                    ))}
                </select>
                <button
                    onClick={send}
                    disabled={loading}
                    className="bg-rust text-white text-xs font-bold rounded-md px-3 py-2 hover:-translate-y-0.5 disabled:opacity-50 transition"
                >
                    {loading ? "…" : "Send ▶"}
                </button>
            </div>

            <div className="flex gap-3 px-3 py-1.5 text-xs text-muted bg-paper-2 border-b border-line">
                {loading ? (
                    <span className="text-accent font-bold">pending…</span>
                ) : result ? (
                    <>
                        <span className={result.status === 200 ? "text-ok font-bold" : "text-red-600 font-bold"}>
                            {result.status === 200 ? "200 OK" : "request failed"}
                        </span>
                        {result.ms !== null && <span>{result.ms} ms</span>}
                        {result.size > 0 && <span>{result.size} B</span>}
                    </>
                ) : (
                    <span>pick an endpoint and hit Send</span>
                )}
            </div>

            <pre className="h-[270px] overflow-auto p-3.5 text-[12.5px] leading-relaxed whitespace-pre-wrap text-ink">
                {result ? result.body : "// response will appear here"}
            </pre>
        </div>
    );
};

export default MiniPostmen;