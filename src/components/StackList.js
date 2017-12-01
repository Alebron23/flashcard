import React, { Component } from 'react';

//Binds our action creators to our dispatcher in the mapDispatchToProps function. 
// import {bindActionCreators } from 'redux'; // Don't need this anymore because you can just pass the action creators you want to bind to the connect function. 

// Have to connect this StackList component to the store so it can update it with the actions. 
// We have to use the connect function from the react-redux library
// So we can connect to the store. Takes two functions as parameters. 
// First one handles connecting component to the store and handles getting some of that data. 
// Second one hanldes allowing our componet to use our action creators and sending actions to our reducers. 
// The connect function returns a function that connects our component. 
import { connect } from 'react-redux';  

//Helps us link to a route. 

import stacks from '../data/stacks.json';
import { setStack, loadStacks } from '../actions';    //importing the action that we created. 
import { Link } from 'react-router-dom';


export class StackList extends Component {
    componentDidMount() {
        // We are only going to load them if they are empty so we don't load them everytime. 
        if(this.props.stacks.length === 0) { 
            this.props.loadStacks(stacks); 
        }

    } 

    render() {
        //checking to see if we had the action creator bound to our props 
        // from the mapDispatchToProps and bindActionCreator functions below. 
        // So now when you look at props you have a setStack function that we can use 
        // to send to our redux store and we know that our connect component works. 
        // console.log('stacklist props', this.props);

        return(
            <div>
                {
                    this.props.stacks.map(stack => {
                        return (
                            
                            <Link 
                                to='/stack' 
                                key={stack.id} 
                                onClick={() => this.props.setStack(stack)}
                            >   
                                {/*to='/stack' is a route that we have setup in the index.js file with all the react-router stuff
                                Also this is where we set the state of our store so when we get the state in our Stack component this is where it's coming from. */}
                                <h4 key={stack.id}> {stack.title}</h4>
                            </Link>  
                        )
                    })
                }
            </div>
        )
    }
}

// Overview: mapDispatchToProps is taking the dispatch from redux and binding the setStack
// onto the props of our component. So after that you can use it to dispatch an action to our 
// redux store. 

// Function that we are passing in a second argument to the connect function. 
// It has one parameter itself called dispatch. But react-redux will automatically 
// recognize the mapDispatchToProps function and pass in dispatch automatically. 
// In order to bind our desired action creators to this disatch object we will have to 
// attach our action creators to our redux dispatcher. which is the dispatch passed in. 
// To do this we use another method from redux called bindActionCreators. 

// For this we can actually use a shortcut. You can actually just pass in the action creators you want to bind
// to, to the connect function and you don't have a need for mapDispatchToProps or bindActionCreators so that's 
// why its commented out. 
// function mapDispatchToProps(dispatch) {
//     // We provide object which is list of the action creators that we actually want to bind. 
//     // Second parameter is what we are binding on which is the dispatch that was passed in to 
//     // mapDispatchToProps.
//     // To make the props available on the dispatch of our component we return the result of the 
//     // bindActionCreator function. 

//     return bindActionCreators({ setStack }, dispatch);
// }

// So we can access the stacks from our store on our props. 
function mapStateToProps(state) {
    return {stacks: state.stacks }
}

// First parameter tells what part of the store we want this component to listen to. 
// Can pass in null if you are not going to be getting any data from the store and you 
// don't need to connect to it. 
// The second parameter is a function that tells what action creators will be available on
// the component in order to dispatch some actions to the redux store. Remember that dispatching 
// the action is just sending it to the reducer so the reducer knows how to update the state of the store. 
// So what we are doing is attaching the action creator to the props attribute of our component so that way 
// we can call it to pass down data to our redux store. 

// Had this but since we only did it once you can just call connect directly . 
// const connectComponent = connect(null, mapDispatchToProps);

export default connect(mapStateToProps, { setStack, loadStacks })(StackList);