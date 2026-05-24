import { Cpu, Radio, CircuitBoard, GitBranch, Code2, Terminal, Waves, ShieldCheck, LayoutGrid, Zap, Award, Rocket, BadgeCheck } from "lucide-react";

export default function Portfolio() {
  const domains = [
    {
      title: "Embedded Systems",
      gradient: "from-cyan-500/20 to-blue-600/20",
      border: "border-cyan-500/30",
      glow: "shadow-cyan-500/20",
      openings: [
        "Embedded Engineer",
        "Firmware Developer",
        "IoT Developer",
        "Linux Embedded Developer"
      ],
      skills: [
        { name: "Embedded Linux", icon: Terminal },
        { name: "C Programming", icon: Code2 },
        { name: "Embedded C", icon: Cpu },
        { name: "Basic C++", icon: Code2 },
        { name: "Python", icon: Code2 },
        { name: "Arduino IDE", icon: Cpu },
        { name: "Git & GitHub", icon: GitBranch },
        { name: "Microcontroller Fundamentals", icon: Zap }
      ]
    },
    {
      title: "RF & Signal Engineering",
      gradient: "from-violet-500/20 to-fuchsia-600/20",
      border: "border-violet-500/30",
      glow: "shadow-violet-500/20",
      openings: [
        "RF Engineer",
        "Communication Engineer",
        "Signal Processing Intern",
        "Microwave Design Engineer"
      ],
      skills: [
        { name: "ANSYS HFSS", icon: Radio },
        { name: "Python", icon: Code2 },
        { name: "MATLAB", icon: Waves },
        { name: "Simulink", icon: Waves },
        { name: "LTSpice", icon: CircuitBoard },
        { name: "Microwave Sensing", icon: Radio },
        { name: "Communication Systems", icon: Zap },
        { name: "Signal Analysis", icon: LayoutGrid }
      ]
    },
    {
      title: "PCB Design & Hardware",
      gradient: "from-emerald-500/20 to-green-600/20",
      border: "border-emerald-500/30",
      glow: "shadow-emerald-500/20",
      openings: [
        "PCB Design Engineer",
        "Hardware Engineer",
        "Electronics Design Intern",
        "Circuit Design Engineer"
      ],
      skills: [
        { name: "Altium Designer", icon: CircuitBoard },
        { name: "KiCad", icon: CircuitBoard },
        { name: "LTSpice", icon: Zap },
        { name: "Circuit Simulation", icon: Cpu },
        { name: "PCB Design", icon: LayoutGrid },
        { name: "Hardware Prototyping", icon: Cpu },
        { name: "Schematic Design", icon: Code2 },
        { name: "Circuit Debugging", icon: ShieldCheck }
      ]
    }
  ];

  const certificates = [
    {
      title: "MATLAB & Simulink",
      issuer: "MathWorks",
      icon: Waves,
      color: "from-orange-500 to-yellow-500"
    },
    {
      title: "PCB Design using Altium",
      issuer: "Altium Designer",
      icon: CircuitBoard,
      color: "from-emerald-500 to-green-500"
    },
    {
      title: "Drone Technology & Control Systems",
      issuer: "Technical Certification • Arduino • Servo Motor • Gear Control",
      icon: Rocket,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "VLSI Fundamentals",
      issuer: "Technical Certification",
      icon: BadgeCheck,
      color: "from-violet-500 to-fuchsia-500"
    }
  ];

  const internships = [
    {
      company: "North Eastern Railways",
      role: "Signal & Telecom Trainee",
      duration: "June - July 2026",
      description:
        "Observed railway signaling systems including interlocking, track circuits, and optical fiber communication infrastructure."
    },
    {
      company: "Hanu Autonics Limited",
      role: "Industrial Electronics Trainee",
      duration: "May 2026",
      description:
        "Worked on industrial electronics concepts, circuit debugging, and vehicle electronic control systems."
    }
  ];

  const projects = [
    {
      title: "Machine Learning Assisted Milk Adulteration Detection",
      description:
        "Developed a microwave microstrip antenna-based adulteration detection system using machine learning and dielectric property analysis.",
      tech: "ANSYS • Python • CNN • Pandas • Scikit-learn",
      link: "https://github.com/ayushsrivasatava/Machine-Learning-assisted-Antenna-for-adulterant-detection-in-milk"
    },
    {
      title: "Transformerless Power Supply PCB Design",
      description:
        "Designed and simulated a transformerless power supply PCB with safety, isolation, and thermal considerations.",
      tech: "KiCad • LTSpice",
      link: "https://github.com/ayushsrivasatava/Transformerless_Power_Supply"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide">Ayush Srivastava</h1>
          <div className="flex gap-6 text-sm md:text-base">
            <a href="#about" className="hover:text-cyan-400 transition">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-black"></div>

        <div className="absolute top-24 left-10 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-violet-500/10 blur-3xl rounded-full animate-pulse"></div>
        <div className="max-w-5xl text-center relative z-10">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 mb-8 backdrop-blur-xl animate-pulse">
            <Award className="w-5 h-5" />
            <span className="uppercase tracking-[0.25em] text-sm font-semibold">
              GATE Qualified in 3rd Year
            </span>
          </div>

          <p className="uppercase tracking-[0.3em] text-gray-400 mb-4">
            Electronics & Communication Engineering
          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-tight mb-6 tracking-tight">
            Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent animate-pulse">Ayush Srivastava</span>
          </h1>

          <h2 className="text-2xl md:text-4xl font-semibold text-gray-400 mb-6">
            Embedded Systems & RF Engineering Enthusiast
          </h2>

          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Passionate about Embedded Systems, Embedded Linux, PCB Design,
            RF & Microwave Engineering, and practical electronics development.
            Currently pursuing B.Tech in ECE at MMMUT Gorakhpur and actively building
            projects in embedded and hardware domains.
          </p>

          <div className="mt-16 flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href="#projects"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 text-white font-bold hover:scale-105 transition-all duration-300 shadow-2xl shadow-cyan-500/30"
            >
              View Projects
            </a>

            <a
              href="https://raw.githubusercontent.com/ayushsrivasatava/resume-/main/Ayush%20SrivastavaECE%202027.pdf"
              download
              className="px-8 py-4 rounded-2xl border border-cyan-500/30 bg-cyan-500/5 hover:bg-cyan-500/10 transition-all duration-300 backdrop-blur-xl"
            >
              Download Resume
            </a>

            <a
              href="https://raw.githubusercontent.com/ayushsrivasatava/resume-/main/Ayush%20SrivastavaECE%202027.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl border border-cyan-500/30 bg-cyan-500/5 hover:bg-cyan-500/10 transition-all duration-300 backdrop-blur-xl"
            >
              View Resume
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 border-t border-gray-800">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-gray-400 leading-8 text-lg">
              I am an Electronics and Communication Engineering undergraduate at
              Madan Mohan Malaviya University of Technology (MMMUT), Gorakhpur.
              My primary interests lie in Embedded Systems, Embedded Linux,
              PCB Design, RF & Microwave Sensing, and hardware-oriented development.
            </p>

            <p className="text-gray-400 leading-8 text-lg mt-6">
              I enjoy working on practical electronics projects involving simulation,
              PCB design, embedded hardware, and system-level implementation.
              Qualified GATE 2026 in 3rd year of B.Tech with a score of 460 and actively
              exploring modern embedded technologies, RF systems, and hardware-software integration.
            </p>

            <div className="mt-8 mb-6 inline-flex items-center gap-3 px-5 py-3 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 backdrop-blur-xl text-cyan-300 font-semibold">
              <Award className="w-5 h-5" />
              <span>GATE Qualified in 3rd Year</span>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 text-gray-300">
              <div>
                <p className="font-semibold">Name</p>
                <p className="text-gray-400">Ayush Srivastava</p>
              </div>

              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-400">ayushsrivastavaind@email.com</p>
              </div>

              <div>
                <p className="font-semibold">Education</p>
                <p className="text-gray-400">B.Tech ECE</p>
              </div>

              <div>
                <p className="font-semibold">Location</p>
                <p className="text-gray-400">Rajasthan, India</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 shadow-2xl">
            <h3 className="text-2xl font-semibold mb-4">Education</h3>
            <div className="space-y-6 text-gray-300">
              <div>
                <p className="font-semibold">MMMUT Gorakhpur</p>
                <p className="text-gray-400">B.Tech in Electronics & Communication Engineering</p>
                <p className="text-gray-500">CGPA: 8.44</p>
              </div>

              <div>
                <p className="font-semibold">Class 12th - Children's Academy Convent School</p>
                <p className="text-gray-500">CBSE Rajasthan • 84%</p>
              </div>

              <div>
                <p className="font-semibold">Class 10th - St Anselm Sr. Sec. School</p>
                <p className="text-gray-500">CBSE Rajasthan • 95%</p>
              </div>

              <div>
                <p className="font-semibold">Achievements</p>
                <p className="text-gray-400">
                  GATE 2026 Qualified in 3rd Year
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="py-24 px-6 border-t border-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-950/20 via-black to-cyan-950/20"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center justify-between mb-16 flex-wrap gap-5">
            <div>
              <p className="text-orange-400 uppercase tracking-[0.3em] text-sm mb-4">
                Certifications
              </p>

              <h2 className="text-5xl font-extrabold bg-gradient-to-r from-orange-400 via-yellow-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                Licenses & Certifications
              </h2>
            </div>

            <div className="px-6 py-3 rounded-2xl border border-orange-500/20 bg-orange-500/10 backdrop-blur-xl text-orange-300 font-semibold">
              Industry Certifications & Technical Training
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certificates.map((cert, index) => {
              const Icon = cert.icon;

              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-[30px] border border-gray-800 bg-[#0b1120]/90 backdrop-blur-xl p-8 hover:-translate-y-3 transition-all duration-500 shadow-2xl"
                >
                  <div className={`absolute inset-0 opacity-10 bg-gradient-to-br ${cert.color}`}></div>

                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition duration-500`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 leading-8">
                    {cert.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-6">
                    {cert.issuer}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-28 px-6 border-t border-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/20 via-black to-violet-950/20"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
              Technical Expertise
            </p>

            <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Engineering Domains
            </h2>

            <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-8">
              Specialized technical domains focused on Embedded Systems,
              RF Engineering, PCB Design, and hardware-oriented development.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {domains.map((domain, index) => (
              <div
                key={index}
                className={`relative rounded-[32px] p-[1px] bg-gradient-to-br ${domain.gradient} ${domain.glow} shadow-2xl hover:-translate-y-2 transition-all duration-500`}
              >
                <div className="h-full bg-[#0b1120]/95 backdrop-blur-xl rounded-[32px] border border-gray-800 p-8">
                  <div className="flex items-center gap-5 mb-8">
                    <div className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${domain.gradient} border ${domain.border} flex items-center justify-center shadow-2xl`}>
                      {domain.title.includes("Embedded") && <Cpu className="w-8 h-8 text-cyan-300" />}
                      {domain.title.includes("RF") && <Radio className="w-8 h-8 text-violet-300" />}
                      {domain.title.includes("PCB") && <CircuitBoard className="w-8 h-8 text-emerald-300" />}
                    </div>

                    <h3 className="text-3xl font-bold text-white leading-tight">
                      {domain.title}
                    </h3>
                  </div>

                  <div className="mb-8">
                    <p className="text-sm uppercase tracking-[0.25em] text-gray-500 mb-4">
                      Possible Roles
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {domain.openings.map((opening, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 rounded-full bg-black/40 border border-gray-700 text-sm text-gray-300"
                        >
                          {opening}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-gray-500 mb-5">
                      Skills & Tools
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                      {domain.skills.map((skill, idx) => {
                        const Icon = skill.icon;

                        return (
                          <div
                            key={idx}
                            className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-black/30 p-4 hover:border-cyan-500/40 transition-all duration-300"
                          >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-cyan-500/10 to-violet-500/10"></div>

                            <div className="relative flex flex-col items-center justify-center gap-3">
                              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 flex items-center justify-center border border-gray-700">
                                <Icon className="w-6 h-6 text-cyan-400" />
                              </div>

                              <p className="text-sm font-medium text-gray-200 text-center leading-6">
                                {skill.name}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14">Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-3xl p-8 border border-gray-800 hover:border-gray-600 transition"
              >
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                <p className="text-gray-400 leading-7">{project.description}</p>

                <p className="mt-4 text-sm text-gray-500">{project.tech}</p>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
              rel="noopener noreferrer"
                    className="inline-block mt-5 text-white underline underline-offset-4"
                  >
                    View Project
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Experience */}
      <section id="internships" className="py-24 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14">Internships & Training</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {internships.map((internship, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-3xl p-8 border border-gray-800 hover:border-gray-600 transition"
              >
                <h3 className="text-2xl font-semibold mb-2">{internship.company}</h3>
                <p className="text-gray-400 mb-2">{internship.role}</p>
                <p className="text-sm text-gray-500 mb-5">{internship.duration}</p>
                <p className="text-gray-400 leading-7">{internship.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 border-t border-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Contact</h2>

          <p className="text-gray-400 text-lg leading-8 mb-10">
            Interested in collaborating on Embedded Systems, Electronics, or Software projects?
            Feel free to connect.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="mailto:ayushsrivastavaind@gmail.com"
              className="px-8 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition"
            >
              Email Me
            </a>

            <a
              href="https://github.com/ayushsrivasatava"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl border border-cyan-500/30 bg-cyan-500/5 hover:bg-cyan-500/10 transition-all duration-300 backdrop-blur-xl"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/ayush-srivastava-382030269"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl border border-cyan-500/30 bg-cyan-500/5 hover:bg-cyan-500/10 transition-all duration-300 backdrop-blur-xl"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500 text-sm">
        © 2026 Ayush Srivastava • ECE 2027 Portfolio
      </footer>
    </div>
  );
}
