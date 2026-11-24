
const base = "font-mono text-xs font-bold px-1.5 py-0.5 rounded";


const variant = {
    GET: "bg-green-100 text-ok dark:bg-green-900/40",
    POST: "bg-orange-100 text-accent dark:bg-orange-900/30",
};

const MethodBadge = ({ method = "GET" }) => {
    return (
        <span className={`${base} ${variant[method]}`}>
            {method}
        </span>
    );
};

export default MethodBadge;