import { motion } from 'framer-motion'
import axios from "axios";
import ColorChangeButton from './ColorChangeButton';

const Colors = () => {
    const container = {
    initiate: { x: -25 },
    animate: {
        x: 50,
        transition: {
            duration: 1, delay: 1
      }
    }
  }
  const item = {
    initiate: { x: -25 },
    animate: { x: 0 }
  }

  const ColorArray = [

    { "red": 255, "green": 155, "blue": 155 },

    { "red": 148, "green": 235, "blue": 158 },

    { "red": 148, "green": 202, "blue": 235 },

    { "red": 165, "green": 148, "blue": 235 },

    { "red": 222, "green": 148, "blue": 235 },

    { "red": 235, "green": 208, "blue": 148 }

]

    return (
        <section>
            <p className="my-[20px]">Colors</p>
            <motion.ul className="flex flex-row"
              animate={{ gap: '15px' }} 
              transition={{ duration: 0.5, delay: 0.75 }}
            >
              {ColorArray.map(({ red, green, blue }, i ) => (
                <ColorChangeButton r={red} g={green} b={blue} key={i} />
              ))}
              <button variants={item} className="w-[30px] h-[30px] rounded-full bg-white text-black text-center">+</button>
            </motion.ul>
        </section>
     );
     
    }
    
    
    export default Colors
