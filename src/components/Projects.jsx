import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "EnglishPlatform",
      description: "Font end user interface for an English learning platform, featuring interactive lessons, quizzes, and progress tracking.",
      image: "https://github.com/DeshanDinuka/My-portfolio/blob/main/public/english.png?raw=true",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      liveUrl: "https://english-learning-platform-ten.vercel.app/",
      githubUrl: "https://github.com/DeshanDinuka/English-Learning-Platform"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://uizard.io/static/e5daa42c17923ec354ca0c0414827192/a8e47/320c8071bbbf30e4e49720dd798987a8896cbeb8-1440x835.png?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application that provides current conditions, forecasts, and historical data with beautiful visualizations.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Vue.js", "Chart.js", "OpenWeather API", "CSS3"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations and optimized performance.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      liveUrl: "https://my-portfolio-ten-tan-58.vercel.app/",
      githubUrl: "https://github.com/DeshanDinuka/My-portfolio"
    },
    {
      title: "Smart Canteen",
      description: "Students can browse daily menus, pre-order meals to avoid long queues, The app features real-time menu updates, Canteen owners can easily upload food items and manage menus",
      image: "https://www.sapphiresolutions.net/images/canteen_management/img_banner.svg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Flutter","Firebase", "Dart"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Learning Management System",
      description: "An educational platform with course management, progress tracking, and interactive learning modules for students and instructors.",
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Express.js", "MySQL", "AWS S3"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 flex space-x-2">
                    <a
                      href={project.liveUrl}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;