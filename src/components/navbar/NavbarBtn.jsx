const NavbarBtn = () => {
  return (
    <button className="px-4 py-2 rounded-full text-xl font-bold font-body text-white border-cyan border flex items-center gap-1 bg-gradient-to-r  from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow">
      {/* <Link to="./resume.pdf" download={"Sheikh_Lukman_CV.pdf"} spy={true} smooth={true} duration={500} offset={-120}>
        Download Resume
      </Link> */}
      <a
        href="/resume.pdf"
        download="Sheikh_Lukman_CV.pdf"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Download CV
      </a>
    </button>
  );
};

export default NavbarBtn;
