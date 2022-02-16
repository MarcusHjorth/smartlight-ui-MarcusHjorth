import { Link } from "react-router-dom"
import { motion } from 'framer-motion'

const Rooms = (props) => {
  
    return ( 
        <motion.div className="Rooms"
        initial={{y: 130}}
        animate={{y: 0}}
        transition={{ delay: 0.1}}
        transition={{ duration: 0.5 }}
        >
             <p>All rooms</p>
             <div className="Room_Display">
                { props.data.map((room) => (
                    <Link to={`/RoomDetails/${room.id}`} >
                        <div className="Room_Layout" key={room.id}>
                            <img src={ room.icon } alt={room.location} />
                            <p className="Room_Layout_title">{ room.location }</p>
                            <p className="Room_Layout_lights">{ room.lights } Lights</p>
                        </div>    
                    </Link> 
                ))}
            </div>
        </motion.div>
    );
}
/*
*/      
export default Rooms;
