import { motion } from 'framer-motion'
import Lamplightbulb from '../../Assets/lamplightbulb'

const Lamp = () => {
    return ( 
        <motion.div
            className="relative z-20"
            initial={{y: -50}}
            animate={{y: 0}}
            transition={{ delay: 0.5, duration: 0.75}}
        >
            <svg width="139" height="153" viewBox="0 0 139 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30.334 86.617H109.388C112.702 86.617 113.594 88.941 115.388 92.617L139 147C139 148.591 
                    138.368 150.117 137.243 151.243C136.117 152.368 134.591 153 133 153H6C4.4087 153 2.88258 152.368 
                    1.75736 151.243C0.632141 150.117 0 148.591 0 147L24.334 92.617C25.837 89.237 27.02 86.617 30.334 
                    86.617Z" fill="white"/>
                <path d="M72 -4H67V98H72V-4Z" fill="white"/>
                <path opacity="0.151" d="M104.294 92.365C103.862 91.3477 102.687 90.8731 101.67 91.305C100.653 91.7369 
                100.178 92.9117 100.61 93.929L121.724 143.663C122.156 144.68 123.331 145.155 124.348 144.723C125.365 
                144.291 125.84 143.116 125.408 142.099L104.294 92.365Z" fill="#568BD0"/>
            </svg>
            <Lamplightbulb />
        </motion.div>
     );
}
 
export default Lamp;