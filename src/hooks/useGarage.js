import React, { useEffect, useState } from "react"
import { db } from "../firebase"
import { doc, setDoc, getDoc } from "firebase/firestore"
import useAuth from "./useAuth"

const useGarage = () => {
  const authHook = useAuth()
  const [uid, setUid] = useState()
  const [userData, setUserData] = useState()
  const [userGarageData, setUserGarageData] = useState()

  // create new document for user if it doesn't exist
  const setInitial = async () => {
    await setDoc(doc(db, "users", uid), {})
  }

  const retrieveData = async () => {
    const garageRef = doc(db, "users", uid)
    const docSnap = await getDoc(garageRef)

    if (docSnap.exists()) {
      setUserData(docSnap.data())
      setUserGarageData(docSnap.data().garages)
    } else {
      setInitial()
    }
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

  useEffect(() => {
    if (!authHook.uid) return
    setUid(authHook.uid)
  }, [authHook.uid])

  useEffect(() => {
    if (!uid) return
    retrieveData()
  }, [uid])

  return { uid, createGarage, userData, userGarageData }
}

export default useGarage
