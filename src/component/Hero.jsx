import { motion } from 'framer-motion'
import touhid from '../assets/touhid.jpg'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 mx-auto"
        >
          <img 
            src={touhid}
            alt="Profile" 
            className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-indigo-500 object-cover mx-auto"
          />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl text-gray-200 font-bold mb-4"
        >
          Hi, I'm <span className="text-amber-400">Touhid</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto"
        >
          Frontend Developer | React Specialist | Building beautiful web experiences
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a 
            href="#contact" 
            className="bg-amber-400 text-black px-6 py-3 rounded-lg inline-block hover:bg-amber-500 shadow-md transition mr-4"
          >
            Contact Me
          </a>
          <a 
            href="/resume.pdf" 
            download
            className="border border-amber-400 hover:text-black text-amber-400 px-6 py-3 rounded-lg inline-block hover:bg-amber-400  transition"
          >
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero