import fbApp from '../database/firebase'
import {
  getFirestore,
  collection,
  query,
  orderBy,
  onSnapshot
} from 'firebase/firestore'
import { useEffect } from 'react'

const useCollection = ([cltn, index, orden]) => {
  let list = []
    const db = getFirestore(fbApp)
    const data = query(collection(db, cltn), orderBy(index, orden))
    
    onSnapshot(data, (snapshot) => {
      snapshot.forEach((doc) => {
        list.push(doc.data())
      })
    })
    console.log(list)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])
  return list
}

export default useCollection
