import SingleSkill from "./SingleSkill";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { DiMongodb } from "react-icons/di";
import { SiNextdotjs, SiTypescript, SiRedux } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";


const skills = [
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "TypeScript",
    icon: SiTypescript,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "NEXT JS",
    icon: SiNextdotjs,
  },
  {
    skill: "Redux",
    icon: SiRedux,
  },
  {
    skill: "Node JS",
    icon: FaNodeJs,
  },
  {
    skill: "Express JS",
    icon: SiExpress,
  },
  {
    skill: "MongoDB",
    icon: DiMongodb,
  },
  {
    skill: "Postgresql",
    icon: BiLogoPostgresql,
  },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
