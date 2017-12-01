import React from 'react';
import { StackForm } from '../src/components/StackForm.js';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

configure({adapter: new Adapter()});

const changeTitle = 'change title';
const changePrompt = 'change prompt';
const changeAnswer = 'change answer';

describe('StackForm', () => {
    const stackform = shallow(<StackForm />);

    it('renders the form title', () => {
        expect(stackform.find('h4').at(1).text()).toEqual('Create a New Stack');
    });

    it('renders the Home Link', () => {
        expect(stackform.find('h4').at(0).text()).toEqual('Home');
    });

    it('renders a Form component', () => {
        expect(stackform.find('Form').exists()).toBe(true);
    });

    it('renders a button to add a new card', () => {
        expect(stackform.find('Button').at(0).props().children).toEqual('Add Card');
    });

    it('renders button to submit new form', () => {
        expect(stackform.find('Button').at(1).props().children).toEqual('Add Stack');
    });

    describe('Updating the title', () => {
        beforeEach(() => {
            stackform.find('FormControl').simulate('change', {target: {value: changeTitle}});
        });

        it('updates title in state', () => {
            //console.log(stackform.state());
            expect(stackform.state().title).toEqual(changeTitle);
        });
    });

    describe('when adding a new card', () => {
        beforeEach(() => {
            stackform.find('Button').at(0).simulate('click');
        });

        afterEach(() => {
            stackform.setState({cards: []});
        });

        it('adds new card to state', () => {
            expect(stackform.state().cards.length).toEqual(1);
        });

        // it('calls addCard on the button click', () => {
        //     let spy = jest.spyOn(stackform.instance(), 'addCard');
        //     stackform.find('Button').at(0).simulate('click');
        //     expect(spy).toHaveBeenCalled();
        // });

        it('renders the prompt section', () => {
            expect(stackform.find('ControlLabel').at(1).props().children).toEqual('Prompt: ')
        });

        it('renders answer section', () => {
            expect(stackform.find('ControlLabel').at(2).props().children).toEqual('Answer: ')
        });

        describe('updating card prompt', () => {
            beforeEach(() => {
                stackform.find('FormControl').at(1).simulate('change', { target: {value: changePrompt}});
            });
    
            it('updates the prompt in state', () => {
                console.log(stackform.state());
                expect(stackform.state().cards[0].prompt).toEqual(changePrompt);
            });
        });

        describe('updating card answer', () => {
            beforeEach(() => {
                stackform.find('FormControl').at(2).simulate('change', {target: { value: changeAnswer}});
            });

            it('updates the answer in the state', () => {
                expect(stackform.state().cards[0].answer).toEqual(changeAnswer);
            });
        });
    }); 
});