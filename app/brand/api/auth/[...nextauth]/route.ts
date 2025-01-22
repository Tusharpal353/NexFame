import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { prismaClient } from "../../../../lib/db";
import { role } from "@prisma/client";
import { async } from '../../searchcelebs/route';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    CredentialsProvider({
      name: "Email",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Email from brand" },
        password: { label: "Password", type: "password", placeholder: "Password" },
      },
      async authorize(credentials: any) {
        const { email, password } = credentials;

        // Check for brand user
        const brandUser = await prismaClient.brand.findFirst({
          where: { email },
        });

        if (brandUser && brandUser.password === password) {
          console.log(email,role)
          return {
            id: brandUser.id,
            email: brandUser.email,
            role: "Brand", // Role for brand
          };
        }

        // Check for celebrity user
        const celebUser = await prismaClient.celeb.findFirst({
          where: { email },
        });

        if (celebUser && celebUser.password === password) {
          return {
            id: celebUser.id,
            email: celebUser.email,
            role: "celeb", // Role for celeb
          };
        }

        return null; // Invalid credentials
      },
    }),
  ],
  callbacks:
   {
    
    async signIn({ user, account, profile }) {
      // Optionally handle role-based sign-in logic here
      return true;
    },

    async session({ session, user }) {
      // Add the user's role to the session object
      if (user?.role) {
        session.user.role = user.role;
      }
      return session;
    },

    async redirect({url,baseUrl}){
      return `${baseUrl}/brand/dashboard`
    }


  },

  


  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
