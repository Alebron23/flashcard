import React from 'react';
import StackList from './StackList';
import { Link } from 'react-router-dom';

    const App = () => {
        return(
            <div>  
                 <h2>FlashCard</h2>
                 <hr />
                 <StackList />
                 <hr />{/*  header ruler */}
                 <Link to='stack_form'><h4>Create New Stack</h4></Link> 
            </div>
         )
    }

export default App;