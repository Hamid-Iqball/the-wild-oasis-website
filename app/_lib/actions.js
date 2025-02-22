"use server";

import Google from "next-auth/providers/google";
import { signIn } from "./auth";

export async function signInAction(){
    await signIn("google",{
        redirectTo:"/account"
    })
}