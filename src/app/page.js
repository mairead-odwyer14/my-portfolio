import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <h1 className="font-serif text-center text-xl" >Mairéad O'Dwyer</h1>
        <p className="font-serif text-center text-base">Integrated Computer Science student at Trinity College Dublin</p>
        <div className="text-center gap-4 mt-2">
         {/* <a href="/resume.pdf" className="border round-lg">Resume</a> */}
         <a href="https://github.com/mairead-odwyer14" target="_blank" rel="noopener noreferrer" className="underline">GitHub </a>
         <span>|</span>
         <a href="https://www.linkedin.com/in/mairead-o-dwyer-a89b4a305/" target="_blank"rel="noopener noreferrer"className="underline mt-2">LinkedIn </a>
        </div>



        <div className="container mx-50 mt-8">
        <h2 className="font-fascinate mx-100 text-purple-500">About Me!</h2>
        <div className="flex justify-start items-start gap-6">
          <Image
            src="/coffee_cake.jpg"
            alt="Coffe cake slice"
            width={100}
            height={100}
            className="rounded-full border-5 border-blue-300 ml-0"
            priority
          />
          <Image
            src="/java.png"
            alt="Java logo"
            width={100}
            height={100}
            className="rounded-full border-5 border-blue-300 ml-0"
            />

        <p className="max-w-md rounded border-2 border-blue-200 p-4">I am a third year Integrated Computer Science student at Trinity College Dublin (TCD). 
          I am interested in algorithms and data structures, backend, mathematics and statistics.
          I have worked as a research assistant at TCD's Complex Software Lab and I am currently a demonstrator for a statistics module.
          I have experience in Java, C, R and ARM Assembly.
          Outside of computer science, I enjoy reading, watching films and sports as well as baking delicious treats. 
        </p>
        </div>
        </div>
        <div className="mt-4">
          <h2>Experience</h2>
          <h3>Research Assistant</h3>
          <p>
            I worked as a research assistant in the TCD's Complex Software Lab under Dr Anthony Ventresque.
            My role was to annotate rugby matches using a performance analysis software, Hudl Sportscode.
            The goal of the project was to use the data to determine if the height of tackle in rugby should be lower from the shoulder to the sternum.
            The process was split into two elements, coding and labeling.
            Coding meant that marking down possession, tackles, rucks, passes, kicks and referees' decisions.
            Labeling was for tackles only, where aspects such as type of tackle, head contact for tackle and ball carrier, etc would be marked for each tackle.
            I worked alongside a team of annotators, including a fellow undergrad, a PhD student and two professional rugby players.
            I throughly enjoyed my time as a research assistant. I learned a lot on how these projects are conducted.
            It was great to be able to talk to other memembers of the lab, mainly PhD students and post-doctoral researchers, as I was able to ask for advice and what their experience in computer science was like.
          </p>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
