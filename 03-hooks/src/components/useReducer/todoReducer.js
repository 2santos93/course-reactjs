import ACTIONS from './constant';

export const todoReducer = (state, action) => {
    let id;
    switch(action.type){
        case ACTIONS.CREATE:

            return [...state, action.payload];

        case ACTIONS.UPDATE:

            id = action.payload;
            return state.map((task) => (
                (task.id === id)
                    ? {...task, done: !task.done}
                    : task
            ));

        case ACTIONS.DELETE:
            
            id = action.payload;
            return state.filter((task) => task.id !== id);

        default:
            return state;
    }
}
