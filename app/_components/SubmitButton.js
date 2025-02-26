"use client"

import { useFormStatus } from "react-dom"


//We will use this component inside the form where we have used the useFormStatus()
function SubmitButton ({children}){
  //This is the new hook in react , and this hook must be used in a component that rendered inside a form, not a components that simply contains a form.
  
  const {pending} = useFormStatus()
  return   <button className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
  disabled={pending}>
 {pending ? "Updating..." :`${children}`}
</button>
}

export default SubmitButton