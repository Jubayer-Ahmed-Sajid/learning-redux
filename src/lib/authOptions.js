import CredentialsProvider from "next-auth/providers/credentials"


export const authOptions = {
    // Configure one or more authentication providers
    providers: [
      CredentialsProvider({
        // The name to display on the sign in form (e.g. 'Sign in with...')
        name: "Credentials",
       
        credentials: {
          username: { label: "Username", type: "text", placeholder: "jsmith" },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials, req) {
       
          // (i.e., the request IP address)
          const user = true;
  
          // If no error and we have user data, return it
          if ( user) {
            return user;
          }
          // Return null if user data could not be retrieved
          return null;
        },
       
      }),
    ],
    pages: {
        signIn: '/register',
        
       
      }
  };