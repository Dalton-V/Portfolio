import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return (<section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1"> Dalton</span>
                    <span className="ml-2 opacity-0 animate-fade-in-delay-2"> Vislisel</span>
                </h1>
                <p className="text-lg md:text-xl max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    As a passionate Full Stack Developer, I have experience in building robust, 
                    scalable, and client focused web applications from concept to deployment. 
                    Having hands-on knowledge in a range of technologies including C#, C++, JavaScript, SQL, Mongo, AWS, and Azure. 
                    I enjoy solving complex problems and delivering seamless digital experiences.
                </p>

                <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className="cosmic-button">
                        View My Work
                    </a>
                </div>
            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2"> Sroll </span>
            <ArrowDown className="h-5 w-5 text-primary"/>
        </div>
    </section>);
};