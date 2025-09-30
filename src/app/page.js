import Image from "next/image";
import ExperienceCard from '../components/ExperienceCard';
import HeaderCard from '@/components/HeaderCard';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';

  const experiences = [
        {
      title: "Module Demonstrator",
      company: "Trinity College Dublin",
      duration: "October 2025 - Present",
      description: `Lead two weekly tutorials, going through tutorial sheet solutions.
                    Answer any questions regarding material covered in lectures and tutorials.
                    Walk through past exam paper to prepare students for final exam.`,
    },
    {
      title: "Undergraduate Research Assistant",
      company: "Trinity College Dublin (Complex Software Lab)",
      duration: "May 2025 - September 2025",
      description: `Annotated rugby matches using Hudl Sportscode with a focus on tackle aspects for a project funded by the IRFU and World Rugby.
                    Worked with a team of annotators, including fellow TCD students and professional rugby players.
                    Proposed changes to annotation process that improved efficiency.`,    
    },
  ];

  const projects = [
    {
      title: "Personal Portfolio",
      tools: "Next.js, JavaScript, Tailwind CSS, Git",
      duration: "September 2025 - Present",
      contributions: [
        "Used Next.js app router for the base.",
        "Implemented Tailwind utility classes for consistent design.",
        "Will continue to update with new projects and experiences."
      ],
      link: "https://github.com/mairead-odwyer14/my-portfolio"
    },
    {
      title: "TCD Student Job Portal",
      tools: "Java, Spring Boot, REST, Postman, Git",
      duration: "January 2025 - May 2025",
      contributions: [
        "Created backend structure for messaging and notifications, such as domains, DTOs, repositiories, controllers and services.",
        "Designed and implemented REST endpoints to fetch students, job listings and applications.",
        "Verified REST endpoints using Postman to ensure correct functionality.",
        "Contributed to team demos."
      ],
      link: "https://gitlab.scss.tcd.ie/sweng25_group19/sweng25_group19-tcdstudentjobportal",
    },
  ];

export default function Home() {
  return (
    <div>
      <HeaderCard />
      <main>
        <section id="about" className="scroll-mt-24 max-w-5xl mx-auto px-4 py-10">
        <div className="px-4">
        <h2 className="font-serif text-center text-black-100 text-3xl md:text-4xl mb-6">About Me</h2>
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-12 xl:gap-16">
          </div>
          <div className="w-full md:basis-1/2 lg:basis-3/5 xl:basis-2/3 md:mx-2">
        <p className="w-full rounded border-2 border-blue-200 bg-blue-100 p-6 leading-relaxed text-base md:text-lg">I am a third year Integrated Computer Science student at Trinity College Dublin (TCD). 
          I am interested in algorithms and data structures, backend, mathematics and statistics.
          I have worked as a research assistant at TCD's Complex Software Lab and I am currently a demonstrator for a statistics module.
          I have experience in Java, C, R and ARM Assembly.
          Outside of computer science, I enjoy reading, watching films and sports as well as baking delicious treats. 
        </p>
        <div className="rounded-md mt-6 flex flex-wrap gap-2 bg-slate-200 px-10">
          <p>Java</p>
          <span>|</span>
          <p>C</p>
          <span>|</span>
          <p>R</p>
          <span>|</span>
          <p>ARM Assembly</p>
          <span>|</span>
          <p>JavaScript</p>
          <span>|</span>
          <p>Spring Boot</p>
          <span>|</span>
          <p>REST APIs</p>
          <span>|</span>
          <p>Next.js</p>
          <span>|</span>
          <p>Tailwind CSS</p>
          <span>|</span>
          <p>Git</p>
          <span>|</span>
          <p>Postman</p>
          <span>|</span>
        </div>
        </div>
        </div>
        </section>
        <section id="experience" className="scroll-mt-24 max-w-5xl mx-auto px-4 py-10">
          <h1 className="font-serif p-4 text-3xl text-center">Experience</h1>
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
        <section id="projects" className="scroll-mt-24 max-w-5xl mx-auto px-4 py-10">
          <h1 className="font-serif p-4 text-3xl text-center">Projects</h1>
          <div className="flex flex-wrap justify-center items-center p-4 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
              key={index}
              title={project.title}
              tools={project.tools}
              duration={project.duration}
              intro={project.intro}
              contributions={project.contributions}
              link={project.link}
              />
            ))}
          </div>

        </section>
      </main>
      <Footer />
    </div>
  );
}