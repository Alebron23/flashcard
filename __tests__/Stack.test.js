import React from 'react';
import { shallow } from 'enzyme';
import { Stack } from '../src/components/Stack.js';
import { stack } from '../src/data/fixtures.js';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

configure({adapter: new Adapter()});

// This test expects us to provide the store in either the 
// context or props of the Stack component. We can't do it the same
// as in the App.test.js file because this time our Stack is a redux connected component. 
// We do this by exporting the class, not just the default exported connected class. 

// It's typical for constants like the props to be stored in a fictures 
// file for our testing data. A ficture in a test is a piece of data 
// that mostly remains constant throughout the test. You want fixtures 
// so multiple tests can use the same test data to  
const props = { stack }

describe('Stack', () => {
    const stack = shallow(<Stack {...props}/>);

    it('renders the title', () => {
        //console.log(stack.debug());
        expect(stack.find('h3').text()).toEqual(props.stack.title);
    });

    it('renders the Home Link', () => {
        expect(stack.find('Link h4').text()).toEqual('Home');
    });

    it('renders correct number of cards', () => {
        expect(stack.find('Card').length).toEqual(props.stack.cards.length);
    });
});

