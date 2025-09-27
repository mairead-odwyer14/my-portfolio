const experienceCard = ({ title, company, duration, manager, description}) =>{
    return(
        <div className="relative bg-blue-100 rounded-lg shadow-md p-6 w-full max-w-7xl mx-auto transform">
            <h2 className="text-xl font-bold font-rubik mb-1">{title}</h2>
            <div className="flex flex-row justify-between w-full">
                <span className="italic text-lg">{company}</span>
                <span className="italic text-lg">{duration}</span>
            </div>
            <p className="italic">{manager}</p>
            <p className="w-full p-6">{description}</p>
        </div>
    );
};