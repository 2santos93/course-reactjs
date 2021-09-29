import { deleteDoc, doc } from '@firebase/firestore';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addNote } from '../../actions/note';
import { db } from '../../Firebase/firebaseConfig';
import { types } from './../../Types/types';

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('note actions test', () => {

  test('should add note', async () => {
    const store = mockStore({
      auth: {uid: '12345'},
      notes: {notes:[]}
    });

    const actionsExpected = [
      {
        type: types.activeNote,
        payload: {
          id: expect.any(String),
          title: expect.any(String),
          body: expect.any(String),
          date: expect.any(Number),
          img: expect.any(String)
        }
      },
      {
        type: types.setNotes,
        payload: expect.any(Array)
      }
    ];

    await store.dispatch(addNote());

    const actions = store.getActions();
    expect(actions).toEqual(actionsExpected);
    await deleteDoc(doc(db, `12345/journal/notes/${actionsExpected[0].payload.id}`));
    await deleteDoc(doc(db, `12345/journal/notes/${actionsExpected[1].payload.id}`));

  })
})
