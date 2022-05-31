import FPImage from "../assets/images/finished-project.svg";
import BPImage from "../assets/images/our-blog-posts.svg";
import SCImage from "../assets/images/satisfied-client.svg";
import TMImage from "../assets/images/team-members.svg";
import ProjectCarousel from "../components/ProjectCarousel";
import ProjectHeader from "../components/ProjectHeader";
import Statistic from "../components/Statistic";

const Projects = () => {
  return (
    <section className="our-projects overflow-hidden" id="projects">
      <ProjectHeader
        buttonText="See all"
        title="Taste of our available games"
      />

      <ProjectCarousel />

      <div className="container">
        <div className="row pt-5 mt-5 pb-5 mb-5">
          <Statistic
            data-aos="fade-down"
            image={SCImage}
            title="Satisfied Clients"
            prefix="%"
            className="scVal"
          />
          <Statistic
            image={FPImage}
            title="Games Played"
            prefix="+"
            className="fpVal"
          />
          <Statistic
            image={TMImage}
            title="Available Games"
            prefix=""
            className={"tMVal"}
          />
          <Statistic
            className="bPVal"
            image={BPImage}
            title="Players"
            prefix="+"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
