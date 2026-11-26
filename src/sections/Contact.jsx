import { useState } from "react";
import EndpointSection from "../components/ui/EndpointSection";

const Contact = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [state, setState] = useState("idle"); // idle | sending | sent | error
    const [code, setCode] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setState("sending");
        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify({
                    access_key:import.meta.env.VITE_WEB3FORMS_KEY,
                    subject: "New message from portfolio",
                    email,
                    message,
                }),
            });
            const result = await res.json();
            console.log("Web3Forms response:", res.status, result);
            console.log("Web3Forms response:", res.status, result.message, result);
            setCode(res.status);
            if (result.success) {
                setState("sent");
                setEmail("");
                setMessage("");
            } else {
                setState("error");
            }
        } catch {
            console.log("Request error:", err);
            setState("error");
        }
    };

    const status =
        state === "sending" ? (
            <span className="text-accent font-bold">pending…</span>
        ) : state === "sent" ? (
            <span className="text-ok font-bold">{code} OK · thanks, I'll reply soon</span>
        ) : state === "error" ? (
            <span className="text-red-700 font-bold">failed · try emailing me directly</span>
        ) : (
            <span>awaiting request body</span>
        );

    return (
        <EndpointSection id="contact" method="POST" path="/contact" query="Content-Type: application/json" status={status}>
            <form onSubmit={handleSubmit} className="grid gap-3 max-w-lg">
                <label className="font-mono text-xs text-muted" htmlFor="email">"email"</label>
                <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="font-mono text-sm px-3 py-2.5 border-2 border-ink rounded-lg bg-card focus:outline-2 focus:outline-rust"
                />

                <label className="font-mono text-xs text-muted" htmlFor="message">"message"</label>
                <textarea
                    id="message"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hi Rohit, we're hiring for…"
                    className="font-mono text-sm px-3 py-2.5 border-2 border-ink rounded-lg bg-card min-h-24 resize-y focus:outline-2 focus:outline-rust"
                />

                <button
                    type="submit"
                    disabled={state === "sending"}
                    className="justify-self-start font-mono text-sm font-bold bg-rust text-white rounded-lg px-4 py-2.5 shadow-[3px_3px_0_var(--color-ink)] hover:-translate-y-0.5 disabled:opacity-50 transition"
                >
                    {state === "sending" ? "Sending…" : "Send request ▶"}
                </button>
            </form>
        </EndpointSection>
    );
};

export default Contact;
