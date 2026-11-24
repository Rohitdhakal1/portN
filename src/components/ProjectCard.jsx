import { Fragment } from "react";
import Tag from "./ui/Tag";

const ProjectCard = ({ project }) => {
    const { name, status, description, flow = [], hot, metrics = [], stack = [], links = {} } = project;

    return (
        <article className="relative bg-card border border-line rounded-lg p-5 transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border-ink hover:shadow-[4px_4px_0_var(--color-rust)]">
            {status === "in-progress" && (
                <span className="absolute -top-2.5 right-4 font-mono text-[10.5px] font-bold tracking-wide bg-rust text-white px-2 py-0.5 rounded">
                    IN PROGRESS
                </span>
            )}

            <div className="flex justify-between items-baseline gap-3 flex-wrap">
                <h3 className="text-2xl font-bold">{name}</h3>
                <div className="flex gap-3 font-mono text-xs">
                    {links.live && <a href={links.live} target="_blank" rel="noreferrer" className="border-b-2 border-rust">Live</a>}
                    {links.github && <a href={links.github} target="_blank" rel="noreferrer" className="border-b-2 border-rust">GitHub</a>}
                </div>
            </div>

            <p className="mt-1.5 max-w-[62ch]">{description}</p>

            <div className="flex flex-wrap items-center gap-1.5 mt-4 font-mono text-xs">
                {flow.map((node, i) => (
                    <Fragment key={node}>
                        {i > 0 && <span className="text-accent font-bold">→</span>}
                        <span
                            className={`border-[1.5px] rounded-md px-2 py-1 ${node === hot ? "bg-orange-100 border-rust text-accent font-semibold" : "border-ink bg-paper"
                                }`}
                        >
                            {node}
                        </span>
                    </Fragment>
                ))}
            </div>

            {metrics.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                    {metrics.map((m) => (
                        <span key={m} className="font-mono text-xs font-semibold bg-green-100 text-ok px-2.5 py-1 rounded-full">{m}</span>
                    ))}
                </div>
            )}

            <div className="flex flex-wrap gap-1.5 mt-3">
                {stack.map((t) => <Tag key={t}>{t}</Tag>)}
            </div>

        </article>
    );
};

export default ProjectCard;