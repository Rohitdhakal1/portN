import MethodBadge from "../components/ui/MethodBadge";
import { nowItems, nowUpdated } from "../data/now";

const base = "font-mono font-bold text-[10.5px] uppercase tracking-wide px-2 py-0.5 rounded justify-self-start";

const stateStyles = {
    building: "bg-rust text-white",
    planned: "bg-orange-100 text-rust",
    reading: "bg-green-100 text-green-700",
    open: "border border-ink text-ink",
};

const NowLog = () => {
    return (
        <div className="bg-white border-1 border-ink rounded-lg overflow-hidden">
            <div className=" flex justify-between item-center px-4 py-2.5 border-b border-line font-mono text-sm font-semibold bg-paper-2">
                <span className="flex item-center gap-2"><MethodBadge method="GET" /> /now</span>
                <span className="text-muted text-xs font-normal"> updated [{nowUpdated}]</span>
                <span></span>
            </div>
            <ol>
                {nowItems.map((item) => (
                    <li key={item.when} className="grid grid-cols-[96px_84px_1fr] items-baseline gap-3 px-4 py-3 border-b border-dashed border-line last:border-b-0">
                        <span className="font-mono text-xs text-muted">{item.when}</span>
                        <span className={`${base} ${stateStyles[item.state]}`}>{item.state}</span>
                        <span className="text-base">{item.text}</span>
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default NowLog;