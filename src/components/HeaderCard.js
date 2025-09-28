export default function HeaderCard(){
    return(
        <header className="bg-blue-100 w-full">
            <div className="text-center mb-5">
                <h1 className="font-serif text-center text-xl" >Mairéad O'Dwyer</h1>
                <p className="font-serif text-center text-base">Integrated Computer Science student at Trinity College Dublin</p>
                <div className="flex justify-center gap-4 mt-2">
                    <a 
                        href="https://github.com/mairead-odwyer14" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="underline"
                    >
                        GitHub 
                    </a>
                    <span>|</span>
                    <a 
                        href="https://www.linkedin.com/in/mairead-o-dwyer-a89b4a305/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline mt-2"
                    >
                        LinkedIn 
                    </a>
                </div>
            </div>

            <nav className="flex justify-center space-x-6 border-t pt-4 bg-pink-100">
                <a href="#about" className="underline hover:bg-pink-200">About</a>
                <a href="#experience" className="underline hover:bg-pink-200">Experiences</a>
                <a href="#projects" className="underline hover:bg-pink-200">Projects</a>
            </nav>
        </header>
    )
}