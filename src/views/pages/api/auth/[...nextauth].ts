import NextAuth from "next-auth"

import type { NextAuthOptions } from "next-auth"

import FacebookProvider from "next-auth/providers/facebook"

// import GoogleProvider from "next-auth/providers/google"
// import GithubProvider from "next-auth/providers/github"
// import TwitterProvider from "next-auth/providers/twitter"
// import Auth0Provider from "next-auth/providers/auth0"
// https://next-auth.js.org/configuration/options

export const authOptions: NextAuthOptions = {
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID as any,
      clientSecret: process.env.FACEBOOK_SECRET as any,
    }),

    // EmailProvider({
    //      server: process.env.EMAIL_SERVER,
    //      from: process.env.EMAIL_FROM,
    //    }),
    // Providers.Apple({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: {
    //     appleId: process.env.APPLE_ID,
    //     teamId: process.env.APPLE_TEAM_ID,
    //     privateKey: process.env.APPLE_PRIVATE_KEY,
    //     keyId: process.env.APPLE_KEY_ID,
    //   },
    // }),
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID as any,
    //   clientSecret: process.env.GITHUB_SECRET as any,
    // }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID as any,
    //   clientSecret: process.env.GOOGLE_SECRET as any,
    // }),
    // TwitterProvider({
    //   clientId: process.env.TWITTER_ID as any,
    //   clientSecret: process.env.TWITTER_SECRET as any,
    // }),
    // Auth0Provider({
    //   clientId: process.env.AUTH0_ID as any,
    //   clientSecret: process.env.AUTH0_SECRET as any,
    //   issuer: process.env.AUTH0_ISSUER,
    // }),
  ],
}


export default NextAuth(authOptions)
