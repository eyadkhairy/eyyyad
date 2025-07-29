"use client";
import React from "react";

function MainComponent() {
  const [activeSection, setActiveSection] = React.useState("home");
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    setIsLoaded(true);
  }, []);

  const projects = [
    {
      title: "Wild Wheels Event",
      description:
        "Dynamic automotive event coverage with cinematic transitions and professional editing",
      url: "https://youtu.be/UgHkxsK5aLI?si=xwvRAyyMykv1ckrb",
      category: "Event Coverage",
    },
    {
      title: "Charity Work",
      description:
        "Heartwarming charity event documentation with emotional storytelling",
      url: "https://youtu.be/IyND0Df5Fis?si=aIm9HqGVeffQuBaw",
      category: "Documentary",
    },
    {
      title: "Cinematic Style",
      description:
        "High-end cinematic production showcasing advanced visual techniques",
      url: "https://youtu.be/CB_b_xqD6Mg?si=qxX02cMpf-9qCvWx",
      category: "Cinematic",
    },
    {
      title: "Food Advertisement",
      description:
        "Appetizing food commercial with mouth-watering visuals and smooth transitions",
      url: "https://youtu.be/MadX23f6mGM?si=1mmNQ-T5pypDy5KB",
      category: "Commercial",
    },
    {
      title: "Auto Moka",
      description:
        "Creative automotive content with engaging visual storytelling",
      url: "https://youtube.com/shorts/q2Xy5oA6TWQ?si=qtQAxIr5T__ZhQ30",
      category: "Social Media",
    },
    {
      title: "Core",
      description:
        "Dynamic gym and fitness content with energetic editing and motivational flow",
      url: "https://youtube.com/shorts/JXlghF6ONJo?si=7do1CuYF2z2w3vuj",
      category: "Fitness",
    },
    {
      title: "Auto Moka 2",
      description:
        "Continued automotive series with consistent branding and visual excellence",
      url: "https://youtube.com/shorts/Ij5Jw4LOw6Y?si=M1X51_U1ltJWPqdb",
      category: "Social Media",
    },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Eyad Khairy
            </div>
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Portfolio", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`hover:text-purple-400 transition-all duration-300 ${
                    activeSection === item.toLowerCase()
                      ? "text-purple-400"
                      : "text-gray-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-20 z-10"
      >
        <div className="text-center max-w-4xl mx-auto px-4">
          <div
            className={`transform transition-all duration-2000 ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <div className="mb-8">
              <img
                src="https://i.postimg.cc/G8vKzb06/IMG-20250729-012538-121.jpg"
                alt="Eyad Khairy"
                className="w-32 h-32 rounded-full mx-auto border-4 border-purple-500 shadow-2xl shadow-purple-500/50 animate-pulse"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              Eyad Khairy
            </h1>
            <p
              className="text-xl md:text-2xl text-gray-300 mb-8 animate-pulse"
              style={{ animationDelay: "0.5s" }}
            >
              Video Editor & Visual Storyteller
            </p>
            <p
              className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto animate-pulse"
              style={{ animationDelay: "1s" }}
            >
              18 years old • 2+ Years Experience • Based in Egypt
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-pulse"
              style={{ animationDelay: "1.5s" }}
            >
              <button
                onClick={() => scrollToSection("portfolio")}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/50"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-4 border-2 border-purple-600 rounded-full text-purple-400 font-semibold hover:bg-purple-600 hover:text-white transform hover:scale-105 transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate and skilled video editor based in Egypt, with
                over 2 years of experience in the industry. Despite being just
                18 years old, I've already worked with top companies and built a
                strong portfolio.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <p className="text-gray-300">
                    Proven Industry Experience – Worked with Dtag and Omedia
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div
                    className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <p className="text-gray-300">
                    Leadership & Teamwork – Founder and leader of Youth Media
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div
                    className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>
                  <p className="text-gray-300">
                    Adobe Suite Proficiency – Premiere Pro & After Effects
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div
                    className="w-2 h-2 bg-green-500 rounded-full animate-pulse"
                    style={{ animationDelay: "1.5s" }}
                  ></div>
                  <p className="text-gray-300">
                    Adaptability & Creativity – Always eager to learn and
                    innovate
                  </p>
                </div>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 mt-8">
                <p className="text-sm text-gray-400 italic">
                  <strong>Note:</strong> As part of my religion, I do not
                  incorporate music into my edits. However, I'm adept at using
                  alternative audio elements (e.g., ambient sounds, voiceovers,
                  and SFX) to maintain energy and impact.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl p-8 border border-gray-800">
                <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Skills & Expertise
                </h3>
                <div className="space-y-4">
                  {[
                    { skill: "Adobe Premiere Pro", level: 95 },
                    { skill: "Adobe After Effects", level: 90 },
                    { skill: "Visual Storytelling", level: 95 },
                    { skill: "Color Grading", level: 85 },
                    { skill: "Motion Graphics", level: 80 },
                    { skill: "Team Leadership", level: 90 },
                  ].map((item, index) => (
                    <div key={item.skill} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-300">{item.skill}</span>
                        <span className="text-purple-400">{item.level}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full animate-pulse"
                          style={{
                            width: `${item.level}%`,
                            animationDelay: `${index * 0.2}s`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            My Portfolio
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 hover:border-purple-500 transition-all duration-500 hover:transform hover:scale-105 animate-pulse"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-48 bg-gradient-to-br from-purple-900/30 to-pink-900/30 flex items-center justify-center">
                  <div className="text-6xl text-purple-400 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                    <i className="fas fa-play-circle"></i>
                  </div>
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-purple-600/30 text-purple-300 text-xs rounded-full mb-3">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-purple-400 hover:text-pink-400 transition-colors duration-300 font-semibold"
                  >
                    <span>Watch Video</span>
                    <i className="fas fa-external-link-alt text-sm"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <div className="text-center mb-12">
            <p className="text-xl text-gray-300 mb-8">
              Driven by a passion for visual storytelling, I'm committed to
              creating content that stands out. Let's bring your vision to life!
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <a
              href="mailto:eydookhairy@gmail.com"
              className="group bg-gray-900/50 border border-gray-800 rounded-xl p-8 text-center hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-4xl text-purple-400 mb-4 group-hover:animate-pulse">
                <i className="fas fa-envelope"></i>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Email</h3>
              <p className="text-gray-400">eydookhairy@gmail.com</p>
            </a>
            <a
              href="tel:+2001004567328"
              className="group bg-gray-900/50 border border-gray-800 rounded-xl p-8 text-center hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-4xl text-green-400 mb-4 group-hover:animate-pulse">
                <i className="fas fa-phone"></i>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Phone</h3>
              <p className="text-gray-400">+20 010 0456 7328</p>
            </a>
            <a
              href="https://www.instagram.com/khairy_ve?igsh=aXMzZW9kajIzMDgx"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-900/50 border border-gray-800 rounded-xl p-8 text-center hover:border-pink-500 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-4xl text-pink-400 mb-4 group-hover:animate-pulse">
                <i className="fab fa-instagram"></i>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Instagram</h3>
              <p className="text-gray-400">@khairy_ve</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Eyad Khairy. All rights reserved. • Video Editor & Visual
            Storyteller
          </p>
        </div>
      </footer>

      {/* FontAwesome Icons */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.4); }
          50% { box-shadow: 0 0 40px rgba(168, 85, 247, 0.8); }
        }
        
        @keyframes slideInFromLeft {
          0% { transform: translateX(-100px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideInFromRight {
          0% { transform: translateX(100px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes fadeInUp {
          0% { transform: translateY(50px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        * {
          scroll-behavior: smooth;
        }
        
        body {
          font-family: 'Inter', sans-serif;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        .animate-slideInLeft {
          animation: slideInFromLeft 1s ease-out;
        }
        
        .animate-slideInRight {
          animation: slideInFromRight 1s ease-out;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }
      `}</style>
    </div>
  );
}

export default MainComponent;