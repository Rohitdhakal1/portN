import EndpointSection from "../components/ui/EndpointSection";
import ProjectCard from "../components/ProjectCard";

import { useEndpoint } from "../hook/usEndpoint";

const Projects = () => {
    const request = useEndpoint("/api/projects.js");
    const projects = request.data || [];

    return (
        <EndpointSection
            id="projects"
            method="GET"
            path="/projects"
            query="?sort=best"
            request={request}
            meta={`${projects.length} results`}>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
                {request.loading
                    ? [1, 2, 3].map((n) => (
                        <div key={n} className="bg-card border border-line rounded-lg p-5 flex flex-col gap-3">
                            <div className="h-5 w-1/3 rounded bg-line animate-pulse" />
                            <div className="h-3 w-11/12 rounded bg-line animate-pulse" />
                            <div className="h-3 w-3/4 rounded bg-line animate-pulse" />
                            <div className="h-6 w-2/3 rounded bg-line animate-pulse" />
                        </div>
                    ))
                    : projects.map((p) => <ProjectCard key={p.name} project={p} />)}
            </div>
        </EndpointSection >
    )
}

export default Projects;