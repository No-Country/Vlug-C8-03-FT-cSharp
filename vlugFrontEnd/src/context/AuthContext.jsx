import { createContext, useState, useEffect } from 'react'
import { auth } from '../services/firebase'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile
} from 'firebase/auth'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        console.log(user.email + " is logged in!");
      } else {
        console.log('User is logged out!');
      }
      setCurrentUser(user)
    })
    return unsubscribe
  }, [])

  const signup = async (userName, email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password).catch((err) =>
        console.log(err)
      );
      await updateProfile(auth.currentUser, { displayName: userName })
        .catch(
          (err) => console.log(err)
        );
    } catch (err) {
      console.log(err);
    }
  }

  const signin = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (err) {
      console.log(err)
    }
  }

  const signout = async () => {
    try {
      return auth.signOut()
    } catch (err) {
      console.log(err)
    }
  }

  const value = {
    currentUser,
    signup,
    signin,
    signout
  }
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
