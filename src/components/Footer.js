import { Mail, Phone } from "lucide-react";

export default function Footer () {
    return (
        <footer className="w-full bg-blue-100 border-t mt-12">
            <div className="max-w-5xl mx-auto px-4 py-8 text-center space-y-4">
                <div className="space-y-1 text-slate-700">
                    <p className="font-medium">Mairead O'Dwyer</p>
                    <p>Integrated Computer Science student at Trinity College Dublin</p>
                </div>
                <div className="flex justify-center gap-8 text-slate-600">
                    <a
                        href="mailto:scrahanagnave8@gmail.com"
                        className="flex items-center gap-2 hover:underline hover:text-blue-900"
                        >
                            <Mail size={18} />scrahanagnave8@gmail.com
                        </a>

                        <a
                        href="tel:+3530874466402"
                        className="flex items-center gap-2 hover:underline hover:text-blue-900"
                        >
                            <Phone size={18} /> +353 087 446 6402
                        </a>
                    </div>
            </div>
        </footer>
    );
}

