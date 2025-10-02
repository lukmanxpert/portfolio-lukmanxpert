import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import bannerImage from "../../assets/lukmanxpert.jpg";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="relative flex items-center justify-center group mt-10"
    >
      {/* Animated Gradient Glow Behind */}
      <div className="absolute w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-full bg-gradient-to-tr from-cyan-400 to-orange-400 blur-3xl opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500"></div>

      {/* Profile Image with Hover Interactivity */}
      <motion.img
        src={bannerImage}
        alt="MD Lukman Miah"
        whileHover={{ scale: 1.08, rotate: 2 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        className="relative z-10 w-[250px] h-[250px] md:w-[320px] md:h-[320px] object-cover rounded-full border-4 border-white shadow-[0_0_30px_rgba(0,255,255,0.4)] group-hover:shadow-[0_0_50px_rgba(255,165,0,0.7)] cursor-pointer"
      />

      {/* Hover Overlay Ring Effect */}
      <div className="absolute w-[260px] h-[260px] md:w-[340px] md:h-[340px] rounded-full border-4 border-transparent group-hover:border-cyan-400 transition-all duration-500 ease-in-out animate-spin-slow"></div>
    </motion.div>
  );
};

export default HeroPic;
