import EndpointSection from "../components/ui/EndpointSection";
import { useEndpoint } from "../hooks/useEndpoint.js";

const OffDuty = () => {
    const request = useEndpoint("/api/off-duty.json");
    const notes = request.data || [];

    return (
        <EndpointSection id="offduty" method="GET" path="/off-duty" request={request} meta="the human part">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {request.loading
                    ? [1, 2, 3].map((n) => (
                        <div key={n} className="bg-card border border-line rounded-lg p-4 flex flex-col gap-2.5">
                            <div className="h-2.5 w-2/5 rounded bg-line animate-pulse" />
                            <div className="h-3 w-11/12 rounded bg-line animate-pulse" />
                            <div className="h-3 w-4/5 rounded bg-line animate-pulse" />
                        </div>
                    ))
                    : notes.map((note) => (
                        <div key={note.file} className="bg-card border border-line rounded-lg p-4">
                            <p className="font-mono text-[11.5px] text-muted">{note.file}</p>
                            <p className="mt-1.5">{note.text}</p>
                        </div>
                    ))}
            </div>
        </EndpointSection>
    );
};

export default OffDuty;