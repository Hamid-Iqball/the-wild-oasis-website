"use server";


import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { getBookings } from "./data-service";
import { redirect } from "next/navigation";

//here are we on the backend we need to ensure two things
//1.The user that is invoking this function has the authorization of doing the action.
//2. We also need to treat all the inputs as unsaf.

 //There are two types of validation, one is time validation after certian time the cache will revalidate and the data will chnage, second one is the manual/on-demand validation where we validate the cache immediatly
    
export async function updateProfile(formData){
  //1) Authentications
    const session = await auth()
    if(!session) throw new Error("You must be logged in ")

      //2) Authorizations
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
  
  //1) Authentications
  const session = await auth()
  if (!session) throw new Error("You must be logged in to delete a reservation")
    
    //2) Authorizations
    const guestBookings = await getBookings(session.user.guestId)
  const guestBookingIds = guestBookings.map((booking)=>booking.id)
  if(!guestBookingIds.includes(bookingId)){
    throw new Error ("Your are not allowed to delete this booking")
  }
  

  const {  error } = await supabase.from('bookings').delete().eq('id', bookingId);

  if (error) throw new Error('Booking could not be deleted');
  
  revalidatePath("/account/reservations")
}


export async function updateReservation (formData){
//The server action do not have any access to the URL that is why we are sending data in formData.

    const bookingId = Number(formData.get("bookingId"))

    //1) Authentications
    const session = await auth()
    if (!session) throw new Error("You must be logged in to update a reservation")
  
    //2) Authorizations
    const guestBookings = await getBookings(session.user.guestId)
    const guestBookingIds = guestBookings.map((booking)=>booking.id)
    if(!guestBookingIds.includes(bookingId)){
      throw new Error ("Your are not allowed to update this booking")
    }
    
    const updateData = {
      numGuests:Number(formData.get("numGuests")),
      observations:formData.get("observations").slice(0,1000)
    }
  
    
    // 3) Mutations
    const { error } = await supabase
    .from('bookings')
    .update(updateData)
    .eq('id', bookingId)
    .select()
    .single();

    // 4) Error handling
      if (error) {
        throw new Error('Booking could not be updated');
      }

    // 5) Revalidation
    revalidatePath(`/account/reservations/edit/${bookingId}`)
    revalidatePath("/account/reservations")

    //6) Redirections
     redirect("/account/reservations")

}


export async function signInAction(){
    await signIn("google",{
        redirectTo:"/account"
    })

}

export async function signoutAction(){
    await signOut({redirectTo:"/"})
}