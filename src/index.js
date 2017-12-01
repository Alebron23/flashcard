import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';


// use provider component from react-redux to provide the store to other
// components. 
import { Provider } from 'react-redux'; //Like the browserRouter it raps around everything to provide the store. 
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './components/App.js';
import Stack from './components/Stack.js';
import StackForm from './components/StackForm.js';

import rootReducer from './reducers'; // exporting the stack reducer. 
import { setStack } from './actions';

import './index.css';



// importing components from the react-router.
// One is the root component to setup routing within our application
// another one is switching so we can switch between routes. 
// Then we have the route component itself to be able to navigate to 
// different endpoints through react components. 


const store = createStore(rootReducer);
store.subscribe(() => console.log('store', store.getState())); // logs store whenever it updates. 
store.dispatch(setStack({id: 0, title: 'example', cards: [] })) //dispatch the firing of an action. We are dispatching the action so that the reducer can pick it up in our redux. Fires everytime that the store updates. 


/*Provide the store that we created to Provide component so that each component has access to the store */
 ReactDOM.render(<Provider store={store}> 
                    <BrowserRouter> 
                        <Switch>
                            {/* The component attribute tells it which component to render when going to the / route 
                                Have to use exact keyword to tell it to render the app only on the / exact. if not it would 
                                render it when any / was used. */}
                            <Route exact path='/' component={App}/>
                            <Route path='/stack' component={Stack} />
                            <Route path='/stack_form' component={StackForm} />
                        </Switch>
                    </BrowserRouter>
                </Provider>,
                 document.getElementById('root'));

    // In order to create the store we pass in our reducer to the create
    // store funciton which we'll import from redux. s