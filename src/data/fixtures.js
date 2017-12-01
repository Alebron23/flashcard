// It's typical for constants like the props to be stored in a fictures 
// file for our testing data. A ficture in a test is a piece of data 
// that mostly remains constant throughout the test. You want fixtures 
// so multiple tests can use the same test data to  
export const stack = {
    id: 0, 
    title: 'test-title', 
    cards: [ { id: 0, prompt: 'test-prompt', answer: 'test-answer'},
             { id: 1, prompt: 'test-prompt 2', answer: 'test-answer 2'} ]
};

export const stacks = [stack]; 
