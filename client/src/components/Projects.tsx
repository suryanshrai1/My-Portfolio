import { useIntersectionObserver } from "../hooks/use-intersection-observer";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform built with React and Node.js featuring user authentication, product catalog, shopping cart, and payment integration.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tags: ["React", "Node.js", "MongoDB"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Task Manager",
    description: "A responsive task management application with drag-and-drop functionality, deadline tracking, and team collaboration features.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tags: ["React", "Tailwind", "JavaScript"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Weather Dashboard",
    description: "A beautiful weather application with real-time data, 7-day forecasts, and interactive maps. Features location-based weather and notifications.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tags: ["JavaScript", "API", "CSS"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Personal Portfolio",
    description: "A responsive personal portfolio website showcasing my projects and skills. Features smooth animations, dark mode, and optimized performance.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tags: ["React", "Tailwind", "Vite"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Scientific Calculator",
    description: "A comprehensive calculator application built with Java Swing featuring basic arithmetic, scientific functions, and memory operations.",
    image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tags: ["Java", "Swing", "GUI"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Algorithm Visualizer",
    description: "An interactive tool for visualizing sorting algorithms and data structures. Helps students understand complex algorithms through animations.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tags: ["Python", "JavaScript", "Canvas"],
    githubUrl: "#",
    liveUrl: "#"
  }
];

const tagColors = {
  "React": "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
  "Node.js": "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
  "MongoDB": "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
  "Tailwind": "bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200",
  "JavaScript": "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200",
  "API": "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200",
  "CSS": "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
  "Vite": "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
  "Java": "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200",
  "Swing": "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
  "GUI": "bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200",
  "Python": "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
  "Canvas": "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
};

export default function Projects() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section 
      id="projects" 
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on during my studies and personal time
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`group bg-white dark:bg-gray-700 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-200 dark:border-gray-600 ${
                isIntersecting ? 'animate-slide-up' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {project.title}
                  </h3>
                  <div className="flex space-x-2">
                    <a 
                      href={project.githubUrl}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a 
                      href={project.liveUrl}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className={`px-3 py-1 text-xs font-medium rounded-full ${tagColors[tag as keyof typeof tagColors] || 'bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200'}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#"
            className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
          >
            <i className="fab fa-github mr-2"></i>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
