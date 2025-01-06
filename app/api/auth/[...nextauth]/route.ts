/* import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { prismaClient } from '../../../lib/db';
import CredentialsProvider from "next-auth/providers/credentials";
import { Prisma } from "@prisma/client";
import { useRouter } from "next/navigation";


const handler = NextAuth(
  
  
  {
  // Configure one or more authentication providers
  
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
    }),
    CredentialsProvider({
      name:"Email",
        credentials:{
          email:{label:"email",type:"text", placeholder:"Email"},
          password:{label:"Password",type:"password",placeholder:"password"},
        },
        async authorize(credentials:any) {
          const email = credentials?.email
          const password = credentials?.password
         const user = await prismaClient.brand.findFirst(email)
          if(user){
            if(user.password === password){
              
            }
          }

          return {
            id: email,
            pass:password
          }

        },
      })
  ],
secret:process.env.NEXTAUTH_SECRET
  
})

export {handler as GET, handler as POST} */

/* 
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { prismaClient } from "../../../lib/db";

const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    CredentialsProvider({
      name: "Email",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Email" },
        password: { label: "Password", type: "password", placeholder: "Password" },
      },
      async authorize(credentials: any) {
        const email = credentials?.email;
        const password = credentials?.password;

        // Fetch user from the database
        const user = await prismaClient.brand.findFirst({
          where: { email },
        });

        if (user && user.password === password) {
          // If user is authenticated, return the user object
          return {
            id: user.id,
            email: user.email,
          };
        }

        // If authentication fails, return null
        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  // Define callbacks
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Redirect to the home page after login
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
  },
});

export { handler as GET, handler as POST };
 */
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { prismaClient } from "../../../lib/db";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    CredentialsProvider({
      name: "Email",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Email" },
        password: { label: "Password", type: "password", placeholder: "Password" },
      },
      async authorize(credentials: any) {
        const email = credentials?.email;
        const password = credentials?.password;

        const user = await prismaClient.brand.findFirst({
          where: { email },
        });

        if (user && user.password === password) {
          return {
            id: user.id,
            email: user.email,
          };
        }

        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === "google") {
        // Check if the user already exists in the database
        const existingUser = await prismaClient.brand.findFirst({
          where: { email: user.email },
        });

        if (!existingUser) {
          // Create a new user in the database
          await prismaClient.brand.create({
            data: {
              name: profile?.name ?? "Unknown User",
              email: user.email,
              password: "google-oauth", // Dummy password (not used for Google sign-in)
            },
          });
        }
      }

      return true; // Allow sign-in
    },

    async redirect({ url, baseUrl }) {
      return baseUrl; // Redirect to the home page
    },

    async session({ session, user }) {
      // Add custom properties to the session object if needed
      return session;
    },
  },
});

export { handler as GET, handler as POST };
