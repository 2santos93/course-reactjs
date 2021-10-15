import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase/firebaseConfig";

export const loadNotes = async (id) => {
  const {docs} = await getDocs(collection(db, `${id}/journal/notes`));
  const notes = docs.map(doc => ({id: doc.id, ...doc.data()}));
  return notes;
}
