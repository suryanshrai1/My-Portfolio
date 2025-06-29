export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Your Name</h3>
            <p className="text-gray-400 mb-4">
              B.Tech CSE Student passionate about creating innovative web solutions and exploring cutting-edge technologies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Skills
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Skills</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded-full">React</span>
              <span className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded-full">JavaScript</span>
              <span className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded-full">Java</span>
              <span className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded-full">Python</span>
              <span className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded-full">Tailwind</span>
              <span className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded-full">HTML/CSS</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Your Name. Built with React & Tailwind CSS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
