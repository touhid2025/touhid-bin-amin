import {  } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp, FaMoon, FaSun } from 'react-icons/fa'
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiNextdotjs } from 'react-icons/si'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import About from '../component/About'
import Skills from '../component/Skills'
import Projects from '../component/Projects'
import Contact from '../component/Contact'
import Education from '../component/Education'

function Home() {


  
  return (
    
    <div className={"scroll-smooth"} >
      
       


      <header className='flex justify-center'>
        <Navbar/>
      </header>
      
      <main className="max-w-6xl mx-auto px-4">
        <Hero />
        <About />
        <Skills />
        <Education/>
        <Projects />
        <Contact />
      </main>
      
      <footer className="py-8 text-gray-400 text-center border-t border-gray-400">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/touhid2025" className="text-2xl hover:text-gray-300 transition">
            <FaGithub />
          </a>
          <a href="" className="text-2xl hover:text-gray-300 transition">
            <FaLinkedin />
          </a>
          <a href="" className="text-2xl hover:text-gray-300 transition">
            <FaTwitter />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Touhid. All rights reserved.</p>
      </footer>
      
      {/* Back to top button */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="fixed bottom-8 right-8"
      >
        <a href="#home" className="bg-amber-400 text-black p-3 rounded-full shadow-lg hidden md:block hover:bg-amber-500 transition">
          <FaArrowUp />
        </a>
      </motion.div>
    </div>
  )
}

export default Home