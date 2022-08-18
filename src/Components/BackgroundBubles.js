import { motion } from 'framer-motion'


const BackgroundBubles = () => {
    return ( 
        <motion.div className="z-[-10] relative w-full overflow-hidden"
            initial={{y: 20}}
            animate={{
                y: 60,
                rotate: [0, 90,]}}
            transition={{ delay: 0.1, duration: 0.8}}
        >
            <div className="h-[194px] w-[194px] bg-white opacity-5 rounded-full absolute left-[-100px] top-[-75px]"></div>
            <div className="h-[194px] w-[194px] bg-white opacity-5 rounded-full absolute right-[-100px] top-[40px]"></div>
            <div className="h-[194px] w-[194px] bg-white opacity-5 rounded-full absolute left-[50px] top-[120px]"></div>
        </motion.div>
     );
}
 
export default BackgroundBubles;