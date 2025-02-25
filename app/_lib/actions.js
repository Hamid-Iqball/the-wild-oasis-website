"use server";


import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { getBookings } from "./data-service";

//here are we on the backend we need to ensure two things
//1.The user that is invoking this function has the authorization of doing the action.
//2. We also need to treat all the inputs as unsaf.

 //There are two types of validation, one is time validation after certian time the cache will revalidate and the data will chnage, second one is the manual/on-demand validation where we validate the cache immediatly
    
export async function updateProfile(formData){
    const session = await auth()
    if(!session) throw new Error("You must be logged in ")

    const nationalID = formData.get("nationalID")
    const  [nationality , countryFlag] = formData.get('nationality').split("%")

    if( !/^[a-zA-Z0-9]{6,15}$/.test(nationalID)){
            throw new Error ("Please provide a valid national ID")
    }

    const updateData = {nationalID, nationality, countryFlag}


    const { data, error } = await supabase
    .from('guests')
    .update(updateData)
    .eq('id', session.user.guestId)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error('Guest could not be updated');
  }

  revalidatePath("/account/profile") // All the data below this path will be revalidate

}


//deleting a reservation

export async function deleteReservation(bookingId){
  const session = await auth()
  if (!session) throw new Error("You must be logged in to delete a reservation")

    //Verification implementations 
    const guestBookings = await getBookings(session.user.guestId)
    const guestBookingIds = guestBookings.map((booking)=>booking.id)
    if(!guestBookingIds.includes(bookingId)){
      throw new Error ("Your are not allowed yo delete this booking")
    }
  

  const {  error } = await supabase.from('bookings').delete().eq('id', bookingId);

  if (error) throw new Error('Booking could not be deleted');
  
  revalidatePath("/account/reservations")
}
export async function signInAction(){
    await signIn("google",{
        redirectTo:"/account"
    })

}

export async function signoutAction(){
    await signOut({redirectTo:"/"})
}