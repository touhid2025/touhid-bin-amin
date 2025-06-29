import { motion } from 'framer-motion'
import { FaPaperPlane, FaWhatsapp } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { TfiEmail } from 'react-icons/tfi'

const Contact = () => {
  return (
    <section id="contact" className="py-20 " data-aos="fade-up">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-amber-400 mb-12 text-center">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl text-gray-300 font-semibold mb-4">Contact Information</h3>
            <p className="mb-6 text-gray-400">
              Feel free to reach out to me for any questions or opportunities. I'll get back to you as soon as possible.
            </p>
            
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center">
                <span className="mr-3 text-gray-300"><TfiEmail /></span>
                <span>touhidbinamin@gmail.com</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-green-400"><FaWhatsapp/></span>
                <span>+880 1743287246</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-gray-300"><FaLocationDot /></span>
                <span>Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>
          
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className='text-gray-300'>
              <label htmlFor="name" className="block mb-1">Your Name</label>
              <input 
                type="text" 
                placeholder='Write your name..'
                id="name" 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 border-gray-600"
                required
              />
            </div>
            <div className='text-gray-300'>
              <label htmlFor="email" className="block mb-1">Your Email</label>
              <input 
                type="email" 
                placeholder='Write your email..'
                id="email" 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400  border-gray-600"
                required
              />
            </div>
            <div className='text-gray-300'>
              <label htmlFor="message" className="block mb-1">Your Message</label>
              <textarea 
                id="message" 
                placeholder='Write your massage...'
                rows="4" 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400  border-gray-600"
                required
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-amber-400 cursor-pointer text-black px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-amber-500 transition"
            >
              <span>Send Message</span>
              <FaPaperPlane />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact