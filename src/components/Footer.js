export default function Footer () {
    return (
        <footer className="w-full bg-blue-100 border-t mt-12">
            <div className="max-w-5xl mx-auto px-4 py-8 text-center space-y-4">
                <div className="space-y-1 text-slate-700">
                    <p className="font-medium">Mairead O'Dwyer</p>
                    <p>Integrated Computer Science student at Trinity College Dublin</p>
                    <p>
                        <a
                        href="mailto:scrahanagnave8@gmail.com"
                        className="hover:underline hover:text-blue-900"
                        >
                            scrahanagnave8@gmail.com
                        </a>
                    </p>
                    <p>
                        <a
                        href="tel:+3530874466402"
                        className="hover:underline hover:text-blue-900"
                        >
                            +353 087 446 6402
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

