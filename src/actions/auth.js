import { firebase, googleAuthProvider } from '../firebase/firebase'

export const login = (uid) => (
    {
        type: 'LOGIN',
        uid
    }
)

export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithRedirect(googleAuthProvider)
    }
}

export const logInWithEmail = (email, password) => {
    return () => {
        return firebase.auth().signInWithEmailAndPassword(email, password)
    }
}

export const logout = () => (
    {
        type: 'LOGOUT'
    }
)

export const SignOut = () => {
    return () => {
        return firebase.auth().signOut()
    }
}