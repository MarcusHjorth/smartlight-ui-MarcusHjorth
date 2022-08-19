import { motion } from "framer-motion";
import { useContext } from "react";
import { LampContext } from '../Utilitys/LampContext';

const LampLightBulb = () => {
  const { bulbColor, bulbBri } = useContext(LampContext)
  const Color =  `rgb(${ bulbColor.r }, ${ bulbColor.g }, ${ bulbColor.b })`

  return ( 
    <div>
      <svg
        className="absolute bottom-[-40px] z-[-10] "
        xmlns="http://www.w3.org/2000/svg"
        width="139"
        height="159"
        viewBox="0 0 139 159"
      >
        <defs>
          <filter
            id="Ellipse_10"
            width="70"
            height="70"
            x="35"
            y="89"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="3"></feOffset>
            <feGaussianBlur result="blur" stdDeviation="8"></feGaussianBlur>
            <feFlood floodColor={Color} floodOpacity={bulbBri}></feFlood>
            <feComposite in2="blur" operator="in"></feComposite>
            <feComposite in="SourceGraphic"></feComposite>
          </filter>
        </defs>
        <g data-name="light bulb" transform="translate(-204 4)">
          <g filter="url(#Ellipse_10)" transform="translate(204 -4)">
            <circle
              cx="11"
              cy="11"
              r="11"
              fill={Color}
              style={{filter: `brightness(${bulbBri / 2.55}%)`}}
              data-name="Ellipse 10"
              transform="translate(59 110)"
            ></circle>
          </g>
        </g>
      </svg>
    </div>
   );
}
 
export default LampLightBulb;

 