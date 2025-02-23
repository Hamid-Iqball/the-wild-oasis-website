"use server";


import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";

//here are we on the backend we need to ensure two things
//1.The user that is invoking this function has the authorization of doing the action.
//2. We also need to treat all the inputs as unsaf.

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

}
export async function signInAction(){
    await signIn("google",{
        redirectTo:"/account"
    })

}

export async function signoutAction(){
    await signOut({redirectTo:"/"})
}