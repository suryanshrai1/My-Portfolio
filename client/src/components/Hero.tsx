import { useState, useEffect } from "react";
import { useIntersectionObserver } from "../hooks/use-intersection-observer";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const { ref, isIntersecting } = useIntersectionObserver();

  const texts = [
    "B.Tech CSE Student & Aspiring Full Stack Developer",
    "Passionate about Web Development",
    "Building the Future with Code",
    "Creating Innovative Solutions"
  ];

  useEffect(() => {
    const currentText = texts[currentIndex];
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }, 50);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, displayText.length + 1));
        if (displayText === currentText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }, 100);
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, texts]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // ✅ Direct image link (not album) + proxy
    const profilePicURL = "https://i.imgur.com/6ux1uNp.jpeg";

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto text-center">
        <div className={`transition-all duration-1000 ${isIntersecting ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Profile Image without Proxy */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
            <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
              <img
                src={profilePicURL}
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>


          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Suryansh Rai</span>
          </h1>

          <div className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-8 h-20 flex items-center justify-center">
            <span>{displayText}</span>
            <span className="animate-pulse ml-1">|</span>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
            Passionate about creating innovative web solutions and exploring the latest technologies.
            Currently in my second year of Computer Science Engineering, building my expertise in modern web development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/suryanshrai1/" className="text-2xl text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 transform hover:scale-110">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/suryanshrai1/" className="text-2xl text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 transform hover:scale-110">
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=raisurya558899@gmail.com&su=&body="
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <i className="fas fa-chevron-down text-2xl text-gray-400"></i>
        </div>
      </div>
    </section>
  );
}
