import { FaFlask, FaMicroscope, FaGraduationCap, FaAtom } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "B.Sc. in Textile Engineering",
      specialization: "Specialization in Wet Processing Technology",
      institution: "(STEC)Technology Unit-University Of Dhaka",
      year: "2022 - 2025 (Final Year)",
      highlights: [
        "Advanced courses: Textile Chemical Processing, Dyeing & Printing Technology",
        
        "Laboratory expertise in color fastness and fabric testing"
      ],
      icon: <FaFlask className="text-2xl text-gray-400" />
    },
    {
      id: 2,
      degree: "Higher Secondary Certificate (HSC)",
      specialization: "Science Group",
      institution: "Alamgir Mansur Memorial College",
      year: "2020",
      highlights: [
        "Physics, Chemistry, Mathematics, Biology",
        
        "Practical laboratory experience"
      ],
      icon: <FaMicroscope className="text-2xl text-gray-400" />
    }
  ]

  return (
    <section id="education" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 flex items-center justify-center">
            <FaGraduationCap className="mr-3 text-gray-500" />
            <span className='text-gray-100'>Academic <span className="text-amber-400">Background</span></span>
          </h2>
          <p className="text-lg  text-gray-400">
            My journey in textile engineering
          </p>
        </motion.div>

        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-500 to-gray-600 rounded-lg blur opacity-25  transition duration-300"></div>
              <div className="relative  p-6 rounded-lg shadow-lg">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex items-start">
                    <div className="p-4 bg-indigo-900/50 rounded-full">
                      {edu.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <div>
                        <h3 className="text-2xl text-gray-100 font-bold">{edu.degree}</h3>
                        <p className="text-gray-300 font-medium mt-1">
                          {edu.specialization}
                        </p>
                      </div>
                      <span className="inline-block mt-2 md:mt-0 px-3 py-1 bg-indigo-900/30 text-indigo-300 rounded-full text-sm">
                        {edu.year}
                      </span>
                    </div>
                    <p className="mt-3 text-gray-300 flex items-center">
                      <FaAtom className="mr-2 text-indigo-500" />
                      {edu.institution}
                    </p>
                    
                    <ul className="mt-4 space-y-2">
                      {edu.highlights.map((item, i) => (
                        <li key={i} className="flex">
                          <span className="text-indigo-500 mr-2 mt-1">▹</span>
                          <span className="text-gray-400">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        
      
      </div>
    </section>
  )
}

export default Education