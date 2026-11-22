import { useEffect, useState } from "react";
import EndpointSection from "../components/ui/EndpointSection";

const About = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [ms, setMs] = useState(null);
    const [error, setError] = useState(false);

    const load = async () => {
        setLoading(true);
        setError(false);
        const start = performance.now();
        try {
            const res = await fetch("/api/about.json", { cache: "no-store" });
            const json = await res.json();
            setData(json);
            setMs(Math.round(performance.now() - start));
        } catch {
            setError(true);
        }
        setLoading(false);
    };

    useEffect(() => {
        load();
    }, []);

    const sendButton = (
        <button
            onClick={load}
            disabled={loading}
            className="font-mono text-xs font-semibold bg-ink text-paper rounded-md px-3 py-1.5 hover:bg-rust disabled:opacity-50 transition"
        >
            {loading ? "Sending…" : "Send ▶"}
        </button>
    );

    const status = loading ? (
        <span className="text-rust font-bold">pending…</span>
    ) : error ? (
        <span className="text-red-700 font-bold">500 failed</span>
    ) : (
        <>
            <span className="text-green-700 font-bold">200 OK</span>
            <span>{ms} ms</span>
            <span>application/json</span>
        </>
    );

    return (
        <EndpointSection id="about" method="GET" path="/about" status={status} action={sendButton}>
            <div className="min-h-[220px]">
                {loading ? (
                    <div className="flex flex-col gap-3">
                        {[40, 60, 50, 75, 70, 45].map((w, i) => (
                            <div key={i} className="h-3 rounded bg-line animate-pulse" style={{ width: `${w}%` }} />
                        ))}
                    </div>
                ) : (
                    <pre className="font-mono text-sm leading-7 whitespace-pre-wrap">
                        {JSON.stringify(data, null, 2)}
                    </pre>
                )}
            </div>

            <p className="text-lg max-w-[60ch] mt-5 pt-5 border-t border-dashed border-line">
                I build complete web apps: <em className="text-rust">clean interfaces</em> people
                enjoy using, and <em className="text-rust">solid backends</em> with caching and auth
                that keep them fast and safe.
            </p>
        </EndpointSection>
    );
};

export default About;