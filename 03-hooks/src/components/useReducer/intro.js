const initialState = [{
    id: '1',
    toDo: 'homework',
    done: false
}]

const reducer = (state = initialState, action) => {

    if(action?.type === 'add'){
        state = [...state, action.payload];
    }
    return state;
}

let toDoReducer = reducer();

const newToDo = {
    id: '2',
    toDo: 'work',
    done: false
};

const action = {
    type: 'add',
    payload: newToDo
};

toDoReducer = reducer(initialState, action);

console.log(toDoReducer);

