import React from "react";

function Card({heading,btnText = "visit me"}){
    
    
    return(
    <> 

      <div className="flex flex-col  justify-center items-center">
          <h2 className="text-3xl">Banaras</h2>
          <div className="h-[400px] w-[400px] ">
            <img className="rounded-xl" src="https://media.istockphoto.com/id/827065008/photo/holy-town-varanasi-and-the-river-ganges.jpg?s=2048x2048&w=is&k=20&c=aagij0PmM8L3ak7GWbUnqLq98ZnKVTVNq74RwwS3C-c=" alt="" />
            <p className="text-blue-700">{heading}</p>
            <button className="border-2 rounded-xl text-blue-300 cursor-pointer p-1">{btnText}</button>
          </div>
      </div>
      
    </>
    )
}

export default Card