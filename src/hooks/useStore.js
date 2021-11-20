/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import useAuth from "./useAuth"
import { db } from "../firebase"
import { doc, setDoc, getDoc } from "firebase/firestore"

const useStore = () => {
  const authHook = useAuth()
  const [uid, setUid] = useState()
  const [userData, setUserData] = useState()

  useEffect(() => {
    if (!authHook.uid) return
    setUid(authHook.uid)
  }, [authHook.uid])

  useEffect(() => {
    if (!uid) return
    retrieveData()
  }, [uid])

  const retrieveData = async () => {
    const ref = doc(db, "users", uid)
    const docSnap = await getDoc(ref)

    if (docSnap.exists()) {
      setUserData(docSnap.data())
    } else {
      setInitialUserDocument()
    }
  }

  const setInitialUserDocument = async () => {
    await setDoc(doc(db, "users", uid), {
      settings: { darkMode: false, exampleField: false }
    })
  }

  // remove indexes with missing "car" property
  const cleanGarage = (carArray) => {
    let newArr = carArray.filter((item) => (item.car ? item.car : null))
    return newArr
  }

  const createGarage = async (garageName, carArray) => {
    let cleanArr = cleanGarage(carArray)
    await setDoc(
      doc(db, "users", uid),
      { garages: { [garageName]: cleanArr } },
      { merge: true }
    )

    retrieveData()
  }

  const deleteGarage = async (garageName) => {
    const ref = doc(db, "users", uid)
    const docSnap = await getDoc(ref)

    if (docSnap.exists()) {
      let temp = docSnap.data()
      delete temp.garages[garageName]

      await setDoc(doc(db, "users", uid), temp)
    }

    retrieveData()
  }

  const handleChange = async (value) => {
    if (value === "darkMode") {
      const ref = doc(db, "users", uid)
      const docSnap = await getDoc(ref)

      if (docSnap.exists()) {
        let temp = docSnap.data()
        temp.settings.darkMode = !temp.settings.darkMode
        await setDoc(ref, temp)
      }
    }

    retrieveData()
  }

  return { uid, createGarage, userData, deleteGarage, handleChange }
}

export default useStore
