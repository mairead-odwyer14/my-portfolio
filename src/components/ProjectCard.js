import {MousePointer2} from "lucide-react";
const ProjectCard = ({title, tools, duration, contributions = [], link}) => {
        const toItems = (v) => {
            if (Array.isArray(v)) return v;
            if (typeof v === "string")
                return v.split(/\r?\n/).map(s => s.trim()).filter(Boolean).map(s => s.replace(/^[-*•]\s+/, ""));
            return [];
        };
        const items = toItems(contributions);
    return(
        <div className="relative bg-purple-100 rounded-lg shadow-md p-6 w-full max-w-7xl mx-auto transform">
            <h3 className="text-xl font-bold mb-1">{title}</h3>
            <div className="flex flex-row justify-between w-full">
                <span className="italic text-lg">{tools}</span>
                <span className="italic text-lg">{duration}</span>
            </div>
            {items.length > 0 && (
                <ul className="mt-3 list-disc pl-6 space-y-1">
                    {items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
        )}
        {link && (
            <div className="text-center mt-4">
                <a 
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-700 hover:underline hover:text-blue-900"
                >
                    Link to repository<MousePointer2 size={18} />
                </a>
            </div>
        )}
        </div>
    );
};

export default ProjectCard;