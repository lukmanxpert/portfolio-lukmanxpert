import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import blinkItImage from "../../assets/blinkIt.jpg"
import generateInvoice from "../../assets/generateInvoice.jpg"
import matrimonyImage from "../../assets/MatrimonyBD.jpg"
import whereIsItImage from "../../assets/Whereislt.jpg"
import gadgetHavenImage from "../../assets/GadgetHeaven.jpg"
const projects = [
  {
    name: "BlinkIt",
    year: "AUG2025",
    align: "right",
    image: blinkItImage,
    frontend: "https://github.com/lukmanxpert/blinkit-client",
    backend: "https://github.com/lukmanxpert/blinkit-server",
    liveLink: "https://blinkit-client-drab.vercel.app/",
  },
  {
    name: "Generate Invoice",
    year: "JULY2025",
    align: "left",
    image: generateInvoice,
    frontend: "https://github.com/lukmanxpert/generate-invoice",
    backend: "",
    liveLink: "https://generate-invoice-five.vercel.app/",
  },
  {
    name: "Matrimony BD",
    year: "DEC2024",
    align: "right",
    image: matrimonyImage,
    frontend: "https://github.com/lukmanxpert/matrimonybd-client",
    backend: "https://github.com/lukmanxpert/matrimonybd-server",
    liveLink: "https://matrimonybd-be814.web.app/home",
  },
  {
    name: "Whereislt",
    year: "NOV2024",
    align: "left",
    image: whereIsItImage,
    frontend: "https://github.com/lukmanxpert/WhereIslt-client-side",
    backend: "https://github.com/lukmanxpert/WhereIslt-server-side",
    liveLink: "https://whereislt.netlify.app/home"
  },
  {
    name: "Gadget Heaven",
    year: "OCT2024",
    align: "right",
    image: gadgetHavenImage,
    frontend: "https://github.com/lukmanxpert/gadget-heaven",
    backend: "",
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
              frontend={project.frontend}
              live={project.liveLink}
              backend={project.backend}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
