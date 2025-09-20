import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="font-serif">Mairéad O'Dwyer</h1>
        <p>Integrated Computer Science student at Trinity College Dublin</p>
        <div>
         {/* <a href="/resume.pdf" className="border round-lg">Resume</a> */}
         <a href="https://github.com/mairead-odwyer14" target="_blank">GitHub</a>
         <a href="https://www.linkedin.com/in/mairead-o-dwyer-a89b4a305/" target="_blank">LinkedIn</a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
