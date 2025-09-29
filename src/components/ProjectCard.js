const ProjectCard = ({title, tools, duration, intro, contribution}) => {
    return(
        <div className="relative bg-purple-100 rounded-lg shadow-md p-6 w-full max-w-7xl mx-auto transform">
            <h3 className="text-xl font-bold font-rubik mb-1">{title}</h3>
            <div className="flex flex-row justify-between w-full">
                <span className="italic text-lg">{tools}</span>
                <span className="italic text-lg">{duration}</span>
            </div>
            <p>{intro}</p>
            <ul className="list-decimal">{contribution}</ul>
        </div>
    );
};

export default ProjectCard;