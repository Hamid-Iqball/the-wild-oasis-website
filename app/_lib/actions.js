"use server";

import Google from "next-auth/providers/google";
import { signIn, signOut } from "./auth";

export async function signInAction(){
    await signIn("google",{
        redirectTo:"/account"
    })

}

export async function signoutAction(){
    await signOut({redirectTo:"/"})
}