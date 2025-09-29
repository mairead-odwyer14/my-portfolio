import Image from "next/image";
import ExperienceCard from '../components/ExperienceCard';
import HeaderCard from '@/components/HeaderCard';
import ProjectCard from '../components/ProjectCard';

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
            Coding meant marking down possession, tackles, rucks, passes, kicks and referees' decisions.
            Labeling was for tackles only, where aspects such as type of tackles, head contact for the tackler and ball carrier, etc would be marked for each tackle.
            I worked alongside a team of annotators, including a fellow undergrad, a PhD student and two professional rugby players.
            I throughly enjoyed my time as a research assistant. I learned a lot on how these projects are conducted.
            It was great to be able to talk to other memembers of the lab, mainly PhD students and post-doctoral researchers, as I was able to ask for advice and what their experience in computer science was like.`,    
    },
  ];

  const projects = [
    {
      title: "Portfolio",
      tools: "Next.js, Javascript, Tailwind CSS, Git",
      duration: "September 2025 - Present",
      intro: `I decided to create a personal portfolio page to gain experience in frontend programming.
              I researched different frameworks to use and I decided to use Next.js.
              I also used Tailwind CSS to style the different elements of the portfolio as it is more clean than using CSS files.`,
      contributions: [],
    },
    {
      title: "TCD Student Job Portal",
      tools: "Java, SpringBoot, REST, Postman, Git",
      duration: "January 2025 - May 2025",
      intro: `I was a member of the backend team for a module project. 
              It was a job portal for Trinity students which would allow them to apply for jobs posted by companies. 
              It was done in partnership with Liferay.
              My main contributions were:
              `,
      contributions: [
        "Created backend structure for messaging and notifications, such as domains, DTOs, repositiories, controllers and services.",
        "Designed and implemented REST endpoints to fetch students, job listings and applications.",
        "Verified REST endpoints using Postman to ensure correct functionality.",
        "Contributed to team demos."
      ],
    },
  ];

export default function Home() {
  return (
    <div>
      <HeaderCard />
      <main>
        <section id="about" className="scroll-mt-24 py-10">
        <div className="px-4">
        <h2 className="font-serif text-center text-black-100 text-3xl md:text-4xl mb-6">About Me!</h2>
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-12 xl:gap-16">
          </div>
          <div className="w-full md:basis-1/2 lg:basis-3/5 xl:basis-2/3 md:mx-2">
        <p className="w-full rounded border-2 border-blue-200 bg-blue-100 p-6 leading-relaxed text-base md:text-lg">I am a third year Integrated Computer Science student at Trinity College Dublin (TCD). 
          I am interested in algorithms and data structures, backend, mathematics and statistics.
          I have worked as a research assistant at TCD's Complex Software Lab and I am currently a demonstrator for a statistics module.
          I have experience in Java, C, R and ARM Assembly.
          Outside of computer science, I enjoy reading, watching films and sports as well as baking delicious treats. 
        </p>
        </div>
        </div>
        </section>
        <section id="experience" className="scroll-mt-24 py-6">
          <h1 className="font-serif p-4 text-2xl">Experience</h1>
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
        <section id="projects" className="scroll=mt-24 py-6">
          <h1 className="font-bitcount p-4 text-2xl">Projects</h1>
          <div className="flex flex-wrap justify-center items-center p-4 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
              key={index}
              title={project.title}
              tools={project.tools}
              duration={project.duration}
              intro={project.intro}
              contributions={project.contributions}
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