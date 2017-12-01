import React from 'react';
import { Link } from 'react-router-dom';

// Use connect function once again to give stack class 
// access to the redux store. 
import { connect } from 'react-redux';
import Card from './Card';


export const Stack = (props) => {
    // get the title and cards array from our state
    const { title, cards } = props.stack;

    return(
        <div>
            <Link className='link-home' to='/'>
                <h4>Home</h4>
            </Link>
                
            <h3>{title}</h3>
        <br />
            {cards.map((card) => {
                return (
                    <Card key={card.id} card={card} />
                )
            })}
        </div>
    )
}

// maps state of redux store to the props of our component.
// Takes state as its one parameter. But it is automatically passed
// to it by react-redux as a result of the function. 
function mapStateToProps(state) {
    // We return object that we now want to be available on our props. 
    // State right now is our reducer for the component. 
    // Have to do that now since we have two reducers that created two properties in the store. 
    return {stack: state.stack};
}

// We are calling connect, that then returns a function, and we 
// are passing our stack class to that function that it returns. 
// Using js in this way is unique and doesn't happen often. 
// Stacklist doesn't listen to redux store so thats why we passed in null.
// In this one we need to listen to the redux store so we won't pass in null.
// We don't have any action creators to bind to our component so we pass in null.
// if we wanted to be able to update the store, we would have to bind 
// our action creator to the props so we could access it and we would pass 
// in our actioin creator where null is to do that. 
export default connect(mapStateToProps, null)(Stack);

 