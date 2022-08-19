import { createContext, useState } from 'react'

export const LampContext = createContext(null);

const LampContextProvider = ({ children }) => {
    const [ bulbColor, setBulbColor ] = useState({ r: 255, g:255, b:255})
    const [ bulbBri, setBulbBri ] = useState(null)

    return ( 
        <LampContext.Provider value={{ bulbColor, setBulbColor, bulbBri, setBulbBri}}>
            {children}
        </LampContext.Provider>
     );
}
 
export default LampContextProvider;