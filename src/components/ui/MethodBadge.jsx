
const base = "font-mono text-xs font-bold px-1.5 py-0.5 rounded";


const variant = {
    GET: "bg-green-100 text-green-700",
    POST: "bg-orange-100 text-rust",
};

const MethodBadge = ({ method = "GET" }) => {
    return (
        <span className={`${base} ${variant[method]}`}>
            {method}
        </span>
    );
};

export default MethodBadge;