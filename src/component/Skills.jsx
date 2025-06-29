import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiNextdotjs } from 'react-icons/si'

const skills = [
  { name: 'HTML5', icon: <SiHtml5 className="text-4xl text-orange-500" />, level: '95%', borderColor: 'from-orange-500 to-amber-500' },
  { name: 'CSS3', icon: <SiCss3 className="text-4xl text-blue-500" />, level: '90%', borderColor: 'from-blue-500 to-sky-500' },
  { name: 'JavaScript', icon: <SiJavascript className="text-4xl text-yellow-500" />, level: '85%', borderColor: 'from-yellow-500 to-amber-400' },
  { name: 'React', icon: <SiReact className="text-4xl text-blue-400" />, level: '85%', borderColor: 'from-blue-400 to-cyan-400' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-4xl text-cyan-400" />, level: '90%', borderColor: 'from-cyan-400 to-teal-400' },
  { name: 'Node.js', icon: <SiNodedotjs className="text-4xl text-green-400" />, level: '70%', borderColor: 'from-green-500 to-emerald-500' },
  { name: 'Express.js', icon: <SiExpress className="text-4xl text-gray-200" />, level: '65%', borderColor: 'from-gray-400 to-gray-300' },
  { name: 'MongoDB', icon: <SiMongodb className="text-4xl text-green-400" />, level: '60%', borderColor: 'from-green-600 to-emerald-500' },
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 text-gray-300" data-aos="flip-up">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-amber-400 text-center">My Skills</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="relative group"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              {/* Gradient Border */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${skill.borderColor} rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-500`}></div>
              
              {/* Card Content */}
              <div className="relative bg-amber-900/50 p-6 rounded-lg h-full">
                <div className="flex flex-col items-center h-full">
                  <div className="flex justify-center mb-3">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                  
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills