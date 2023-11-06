import prisma from "@/lib/prisma"
import { PrismaAdapter } from "@auth/prisma-adapter"
import GoogleProvider from "next-auth/providers/google"
import NextAuth from "next-auth"
import { NextAuthOptions } from 'next-auth';

const googleId = process.env.GOOGLE_ID
const googleSecret = process.env.GOOGLE_SECRET

if (!googleId || !googleSecret) {
  throw new Error(
    "Missing environment variables for Google. Check your .env file."
  )
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: googleId,
      clientSecret: googleSecret,
    }),
  ],
  callbacks: {
    session: async ({session, user}) => {
      if (session.user){
        session.user.id = user.id.toString();
      }
      return Promise.resolve(session);
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };