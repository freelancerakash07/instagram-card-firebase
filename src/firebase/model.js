import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, onSnapshot, setDoc, updateDoc } from "firebase/firestore"
import { firebaseapp } from "./app"

const database = getFirestore(firebaseapp)

/**
 * get fire base soter all data
 * @param {*} colName 
 */

export const find = async (colName, updateState) => {
    onSnapshot(collection(database, colName), (snapshot) => {
        const dataList = []
        snapshot.docs.forEach((item) => {
            dataList.push({...item.data(), id : item.id})
        })
        updateState(dataList)
    })

}


/**
 * fire base data create
 * @param {*} colName 
 * @param {*} data 
 * @param {*} createId 
 */

export const create = async (colName, data, createId = null) => {
    
    if(createId){
        await setDoc(doc(database, colName, createId), data);
    } else{
        await addDoc(collection(database, colName), data);
    }

}

/**
 * firebase single data get with collation name and id
 * @param {*} colName 
 * @param {*} id 
 * @returns 
 */

export const findOne = async (colName, id) => {
    
 const data = await getDoc(doc(database, colName, id))
 
 return data.data()

}

/**
 * firebase single data update
 * @param {*} colName 
 * @param {*} id 
 * @param {*} updata 
 */
export const updateById = async (colName, id, updata) => {
    
 await updateDoc(doc(database, colName, id), updata)

}


export const deleteById = async (colName, id) => {
    
 await deleteDoc(doc(database, colName, id))

}