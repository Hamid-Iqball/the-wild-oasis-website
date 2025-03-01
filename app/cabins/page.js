
import { Suspense } from "react";
import { getCabins } from "../_lib/data-service";
import CabinList from "@/app/_components/CabinList";
import Spinner from "@/app/_components/Spinner";
import Filter from "@/app/_components/Filter";

//This really needs to be some value not the computed expression.
export const revalidate = 3600 //This value must always be in seconds
export default  function Page({searchParams}) {
  
  const filter = searchParams?.capacity ?? "all"

  //The Suspense needs to be outside the component that does the asynchronus work that is why we moved the getting cabins to the CabinList.

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little home
        away from home. The perfect spot for a peaceful, calm vacation. Welcome
        to paradise.
      </p>
      <div className="flex justify-end mb-8">
    
      <Filter/>

      </div>
     <Suspense fallback={<Spinner/>} key={filter}>
      <CabinList filter={filter}/>
     </Suspense>
  
    </div>
  );
}
