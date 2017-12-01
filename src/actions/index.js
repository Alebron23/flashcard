// Type allows the reducer to know how to handle the action. 
// It's conventional to use a string for type in redux. You also use scream case which is all uppercase separted by _
// The stack data and any component needs the ability to set the stack data so it needs to be dynamic. 
// So you wrap the data in a function so you can give it a parameter that will be dynamic. 
// Export it so other files can use the action creator. 

// Export it so you can reference it directly in the reducer. 
export const ADD_STACK   = 'ADD_STACK';
export const SET_STACK   = 'SET_STACK';
export const LOAD_STACKS = 'LOAD_STACKS';

export function setStack(stack) {
    return {
        type: SET_STACK, 
        stack              
    };
}

// our parameter is any stack data that our component provides for us. 
export function loadStacks(stacks) {
    return {
        type: LOAD_STACKS,
        stacks
    }
}

export function addStack(stack) { //this function is an action creator that makes the action object. Reducers respond to the actions. 
    return {
        type: ADD_STACK,
        stack
    }
}

// Now we write a reducer to handle this setStack action creator and setStack action. 

