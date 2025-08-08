import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";
import { Navbar } from "../components/Navbar";

export const Home = () => {
    return <div className="min-h-dvh bg-background text-foreground overflow-x-hidden">
        
        {/* Theme Toggle */}
        <ThemeToggle/>
        {/* Backgound Effects */}
        <StarBackground />

        {/* Navbar */}
        <Navbar />
        {/* Main Content */}
    </div>
};