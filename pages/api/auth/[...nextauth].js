import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          const res = await axios.post(
            "https://backend-1s2t.onrender.com/auth/login",
            {
              email: credentials.email,
              password: credentials.password,
            }
          );

          if (res.status === 200) {
            return {
              id: res.data.id,
              email: credentials.email,
            };
          }
        } catch (error) {
          console.error("Authorization error", error);
          return null;
        }
        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    jwt: true, // Using JWT for sessions
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error", // Optional: Custom error page (if you want to show custom errors)
  },
  callbacks: {
    async jwt({ token, account, user }) {
      if (account && user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.email = token.email;
      return session;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
  },
});
