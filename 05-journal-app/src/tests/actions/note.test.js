/**
 * @jest-environment node
 */
import { deleteDoc, doc, getDoc } from "@firebase/firestore";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { addNote, beforeSetNotes, saveNote } from "../../actions/note";
import { db } from "../../Firebase/firebaseConfig";
import { types } from "./../../Types/types";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const uid = "TESTING";
const initState = {
  auth: { uid },
  notes: { notes: [], active: {} },
};

let store = mockStore(initState);

describe("note actions test", () => {
  beforeEach(() => {
    store = mockStore(initState);
    store.clearActions();
  });

  test("should add note", async () => {
    const actionsExpected = [
      {
        type: types.activeNote,
        payload: {
          id: expect.any(String),
          title: expect.any(String),
          body: expect.any(String),
          date: expect.any(Number),
          img: expect.any(String),
        },
      },
      {
        type: types.setNotes,
        payload: expect.any(Array),
      },
    ];

    await store.dispatch(addNote());

    const actions = store.getActions();
    expect(actions).toEqual(actionsExpected);

    await deleteDoc(doc(db, `${uid}/journal/notes/${actions[0].payload.id}`));
    await deleteDoc(doc(db, `${uid}/journal/notes/${actions[1].payload.id}`));
  });

  test("should set notes", async () => {
    await store.dispatch(beforeSetNotes(uid));

    const actions = store.getActions();

    expect(actions[0].type).toBe(types.setNotes);
  });

  test('should save note', async () => {
    const note = {
      body: 'this is a body',
      title: 'this is a title',
      img: '',
      date: new Date().getTime(),
      id: 'D6ap8S27807GHtvsxzBF'
    }

    await store.dispatch(saveNote(note));

    const actions = store.getActions();

    expect(actions[0].type).toBe(types.refreshNote);
    
    // const noteSaved = await (getDoc(doc(db, `${uid}/journal/notes/${note.id}`)));

    // console.log(await noteSaved.get());
    // expect(noteSaved).toEqual(note);

  })

  test();
});
