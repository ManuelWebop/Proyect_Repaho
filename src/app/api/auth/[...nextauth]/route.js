import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'
import User from '../../../../models/User';
import { signJwtToken } from '../../../lib/jwt'
import bcrypt from 'bcrypt';




const handler = NextAuth({
    providers: [
        CredentialsProvider({
            type: 'credentials',
            credentials: {
                username: { label: 'Email', type: 'text', placeholder: 'John Doe' },
                password: { label: 'Password', type: 'password' }
            },

            async authorize(credentials, req) {
                const { email, password } = credentials



                const user = await User.findOne({ email })

                if (!user) {
                    throw new Error("Invalid input")
                }

                const comparePass = await bcrypt.compare(password, user.password)

                if (!comparePass) {
                    throw new Error("Invalid input")
                } else {
                    const { password, ...currentUser } = user._doc
                    
                    const accessToken = signJwtToken(currentUser, { expiresIn: '6d' })

                    const userWithProfileImage = currentUser.image
                        ? { ...currentUser, image: currentUser.image }
                        : currentUser;

                    return {
                        ...currentUser,
                        accessToken,
                        username: currentUser.username,
                    }
                }

            }
        })

    ],

    pages: {

        signIn: '/login'
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.accessToken = user.accessToken
                token._id = user._id
                token.username = user.username
                token.image = user.image
            }

            return token
        },
        async session({ session, token }) {
            if (token) {
                session.user._id = token._id
                session.user.accessToken = token.accessToken
                session.user.username = token.username
                session.user.image = token.image
            }
            return session
        }
    }
})

export { handler as GET, handler as POST }