//State argument is not application state, only the state
//this reducer is responsible for.  This only affects the active book reducer.
export default function(state=null, action){
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }

    return state;
}