import { collection, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../Firebase/firebaseConfig";
import { uploadFileToCloud } from "../Helper/Cloudinary";
import { loadNotes } from "../Helper/Notes";
import { types } from "../Types/types";

export const addNote = () => {
  return async (dispatch, getState) => {
    const { auth:{uid}, notes:{notes} } = getState();

    const note = {
      title: "",
      body: "",
      date: new Date().getTime(),
      img: "",
    };

    const { id } = await addDoc(collection(db, `${uid}/journal/notes`), note);

    dispatch(activeNote(id, note));
    dispatch(setNotes([...notes, {...note,id}]));
  };
};

export const activeNote = (id, note) => {
  return {
    type: types.activeNote,
    payload: { id, ...note },
  };
};

export const beforeSetNotes = (id) => {
  return async (dispatch) => {
    const notes = await loadNotes(id);
    dispatch(setNotes(notes));
  };
};
export const setNotes = (notes) => {
  return {
    type: types.setNotes,
    payload: [...notes],
  };
};

export const saveNote = (note) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const { id, ...noteToSave } = note;

    await updateDoc(doc(db, `${uid}/journal/notes/${id}`), noteToSave);

    dispatch(refreshNote(id, noteToSave));
  };
};

export const refreshNote = (id, note) => {
  return {
    type: types.refreshNote,
    payload: {
      id,
      note: {
        id,
        ...note,
      },
    },
  };
};

export const beforeUploadFile = (file) => {
  return async (dispatch, getState) => {
    const {notes:{active}, auth:{uid}} = getState();
    const {id, ...noteActive} = active;
    
    const url = await uploadFileToCloud(file);
    const noteToSave = {...noteActive, img: url}

    await updateDoc(doc(db, `${uid}/journal/notes/${active.id}`), noteToSave);

    dispatch(uploadFile(url));
    dispatch(refreshNote(id, noteToSave));

  };
};

export const uploadFile = (url) => {
  return {
    type: types.uploadFile,
    payload: {
      url
    }
  }
};

export const beforeDeleteNote = () => {
  return async (dispatch, getState) => {

    const { notes:{active}, auth:{uid}} = getState();

    await deleteDoc(doc(db, `${uid}/journal/notes/${active.id}`));
    dispatch(desactiveNote());
    dispatch(deleteNote(active.id));
  }
}

export const deleteNote = (id) => {
  return {
    type: types.deleteNote,
    payload: id
  }
}

export const desactiveNote = () => {
  return {
    type: types.desactiveNote
  }
}
