import React from 'react';



export default function Nav () {
    return (
        <div className="flex justify-between h-20">
            
            
            <div>
            <img src="images/al_1.png" className="h-20 pl-16"></img>
            </div>

                <div className="flex justify-center items-center space-x-10 text-[#513d2e]">
            
            
                    <p>Catálogo</p>
                    
                    <p>Nosotros</p>
                
                    <p>Contacto</p>

                    <div className="pr-10">
                    <p className="rounded-1xl bg-[#a28b78] px-8 py-2">Inicio</p>
                    </div>

                </div>


        </div>
    )
}