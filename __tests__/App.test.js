import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../src/components/App.js';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

configure({adapter: new Adapter()});

describe('App', () => {
    // To fully mount the app you have to provide contents of the store, just like our provider 
    // function does for all our componets in the index.js file
    const app = shallow(<App />);

    it('renders the flashcard pro title', () => {
        expect(app.find('h2').text()).toEqual('FlashCard');
    });

    // You can't just look for <StackList /> because redux makes it as 
    // a <Connect(StackList) /> component so that's what you have to look for. 
    it('renders the StackList', () => {
        //console.log(app.debug());
        expect(app.find('Connect(StackList)').exists()).toBe(true);
    });

    it('renders a link to create new stacks', () => {
        expect(app.find('Link h4').text()).toEqual('Create New Stack');
    });
});