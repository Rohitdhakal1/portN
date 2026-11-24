const base =
    "inline-block font-mono text-sm font-bold px-4 py-3 rounded-lg border-2 transition hover:-translate-y-0.5";

const variants = {
    primary: "bg-rust text-white border-rust shadow-[4px_4px_0_var(--color-ink)]",
    outline: "bg-card text-ink border-ink hover:shadow-[4px_4px_0_var(--color-ink)]",
};

const Button = ({ href, variant = "primary", children }) => {
    return (
        <a href={href} className={`${base} ${variants[variant]}`}>
            {children}
        </a>
    );
};

export default Button;