import { useEffect, useRef, useState } from "react";

const lines = ["GET /hire-me?", "200 OK 👋", "no bugs here (yet)", "caching snacks…"];

const formatTime = (s) =>
    [Math.floor(s / 3600), Math.floor((s % 3600) / 60), s % 60]
        .map((n) => String(n).padStart(2, "0"))
        .join(":");

const Mascot = () => {
    const yardRef = useRef(null);
    const botRef = useRef(null);
    const bodyRef = useRef(null);
    const pausedRef = useRef(false);
    const [bubble, setBubble] = useState(null);
    const [seconds, setSeconds] = useState(0);

    // walking loop
    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        let x = 0;
        let dir = 1;
        let frame;
        let restFrames = 0; // how many frames to stand still
        let hideTimer;

        const step = () => {
            if (pausedRef.current) {
                // hovering: do nothing, just wait
            } else if (restFrames > 0) {
                restFrames--; // standing still, count down
            } else if (yardRef.current) {
                const max = yardRef.current.clientWidth - 30;
                x += 0.5 * dir;
                if (x >= max) { x = max; dir = -1; }
                if (x <= 0) { x = 0; dir = 1; }
                botRef.current.style.transform = `translateX(${x}px)`;
                bodyRef.current.style.transform = `scaleX(${dir})`;

                // small random chance to stop and talk
                if (Math.random() < 0.003) {
                    restFrames = 120 + Math.random() * 120; // about 2–4 seconds
                    setBubble(lines[Math.floor(Math.random() * lines.length)]);
                    clearTimeout(hideTimer);
                    hideTimer = setTimeout(() => {
                        if (!pausedRef.current) setBubble(null);
                    }, 1800);
                }
            }
            frame = requestAnimationFrame(step);
        };

        frame = requestAnimationFrame(step);
        return () => {
            cancelAnimationFrame(frame);
            clearTimeout(hideTimer);
        };
    }, []);

    // uptime counter
    useEffect(() => {
        const id = setInterval(() => setSeconds((s) => s + 1), 1000);
        return () => clearInterval(id);
    }, []);

    const say = (text) => setBubble(text);

    return (
        <div ref={yardRef} className="relative h-20 mt-auto">
            <div
                ref={botRef}
                className="absolute bottom-5 left-0 w-[30px] cursor-pointer"
                onMouseEnter={() => { pausedRef.current = true; say("GET /hire-me?"); }}
                onMouseLeave={() => { pausedRef.current = false; setBubble(null); }}
                onClick={() => say(lines[Math.floor(Math.random() * lines.length)])}
            >
                {bubble && (
                    <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[11px] font-semibold bg-card border-2 border-ink rounded-md px-2 py-1">
                        {bubble}
                    </div>
                )}

                <div ref={bodyRef}>
                    <div className="relative mx-auto w-0.5 h-2 bg-ink">
                        <span className="absolute -top-1.5 -left-[3px] w-2 h-2 rounded-full bg-rust animate-pulse" />
                    </div>
                    <div className="w-[30px] h-6 bg-ink rounded-[7px] flex items-center justify-center gap-1.5">
                        <i className="block w-[5px] h-1.5 bg-paper rounded-[1px] animate-wink" />
                        <i className="block w-[5px] h-1.5 bg-paper rounded-[1px] animate-wink" />
                    </div>
                    <div className="flex justify-between px-1.5">
                        <i className="block w-[5px] h-1.5 bg-ink rounded-b-sm animate-step" />
                        <i className="block w-[5px] h-1.5 bg-ink rounded-b-sm animate-step [animation-delay:0.16s]" />
                    </div>
                </div>
            </div>

            <div className="absolute left-0 right-0 bottom-4 h-0.5 bg-ink rounded" />
            <p className="absolute left-0 bottom-0 font-mono text-[10.5px] text-muted">
                uptime {formatTime(seconds)}
            </p>
        </div>
    );
};

export default Mascot;