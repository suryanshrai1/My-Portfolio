import { useIntersectionObserver } from "../hooks/use-intersection-observer";

const projects = [
  {
    title: "Alumni Network Platform",
    description:
      "A modern web application for connecting alumni, sharing events, and fostering community engagement. Features real-time chat, event management, and a searchable alumni directory.",
    features: [
      "User Authentication (Supabase Auth)",
      "Alumni Directory with search/filter",
      "Event Management (post, browse, register)",
      "Real-Time Chat",
      "Profile Management",
      "Responsive Design",
      "Toast Notifications"
    ],
    image: "https://raw.githubusercontent.com/suryanshrai1/Alumni-Network-Platform/main/public/banner.png",
    tags: ["React", "Supabase", "Vite", "CSS Modules"],
    githubUrl: "https://github.com/suryanshrai1/Alumni-Network-Platform",
    liveUrl: "https://alumni-network-platform-six.vercel.app/"
  },
  {
    title: "KIRA-AI Chatbot",
    description:
      "KIRA is an AI-powered chatbot built with Flask (Python) and a responsive HTML/CSS/JS frontend. Integrates Google Gemini API for intelligent responses and images, with features like voice input, theme toggle, memory panel, PDF/image analysis, and more.",
    features: [
      "Conversational AI using Google Gemini",
      "Image generation from text prompts",
      "PDF and image analysis",
      "Voice input and output (with style selection)",
      "Light/Dark mode with local preference memory",
      "Memory panel for context retention",
      "Fully responsive frontend with Tailwind CSS"
    ],
    image: "https://raw.githubusercontent.com/suryanshrai1/kira-ai-chatbot/main/static/kira-banner.png", // Use a placeholder or update if you have a banner
    tags: ["Python", "Flask", "HTML", "CSS", "Tailwind CSS", "JavaScript", "Google Gemini API"],
    githubUrl: "https://github.com/suryanshrai1/kira-ai-chatbot",
    liveUrl: "#" // No public demo link provided
  },
  {
    title: "QuizRush",
    description:
      "A responsive, interactive quiz application to test knowledge across topics, view scores, and compete on a leaderboard.",
    features: [
      "Start quizzes by topic or randomly",
      "Leaderboard for top scores",
      "Name entry for score tracking",
      "Restart/quit quizzes anytime",
      "Fully responsive UI",
      "Persistent leaderboard (LocalStorage)"
    ],
    image: "https://raw.githubusercontent.com/suryanshrai1/quizrush/main/public/banner.png",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    githubUrl: "https://github.com/suryanshrai1/quizrush",
    liveUrl: "https://quiz-rush-gamma.vercel.app/"
  },
  {
    title: "SpendSense – Smart Expense Tracker",
    description:
      "A modern, minimal, and intuitive expense tracking app to manage income/expenses, view visual summaries, and analyze spending patterns with interactive charts.",
    features: [
      "Add/Edit/Delete income & expenses",
      "Pie chart for expense distribution",
      "Profile data auto-fetch",
      "Theme toggle (light/dark)",
      "Persistent data (LocalStorage)",
      "Responsive, stylish UI"
    ],
    image: "https://raw.githubusercontent.com/suryanshrai1/SpendSense/main/public/banner.png",
    tags: ["HTML", "Tailwind CSS", "JavaScript", "Chart.js"],
    githubUrl: "https://github.com/suryanshrai1/SpendSense",
    liveUrl: "https://suryanshrai1.github.io/SpendSense/"
  },
  {
    title: "Joburio",
    description:
      "A full-featured, modern job portal connecting job seekers with top companies. Smooth experience for candidates, employers, and admins.",
    features: [
      "Advanced job search & filters",
      "JWT-based authentication",
      "Separate dashboards (seeker/employer)",
      "Job applications & tracking",
      "Employer tools & admin panel",
      "Notifications & real-time updates"
    ],
    image: "https://raw.githubusercontent.com/suryanshrai1/joburio/main/public/banner.png",
    tags: ["React", "Vite", "TypeScript", "Tailwind CSS", "React Query"],
    githubUrl: "https://github.com/suryanshrai1/joburio",
    liveUrl: "https://joburio.vercel.app/"
  },
  {
    title: "Community Messaging (with Blockchain)",
    description:
      "A minimal messaging app built with Next.js, Supabase, and blockchain integration. Register, post messages, manage profiles, and explore a demonstration blockchain.",
    features: [
      "Email/password authentication",
      "Message board & personal dashboard",
      "Profile management",
      "SHA-256 message hashing",
      "Blockchain explorer",
      "RLS security & JWT auth"
    ],
    image: "https://raw.githubusercontent.com/suryanshrai1/Community-Messaging/main/public/banner.png",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Blockchain"],
    githubUrl: "https://github.com/suryanshrai1/Community-Messaging",
    liveUrl: "https://community-messaging.vercel.app/"
  }
];

const tagColors = {
  React: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
  "Node.js": "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
  MongoDB: "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
  Tailwind: "bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200",
  "Tailwind CSS": "bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200",
  JavaScript: "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200",
  API: "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200",
  CSS: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
  Vite: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
  Java: "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200",
  Swing: "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
  GUI: "bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200",
  Python: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
  Canvas: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
  Supabase: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
  "CSS Modules": "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
  "TypeScript": "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
  "Chart.js": "bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200",
  "Next.js": "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200",
  Blockchain: "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
  "React Query": "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
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
                      target="_blank" rel="noopener noreferrer"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a 
                      href={project.liveUrl}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                      target="_blank" rel="noopener noreferrer"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  {project.description}
                </p>
                {project.features && (
                  <ul className="text-gray-500 dark:text-gray-300 text-sm mb-4 list-disc list-inside">
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                )}
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
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-center transition-colors duration-200"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/suryanshrai1"
            className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
            target="_blank" rel="noopener noreferrer"
          >
            <i className="fab fa-github mr-2"></i>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
