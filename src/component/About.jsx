

const About = () => {
  return (
    <section id="about" className="py-20" data-aos="fade-down">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-amber-400 text-center">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="mb-4 text-gray-400">
              I'm a passionate frontend developer with expertise in React.js and modern JavaScript frameworks. 
              I specialize in creating responsive, user-friendly web applications with clean, efficient code.
            </p>
            
            <p className="text-gray-400">
              Currently, I'm expanding my skills into backend development with Node.js and Express, 
              and learning Next.js to build full-stack applications.
            </p>
          </div>
          
          <div className=" p-6 bg-amber-800/30 shadow-lg rounded-lg">
            <h3 className="text-xl text-gray-300 font-semibold mb-4">Personal Info</h3>
            <ul className="space-y-2 text-gray-300">
              <li><strong>Name:</strong> Touhid Bin Amin</li>
              <li><strong>Email:</strong> touhidbinamin@gmail.com</li>
              <li><strong>From:</strong> Dhaka, Bangladesh</li>
              
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About