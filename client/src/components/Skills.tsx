import { useIntersectionObserver } from "../hooks/use-intersection-observer";

const skills = [
  {
    name: "Java",
    icon: "fab fa-java",
    gradient: "from-red-500 to-orange-500",
    progress: 80
  },
  {
    name: "React",
    icon: "fab fa-react",
    gradient: "from-blue-400 to-cyan-400",
    progress: 80
  },
  {
    name: "JavaScript",
    icon: "fab fa-js-square",
    gradient: "from-yellow-400 to-yellow-500",
    progress: 80
  },
  {
    name: "Python",
    icon: "fab fa-python",
    gradient: "from-blue-500 to-yellow-400",
    progress: 60
  },
  {
    name: "HTML",
    icon: "fab fa-html5",
    gradient: "from-orange-500 to-red-500",
    progress: 85
  },
  {
    name: "CSS",
    icon: "fab fa-css3-alt",
    gradient: "from-blue-500 to-blue-600",
    progress: 85
  },
  {
    name: "Tailwind",
    icon: "fas fa-wind",
    gradient: "from-cyan-400 to-blue-500",
    progress: 80
  },
  {
    name: "C",
    icon: "fas fa-code",
    gradient: "from-gray-600 to-gray-700",
    progress: 60
  }
];

export default function Skills() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section 
      id="skills" 
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and programming languages I've been working with
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className={`group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 ${
                isIntersecting ? 'animate-slide-up' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${skill.gradient} rounded-lg flex items-center justify-center`}>
                  <i className={`${skill.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {skill.name}
                </h3>
                <div className="mt-2 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className={`bg-gradient-to-r ${skill.gradient} h-2 rounded-full transition-all duration-1000 ${
                      isIntersecting ? '' : 'w-0'
                    }`}
                    style={{ width: isIntersecting ? `${skill.progress}%` : '0%' }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
