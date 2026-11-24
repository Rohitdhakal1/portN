import { useEffect, useState } from "react";
import EndpointSection from "../components/ui/EndpointSection";
import { useEndpoint } from "../hook/usEndpoint";



const prettyJson = (obj) =>
    JSON.stringify(obj, null, 2).replace(
        /\[\s+([^\]]*?)\s+\]/g,
        (match, inside) => "[" + inside.replace(/\s*\n\s*/g, " ") + "]"
    );

const About = () => {

    const request = useEndpoint("/api/about.json");

    return (
        <EndpointSection id="about" method="GET" path="/about" request={request} meta="application/json">
            <div className="min-h-[180px]">
                {request.loading ? (
                    <div className="flex flex-col gap-3">
                        {[40, 60, 50, 75, 70, 45].map((w, i) => (
                            <div key={i} className="h-3 rounded bg-line animate-pulse" style={{ width: `${w}%` }} />
                        ))}
                    </div>
                ) : (
                    <pre className="font-mono text-sm leading-6 whitespace-pre-wrap">
                        {prettyJson(request.data)}
                    </pre>
                )}
            </div>

            <p className="text-lg max-w-[60ch] mt-5 pt-5 border-t border-dashed border-line">
                I build complete web apps: <em className="text-accent">clean interfaces</em> people
                enjoy using, and <em className="text-accent">solid backends</em> with caching and auth
                that keep them fast and safe. Lately I've been turning things I actually use into tools other people can use too.
            </p>
        </EndpointSection>
    );
};

export default About;