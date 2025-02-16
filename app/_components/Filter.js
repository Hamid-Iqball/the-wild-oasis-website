"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"

function Filter() {
    const  searchParams = useSearchParams()
    const router = useRouter() //In App Router everything should come form the Next Navigation.
    const pathname = usePathname()

    function handleFilter (filter){
        //This is WebApi 
       const params = new URLSearchParams(searchParams)
       params.set("capacity", filter)
       router.replace(`${pathname}?${params.toString()}`, {scroll:false})
    }


  return (
    <div className="border border-primary-800 flex">
        <button className="px-5 py-2 hover:bg-primary-700 text-center" onClick={()=>handleFilter("all")}>All cabins</button>
        <button className="px-5 py-2 hover:bg-primary-700 text-center" onClick={()=>handleFilter("small")}>1&mdash;3 guests</button>
        <button className="px-5 py-2 hover:bg-primary-700 text-center" onClick={()=>handleFilter("medium")}>4&mdash;7 guests</button>
        <button className="px-5 py-2 hover:bg-primary-700 text-center" onClick={()=>handleFilter("large")}>8&mdash;12 guests</button>
       
       

    </div>
  )
}

export default Filter