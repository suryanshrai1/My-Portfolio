import { useIntersectionObserver } from "../hooks/use-intersection-observer";

export default function About() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isIntersecting ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
            <img
              src="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Student coding workspace"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>

          <div className={`transition-all duration-1000 delay-300 ${isIntersecting ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              B.Tech Computer Science Engineering Student
            </h3>

            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                I'm currently pursuing my Bachelor's degree in Computer Science Engineering, driven by a passion for
                technology and innovation. In my second year, I've already developed a strong foundation in multiple
                programming languages and modern web development frameworks.
              </p>

              <p>
                My journey in programming started with C and Java, building logical thinking and problem-solving skills.
                I've since expanded into web development, mastering HTML, CSS, JavaScript, and modern frameworks like React.
                I'm particularly interested in creating responsive, user-friendly applications that solve real-world problems.
              </p>

              <p>
                When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and
                collaborating with fellow developers. I'm always eager to learn and take on new challenges that push
                my boundaries.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">10+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">3rd Year</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">B.Tech CSE</div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="https://drive.google.com/file/d/1xlkSRIWDBfe0zy1WSFxmGDdkiNlr_wlg/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
              >
                <i className="fas fa-download mr-2"></i>
                Download Resume
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
