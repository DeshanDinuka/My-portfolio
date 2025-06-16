import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Clean Code",
      description: "Writing maintainable, efficient, and well-documented code that follows best practices."
    },
    {
      icon: <Palette className="w-8 h-8 text-accent-600" />,
      title: "Modern Design",
      description: "Creating beautiful, intuitive user interfaces with attention to detail and user experience."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Performance",
      description: "Building fast, optimized applications that deliver exceptional user experiences."
    }
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate developer with a keen eye for design and a love for creating digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
         <div className="md:w-3/3 w-full flex justify-center">
          <img
            src="/5.jpg"
            alt="Profile"
            className="rounded-xl shadow-lg w-full max-w-xs md:max-w-sm"
          />
        </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Building Digital Solutions with Passion
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm a full-stack developer with 2+ years of experience creating web applications 
              that solve real-world problems. My journey began with a curiosity about how websites work, 
              and it has evolved into a passion for crafting digital experiences that make a difference.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or enjoying a good book. I believe in continuous learning and staying up-to-date 
              with the latest industry trends and best practices.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-xl shadow-lg mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;