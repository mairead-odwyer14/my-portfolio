import {Github, Linkedin, File} from "lucide-react";
export default function HeaderCard(){
    return(
        <header className="w-full">
            <div className="text-center bg-slate-200">
                <h1 className="font-serif text-center text-xl" >Mairéad O'Dwyer</h1>
                <p className="font-serif text-center text-base">Integrated Computer Science student at Trinity College Dublin</p>
                <div className="flex justify-center gap-4 mt-2">
                    <a
                        href="https://github.com/mairead-odwyer14" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="rounded-md flex items-center py-1 text-slate-700 hover:bg-slate-100 hover:text-slate-900 hover:underline"
                    >
                        <Github size={18} /> GitHub 
                    </a>
                    <span>|</span>
                    <a 
                        href="https://www.linkedin.com/in/mairead-o-dwyer-a89b4a305/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md flex items-center gap-2 py-1 text-slate-700 hover:bg-slate-100 hover:text-slate-900 hover:underline"
                    >
                        <Linkedin size={18} /> LinkedIn 
                    </a>
                    <span>|</span>
                    <a
                        href="/Mairead-O'Dwyer-Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md flex items-center gap-2 py-1 text-slate-700 hover:bg-slate-100 hover:text-slate-900 hover:underline"
                        aria-label="View resume PDF in a new tab"
                    >
                       <File size={18} /> Résumé
                    </a>
                </div>
            </div>

            <nav className="flex justify-center space-x-6 border-t pt-4">
                <a href="#about" className="rounded-md px-3 py-1 text-slate-900 bg-blue-100 hover:underline hover:bg-blue-200">About</a>
                <a href="#experience" className="rounded-md px-3 py-1 text-slate-900 bg-blue-100 hover:underline hover:bg-blue-200">Experiences</a>
                <a href="#projects" className="rounded-md px-3 py-1 text-slate-900 bg-blue-100 hover:underline hover:bg-blue-200">Projects</a>
            </nav>
        </header>
    )
}