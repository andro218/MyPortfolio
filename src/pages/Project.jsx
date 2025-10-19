import "./Project.css";
import "../sectionAnimations.css";
import CardSwap, { Card } from "../components/CardSwap";
import AnimatedContent from "../components/AnimatedContent";
// <- Adjust path if needed

const Project = () => {
  const projectList = [
    {
      title: "ClassNotify",
      description:
        "A scheduling app that helps students and teachers stay organized with class reminders and timetable management.",
      image: "/images/classnotify.jpg",
    },
    {
      title: "MicroDave Production",
      description:
        "A modern music production website showcasing audio projects, services, and the creative work of MicroDave.",
      image: "/images/microdave.jpg",
    },
    {
      title: "Chef Tiu's Signature",
      description:
        "A static website designed for a restaurant, highlighting its menu, branding, and unique culinary style.",
      image: "/images/cheftius.png",
    },
  ];

  return (
    <section id="projects-sec" className="projects-section section-fade-in">
      <div className="section-title">
        <h1>Projects from the Crypt</h1>
      </div>

      <AnimatedContent
        distance={60}
        duration={1}
        ease="power3.out"
        threshold={0.15}
      >
        <div className="projects-content">
          {/* Left Column - Introduction */}
          <div className="projects-intro">
            <h2>Haunting Creations Born from the Darkness</h2>
            <p>
              Within the depths of this digital crypt lies a collection of
              projects that blend innovation with eerie aesthetic. Each creation
              is a testament to merging technology with the supernatural,
              crafted to deliver unforgettable experiences.
            </p>
          </div>

          {/* Right Column - Project Cards */}
          <div className="projects-container">
            <CardSwap
              width={480}
              height={500}
              cardDistance={70}
              verticalDistance={90}
              delay={4500}
              pauseOnHover={true}
              easing="elastic"
            >
              {projectList.map((proj, index) => (
                <Card key={index} customClass="project-card">
                  <h3>{proj.title}</h3>
                  <p>{proj.description}</p>
                  {proj.image && (
                    <img
                      src={proj.image}
                      alt={`${proj.title} screenshot`}
                      className="project-image"
                      loading="lazy"
                    />
                  )}
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>
      </AnimatedContent>

      {/* === New Artwork Section === */}
    </section>
  );
};

export default Project;
