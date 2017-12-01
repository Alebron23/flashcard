import React from 'react';
import { shallow } from 'enzyme';
import { StackList } from '../src/components/StackList.js';
import { stacks } from '../src/data/fixtures.js';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
configure({adapter: new Adapter()});

const props = { stacks };

describe('StackList', () => {
    const stacklist = shallow(<StackList {...props}/>);

    it('renders correct number of Links', () => {
        console.log(stacklist.debug());
        expect(stacklist.find('Link').length).toEqual(props.stacks.length);
    });
});