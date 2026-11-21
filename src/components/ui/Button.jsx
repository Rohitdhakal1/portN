const base = "font-mono rounded-lg text-sm font-bold px-4 py-3";

const variant = {
    primary: "bg-rust text-white border-rust",
    outline: "bg-ink text-ink border-ink"
}

const Button = ({ variants = "primary" }) => {
    return (
        <a href='#' className={`${base} ${variant[variants]}`}></a>
    )
}
export default Button;