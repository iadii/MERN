import { useEffect, useState } from "react";

export function Character(){

    const [cast, setCast] = useState([])

    useEffect(() => {
        fetch('https://potterapi-fedeperin.vercel.app/es/characters')
        .then( async (res) => {
            const json = await res.json();
            setCast(json)
        })
    })

    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 m-2">
          {cast.map((sc) => (
           <div className="flex flex-col items-center gap-6 p-7 md:gap-8 rounded-2xl bg-gray-950">
             <img className="shadow-xl rounded-md" src={sc.image} width="250px"/>
             <div className=" w-full">
                <div className="text-2xl text-left font-medium text-blue-50">Name: {sc.fullName} </div>
                {/* <div>aka {sc.nickname}</div> */}
                <div className="font-medium text-sky-500">Hogwart's house: {sc.hogwartsHouse}</div>
                <div className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">children {sc.children.length}</div>
             </div>
           </div>
          ))}  
        </div>
    )
}