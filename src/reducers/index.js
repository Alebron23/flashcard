// A reducer's main purpose is to compose an object that represents how it should update the state. 
// Reducers are mechanisms that describe how to update the store.
import { SET_STACK, LOAD_STACKS, ADD_STACK } from '../actions'; // don't include index.js because it is known to be the default
import { combineReducers } from 'redux';

// state is representing the redux state at the current time. 
// The state = {} is a default so if whatever is passed in is undefined it will get set to an empty object.
// The default object is just a way to set it to something else other than undefined in case that does happen. 
// The second parameter will be the incoming action. Right now this is our setStack function 
// that we defined.  
function stack(state = {}, action) { 

    switch (action.type) {
        case SET_STACK:
            return action.stack;
        default: 
            return state;
    }

}

// Since we have two reducers, we can use the combinereducers function 
// from redux to combine them and export them both.

function stacks(state = [], action) {
    switch (action.type) {
        case LOAD_STACKS:
            return action.stacks;
        case ADD_STACK:
            return [...state, {...action.stack, id: state.length}];
        default: return state;
    }
}

export default combineReducers({stack, stacks});