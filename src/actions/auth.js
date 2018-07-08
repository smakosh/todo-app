import { firebase, googleAuthProvider } from '../firebase/firebase'

export const login = (uid, name) => ({ type: 'LOGIN', uid, name })

export const startLogin = () => () => firebase.auth().signInWithRedirect(googleAuthProvider)

export const logInWithEmail = (email, password) => () => firebase.auth().signInWithEmailAndPassword(email, password)

export const logout = () => ({ type: 'LOGOUT' })

export const SignOut = () => () => firebase.auth().signOut()