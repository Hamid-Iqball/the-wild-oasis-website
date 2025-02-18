
import Cabin from "@/app/_components/Cabin";
import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import { Suspense } from "react";

// generating metaData dynamically
export async function generateMetadata ({params})
{
    const cabin = await getCabin(params.cabinId)
    const {name} = cabin
    return {
        title:`Cabin ${name}`
    }

}

//If there is any dynamic rendereing in Next js app then this code to tell NEXT js about that using the generateStatsicParams function to make it static
export async function generateStaticParams(){
  const cabins = await getCabins()

  const ids = cabins.map((cabin)=>(
   { cabinId:String(cabin.id)}
  ))

  return ids
}


export default async function Page({params}) {

    const cabin = await getCabin(params.cabinId)
   




  return (
    <div className="max-w-6xl mx-auto mt-8">
   <Cabin cabin={cabin}/>

      <div>
        <h2 className="text-5xl font-semibold text-center mb-10 text-accent-400">
          Reserve today. Pay on arrival.
        </h2>
        <Suspense fallback={<Spinner/>}>

        <Reservation cabin={cabin}/>
        </Suspense>
      </div>
    </div>
  );
}
