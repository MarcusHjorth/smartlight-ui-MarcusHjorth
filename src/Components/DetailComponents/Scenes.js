import { motion } from 'framer-motion'

import { ReactComponent as LightBulbIcon } from "../../Assets/Svg/lightbulb.svg";


const Scenes = () => {
    return ( 
        <section className="">
            <p className="my-[20px]">Scenes</p>
            <ul className="Scene_Container grid grid-cols-2 place-items-center gap-[10px]">
                <li className="sceneSelector bg-gradient-to-r from-gradient1A to-gradient1B">
                    <LightBulbIcon className="mr-[10px]"/>
                    <p className="Scene_Text">Birthday</p>
                </li>
                <li className="sceneSelector bg-gradient-to-r from-gradient2A to-gradient2B">
                    <LightBulbIcon className="mr-[10px]"/>
                    <p className="Scene_Text">Party</p>
                </li>
                <li className="sceneSelector bg-gradient-to-r from-gradient3A to-gradient3B">
                    <LightBulbIcon className="mr-[10px]"/>
                    <p className="Scene_Text">Relax</p>
                </li>
                <li className="sceneSelector bg-gradient-to-r from-gradient4A to-gradient4B">
                    <LightBulbIcon className="mr-[10px]"/>
                    <p className="Scene_Text">Fun</p>
                </li>
            </ul>
        </section>
     );
}
 
export default Scenes;
