const projects = [
  {
    id: 1,
    title: 'E-commerce Website',
    description: 'GlobalBazaar is a multi-category e-commerce platform tailored for global audiences. Users can browse products, manage their own listings, and make secure transactions through an intuitive interface.',
    tags: ['React', 'Tailwind', 'Firebase','Node.js','Express.js','Mongodb'],
    image: 'https://i.ibb.co/60Qz8r7G/globalbazaar.png',
    live: 'https://flourishing-syrniki-4cda53.netlify.app/',
    front: 'https://github.com/touhid2025/global-bazaar',
    back: 'https://github.com/touhid2025/global-bazaar-server'
  },
  {
    id: 2,
    title: 'Plant Care Website',
    description: 'LeafyLove is a user-friendly web application designed to help plant lovers effortlessly track and manage the care routine of their indoor and outdoor plants. It ensures plants stay healthy with timely reminders and record keeping.',
    tags: ['React', 'Tailwind', 'Firebase','Node.js','Express.js','Mongodb'],
    image: 'https://i.ibb.co/BDQhtb0/leafylove.png',
    live: 'https://leafy-love-project.web.app/',
    front: 'https://github.com/touhid2025/leafy-love',
    back: 'https://github.com/touhid2025/leafy-love-server'
  },
  {
    id: 3,
    title: 'Subscription Box Website',
    description: 'BoxNest is a modern subscription-based e-commerce platform that allows users to explore, subscribe, and manage curated monthly boxes. It ensures a seamless user experience with protected routes and dynamic navigation.',
    tags: ['React', 'Firebase', 'Tailwind'],
    image: 'https://i.ibb.co/HpkzfGxb/boxnest.png',
    live: 'https://extraordinary-gumption-48b1c4.netlify.app/',
    front: 'https://github.com/touhid2025/box-nest'
    
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl text-amber-400 font-bold mb-12 text-center">My Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="bg-amber-800/35 rounded-lg overflow-hidden shadow-lg transition-shadow"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-200 mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex space-x-3">
                  <a 
                    href={project.live} 
                    className="text-amber-400 hover:underline"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.front}
                    className="text-amber-400 hover:underline"
                  >
                    Client Code
                  </a>
                  <a 
                    href={project.back} 
                    className="text-amber-400 hover:underline"
                  >
                    Server Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects