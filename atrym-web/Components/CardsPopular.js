import React from "react";

export default function CardsPopular ({cardImage, title, description}) {
    return (

    
      <div className="hover:scale-110 hover:shadow-[#003366] transition duration-150 bg-white border border-gray-200 rounded-none shadow dark:bg-white dark:border-gray-700 ">
        <img
          className="w-full h-[350px] rounded-t-[33px] "
          src={cardImage}
        />
        <div className="p-5">
          <h5 className="font-league mb-2 text-2xl font-bold tracking-tight text-[#003366] dark:text-center">
            {title}
          </h5>
          <p className="font-league mb-3 text-center font-normal text-black">
            {description}
          </p>
        </div>
      </div>
        
    )
}