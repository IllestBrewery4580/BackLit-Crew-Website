import { useState } from "react";
import { Link } from "react-router-dom";
import "./SidebarMenu.css"; // We'll style this next

function SidebarMenu() {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => setOpen(!open);

    return (
        <div className="sidebar-menu">
            {/* Hamburger button */}
            <button className="hamburger" onClick={toggleMenu}>
                {/* button used */}
            </button>
            {/* Dropdown menu */}
            {open && (
                <div className="menu-dropdown">
                    <Link to="/" onClick={() => setOpen(false)}>Home</Link>
                    <Link to="/about" onClick={() => setOpen(false)}>About</Link>
                    <Link to="/music" onClick={() => setOpen(false)}>Music</Link>
                    <Link to="/showtime" onClick={() => setOpen(false)}>It's Showtime!</Link>
                </div>
            )}
        </div>
    );
}