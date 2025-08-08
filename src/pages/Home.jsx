import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";

export const Home = () => {
    return <div className="min-h-dvh bg-background text-foreground overflow-x-hidden">
        
        {/* Theme Toggle */}
        <ThemeToggle/>
        {/* Backgound Effects */}
        <StarBackground />

        {/* Navbar */}

        {/* Main Content */}
    </div>
};