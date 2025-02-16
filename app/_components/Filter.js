"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import Button from "./Buttons"

function Filter() {
    const  searchParams = useSearchParams()
    const router = useRouter() //In App Router everything should come form the Next Navigation.
    const pathname = usePathname()

    const activeFilter = searchParams.get('capacity')?? ""

    function handleFilter (filter){
        //This is WebApi 
       const params = new URLSearchParams(searchParams)
       params.set("capacity", filter)
       router.replace(`${pathname}?${params.toString()}`, {scroll:false}) //construct the URL that we want to move to.
    }


  return (
    <div className="border border-primary-800 flex">
        <Button filter='all' handleFilter={handleFilter} activeFilter={activeFilter}>
            All Cabins
        </Button>
        <Button filter="small" handleFilter={handleFilter} activeFilter={activeFilter}>
        1&mdash;3 guests
        </Button>
        <Button filter="medium" handleFilter={handleFilter} activeFilter={activeFilter}>
        4&mdash;7 guests
        </Button>
        <Button filter="large" handleFilter={handleFilter} activeFilter={activeFilter}>
        8&mdash;12 guests
        </Button>
    </div>
  )
}



export default Filter