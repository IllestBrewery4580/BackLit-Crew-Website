import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Music from "./pages/Music";
import Tickets from "./pages/Tickets";
import Showtime from "./pages/Showtime";
import SidebarMenu from "./components/SidebarMenu";

function App() {
    return (
        <Router>
            <SidebarMenu /> {/* <-- hamburger menu */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/music" element={<Music />} />
                <Route path="/tickets" element={<Tickets />} />
                <Route path="/showtime" element={<Showtime />} />
            </Routes>
        </Router>
    )
}

export default App;