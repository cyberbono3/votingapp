import {setEntries, next, vote, INITIAL_STATE} from './core';


//reducer executes kernel functions

//use INITIAL_STATE  as default state
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'SET_ENTRIES':
    return setEntries(state, action.entries);
  case 'NEXT':
    return next(state);
  case 'VOTE':
 return state.update('vote',
                        voteState => vote(voteState, action.entry));
  }
  
  
  //if reducer does not recognize action , it returns current state
  return state;
}