import {
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import Swal from 'sweetalert2'

import { googleAuthProvider } from "../Firebase/firebaseConfig";

import { types } from "./../Types/types";
import { desactiveNote, setNotes } from "./note";
import { finishLoading, startLoading } from './ui';

const auth = getAuth();
// functions that return functions are called currying (the action as such)
export const beforeLogin = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());
    signInWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        dispatch(login(user.uid, user.displayName));
      })
      .catch((e) => {
        Swal.fire('Fail', e.message, 'error');
      })
      .finally(() => {
        dispatch(finishLoading());
      });
  };
};

export const beforeRegister = (email, password, name) => {
  return (dispatch) => {
    createUserWithEmailAndPassword(auth, email, password).then(
      async ({ user }) => {
        await updateProfile(user, { displayName: name }); // for udpate the name
        dispatch(login(user.uid, user.displayName));
      }
    );
  };
};

export const beforeGoogleLogin = () => {
  return (dispatch) => {

    signInWithPopup(auth, googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      })
      .catch((e) => {
        Swal.fire('Fail', e.message, 'error');
      });
  };
};


export const beforeLogout = () => {
  return async (dispatch) => {
    await signOut(auth);
    dispatch(logout());
    dispatch(setNotes([]));
    dispatch(desactiveNote());
  }
}

export const login = (uid, name) => {
  return {
    type: types.login,
    payload: {
      uid,
      name,
    },
  };
};

export const logout = () => {
  return {
    type: types.logout
  }
}
