import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { firebaseapp } from "./app";

const storage =  getStorage(firebaseapp)

export const fileUpload = async (file) => {
    const filedata = await uploadBytesResumable(ref(storage, file.name), file)
  return  await getDownloadURL(filedata.ref)
}