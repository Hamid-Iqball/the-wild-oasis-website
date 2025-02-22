import NextAuth from "next-auth";
import Google from "next-auth/providers/google"

const authConfig = {
    providers:[
        Google({
            clientId:process.env.AUTH_GOOGLE_ID,
            clientSecret:process.env.AUTH_GOOGLE_SECRET
        })
    ],
    callbacks:{
        authorized({auth,request}){
            return !!auth?.user //This is how we can convert any value into boolean
        }
    }
};

export const {auth,handlers:{GET,POST}} =NextAuth(authConfig)