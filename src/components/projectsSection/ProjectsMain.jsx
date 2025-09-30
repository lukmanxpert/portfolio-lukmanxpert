import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import image1 from "../../assets/MatrimonyBD.jpg"
import image2 from "../../assets/Whereislt.jpg"
import image3 from "../../assets/GadgetHeaven.jpg"
const projects = [
  {
    name: "Matrimony BD",
    year: "DEC2024",
    align: "right",
    image: image1,
    githubLink: "https://github.com/lukmanxpert/matrimonybd-client",
    liveLink: "https://matrimonybd-be814.web.app/home",
  },
  {
    name: "Whereislt",
    year: "NOV2024",
    align: "left",
    image: image2,
    githubLink: "https://github.com/lukmanxpert/WhereIslt-client-side",
    liveLink: "https://whereislt.netlify.app/home"
  },
  {
    name: "Gadget Heaven",
    year: "OCT2024",
    align: "right",
    image: image3,
    githubLink: "https://github.com/lukmanxpert/gadget-heaven",
    liveLink: "https://gadget-heaven01.netlify.app/"
  }
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              code={project.githubLink}
              live={project.liveLink}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
