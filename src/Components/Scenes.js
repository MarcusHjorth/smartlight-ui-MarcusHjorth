import BulbIcon from "../Assets/BulbIcon.png"

const Scenes = () => {
    return ( 
        <div>
            <p>Scenes</p>
            <div className="Scene_Container">
                <div className="Scene1 Scene">
                    <img className="Scene_Bolb" src={ BulbIcon } alt="Bulb"/>
                    <p className="Scene_Text">Birthday</p>
                </div>
                <div className="Scene2 Scene">
                    <img className="Scene_Bolb" src={ BulbIcon } alt="Bulb"/>
                    <p className="Scene_Text">Party</p>
                </div>
                <div className="Scene3 Scene">
                    <img className="Scene_Bolb" src={ BulbIcon } alt="Bulb"/>
                    <p className="Scene_Text">Relax</p>
                </div>
                <div className="Scene4 Scene">
                    <img className="Scene_Bolb" src={ BulbIcon } alt="Bulb"/>
                    <p className="Scene_Text">Fun</p>
                </div>
            </div>
        </div>
     );
}
 
export default Scenes;
