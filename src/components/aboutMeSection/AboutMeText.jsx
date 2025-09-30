import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I&apos;m a MERN Stack Developer passionate about building scalable, efficient, and user-friendly web applications. With expertise in MongoDB, Express.js, React, and Node.js, I specialize in creating dynamic full-stack solutions that deliver seamless user experiences.
        I have hands-on experience in developing and deploying RESTful APIs, real-time applications, and modern front-end interfaces with React. My focus is on writing clean, maintainable code while leveraging the latest technologies to solve real-world problems.
        I enjoy tackling challenges, optimizing performance, and continuously improving my skills to stay ahead in the ever-evolving world of web development. Whether it’s building a new project from scratch or enhancing an existing application, I strive to deliver high-quality solutions that make an impact.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
