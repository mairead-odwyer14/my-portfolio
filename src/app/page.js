import Image from "next/image";
import ExperienceCard from '../components/ExperienceCard';

  const experiences = [
        {
      title: "Module Demonstrator",
      company: "Trinity College Dublin",
      duration: "October 2025 - Present",
      manager: "N/A",
      description: `I am currently working as a demonstrator for the module STU23501 Probability and Theortical Statistics I. 
                    It is a probability module for second-year mathematics students.
                    My role is to run tutorials twice a week for the students.
                    During these tutorials, I work through solutions for tutorial problem sheets given to the student by the lecturer.
                    I also answer any questions regarding the material covered in the tutorial and/or class.
                    I will also be covering the exam paper for the module from last year to help prepare the class for the exam.`,
    },
    {
      title: "Research Assistant",
      company: "Trinity College Dublin",
      duration: "May 2025 - September 2025",
      manager: "Dr Anthony Ventresque",
      description: `I worked as a research assistant in the TCD's Complex Software Lab under Dr Anthony Ventresque.
            My role was to annotate rugby matches using a performance analysis software, Hudl Sportscode.
            The goal of the project was to use the data to determine if the height of tackle in rugby should be lower from the shoulder to the sternum.
            The process was split into two elements, coding and labeling.
            Coding meant that marking down possession, tackles, rucks, passes, kicks and referees' decisions.
            Labeling was for tackles only, where aspects such as type of tackle, head contact for tackle and ball carrier, etc would be marked for each tackle.
            I worked alongside a team of annotators, including a fellow undergrad, a PhD student and two professional rugby players.
            I throughly enjoyed my time as a research assistant. I learned a lot on how these projects are conducted.
            It was great to be able to talk to other memembers of the lab, mainly PhD students and post-doctoral researchers, as I was able to ask for advice and what their experience in computer science was like.`,    
    },
  ];

export default function Home() {
  return (
    <div>
      <main>
        <div>
        <h1 className="font-serif text-center text-xl" >Mairéad O'Dwyer</h1>
        <p className="font-serif text-center text-base">Integrated Computer Science student at Trinity College Dublin</p>
        <div className="text-center gap-4 mt-2">
         {/* <a href="/resume.pdf" className="border round-lg">Resume</a> */}
         <a href="https://github.com/mairead-odwyer14" target="_blank" rel="noopener noreferrer" className="underline">GitHub </a>
         <span>|</span>
         <a href="https://www.linkedin.com/in/mairead-o-dwyer-a89b4a305/" target="_blank"rel="noopener noreferrer"className="underline mt-2">LinkedIn </a>
        </div>
        </div>
        <section id="about">
        <h2 className="font-fascinate text-center text-purple-500">About Me!</h2>
        <div className="flex justify-start items-start ml-5">
          <Image
            src="/coffee_cake.jpg"
            alt="Coffee cake slice"
            width={175}
            height={175}
            className="rounded-full border-5 border-blue-300"
            priority
          />
          <Image
          src="/maths.jpg"
          alt="Math equations on chalkboard"
          width={175}
          height={175}
          className="rounded-full border-5 border-blue-300 mr-2 mt-22"
          />
        <p className="text-center mx-0 rounded border-2 border-blue-200 p-4">I am a third year Integrated Computer Science student at Trinity College Dublin (TCD). 
          I am interested in algorithms and data structures, backend, mathematics and statistics.
          I have worked as a research assistant at TCD's Complex Software Lab and I am currently a demonstrator for a statistics module.
          I have experience in Java, C, R and ARM Assembly.
          Outside of computer science, I enjoy reading, watching films and sports as well as baking delicious treats. 
        </p>
        <Image
        src="/programming.jpg"
        alt="Programming languages"
        width={175}
        height={175}
        className="rounded-full border-5 border-blue-300 ml-2"
        />
        <Image
        src="/Trinity-Main-Logo.jpg"
        alt="Trinity College Dublin Logo"
        width={200}
        height={200}
        className="rounded-full border-5 border-blue-300 mt-36"/>
        </div>
        </section>
        <section id="experience" className="py-6 bg-purple-100">
          <h1 className="font-audiowide p-4 text-2xl">Experience</h1>
          <div className="flex flex-wrap justify-center items-center p-4 gap-6">
            {experiences.map((experience, index) => (
              <ExperienceCard
              key={index}
              title={experience.title}
              company={experience.company}
              duration={experience.duration}
              manager={experience.manager}
              description={experience.description}
              />
            ))}
          </div>
        </section>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}