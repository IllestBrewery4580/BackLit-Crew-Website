import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"

export default function HomePage() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = ["Home", "About", "Music", "Shows", "Tickets", "Media", "Contact"];

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-[#0b1b3a] to-[#2e003e] text-white font-sans relative">
            {/* Hamburger Icon */}
            <button
                onClick={() => setIsOpen(true)}
                className="absolute top-6 z-50 p-2 rounded-md bg-[#0b1b3a] hover:bg-[#2e003e] shadow-md"
            >
                <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
            </button>

            {/* Sidebar Menu */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-black/90 shadow-2x1 transform transition-transform duration-300 z-40 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className="flex justify-between items-center p-4 border-b border-gray-700">
                    <h2 className="text-2x1 font-bold drop-shadow-[0_0_10px_rgba(166, 74, 255, 0.8]">
                        BackLit Crew
                    </h2>
                    <button onClick={() => setIsOpen(false)}>
                        <X className="h-6 w-6" />
                    </button>
                </div>
                <nav className="flex flex-col p-6 space-y-4 text-lg">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="hover:text-[#a64aff] transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                        >
                            {item}
                        </a>    
                    ))}
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex flex-col items-center justify-center text-center min-h-screen">
                {/* Band Name */}
                <h1 className="text-6x1 md:text-7x1 font-extrabold drop-shadow-(0__0_15px_rgba(166,74,255,0.8)]">
                    BackLit Crew
                </h1>

                {/* Tagline */}
                <p className="mt-4 text-x1 md:text-2x1 italic text-gray-300">
                    Alt Rock/Indie Pop | Dark | Vulnerable | Pure Energy
                </p>

                {/* Call-to_action Button */}
                <a
                    href="#music"
                    className="mt-12 px-6 py-3 rounded-2x1 bg-[#a64aff] hover:bg-[#4af0ff] shadow-lg shadow-purple-500/40 transition-all duration-300"
                >
                    Listen now
                </a>
            </div>

            {/* Tickets Section */}
            <section id="tickets" className="mt-24 max-w-2x1 mx-auto text-center p-6">
                <h2 className="text-4x1 font-bold mb-4 drop-shadow-[0_0_10px_rgba(74,240,255,0.6)]">
                    Tickets
                </h2>
                <p className="text-gray-300 mb-6">
                    Get your passes to see BackLit Crew live! Select your city and grab your tickets before they sell out.
                </p>
                <a
                    href="htttps://your-ticket-link.com"
                    target="_blank"
                    rel="noopener noferrer"
                    className="px-6 py-3 rounded-2x1 bg-[#4af0ff] hover:bg-[#a64aff] shadow-lg shadow-blue-500/40 transition-all duration-300"
                >
                    Buy Tickets
                </a>
            </section>
        </div>
    );
}