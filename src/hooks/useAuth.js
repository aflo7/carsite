import { useState, useEffect } from "react"
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut
} from "firebase/auth"

const provider = new GoogleAuthProvider()
const auth = getAuth()

const useAuth = () => {
  const [displayName, setDisplayName] = useState("")
  const [uid, setUid] = useState("")

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // signed in
        // console.log("signed in :", user)
        setDisplayName(user.displayName)
        setUid(user.uid)
      } else {
        // // not signed in
        console.log("signed out")
        setDisplayName("")
      }
    })
  }, [])

  const logout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  const login = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        // The signed-in user info.
        const user = result.user
        console.log(user)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        // The email of the user's account used.
        const email = error.email
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error)
        // ...
      })
  }

  return {displayName, login, logout, uid}
}

export default useAuth
