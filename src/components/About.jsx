import aboutImg from "../assets/AboutPic2.jpg";
import { ABOUT_TEXT} from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div color="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About Me
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
  <motion.div
    whileInView={{ opacity: 1, x: 0 }}
    initial={{ opacity: 0, x: -100 }}
    transition={{ duration: 0.5 }}
    className="flex items-center justify-center"
  >
    <div className="w-[550px] h-[550px] overflow-hidden rounded-xl">
      <img 
        className="w-full h-full object-cover pointer-events-none select-none"
        src={aboutImg}
        alt=""
      />
    </div>
  </motion.div>
</div>

        <motion.div 
        whileInView={{opcaity:1 , x:0}}
        initial={{opcaity:0,x:100}}
        transition={{duration:0.5}}
        className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start my-20 flex-col">
            <p className="maxw-xl py-6">{ABOUT_TEXT}</p>{" "}
          </div>
    
        </motion.div>
      </div>
    </div>
  );
};

export default About;
