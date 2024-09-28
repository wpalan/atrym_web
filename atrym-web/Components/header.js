import React from 'react';
import {Dancing_Script} from 'pages/fonts'



export default function Header () {
    return (
        <div className="flex justify-between h-20">
            
            
            <div>
            <img src="images/al_1.png" className="h-20 pl-16"></img>
            </div>

                <div className="flex justify-center items-center space-x-10 text-cyan-400">
            
            
                    <p>Catálogo</p>
                    
                    <p>Nosotros</p>
                
                    <p>Contacto</p>

                
                    <p className="pr-10">Inicio</p>
        

                </div>


        </div>
    )
}