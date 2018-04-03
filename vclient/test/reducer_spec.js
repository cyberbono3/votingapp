import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../src/reducer';

describe('reducer', () => {

  it('handles SET_STATE', () => {
    const initialState = Map();
    const action = {
      type: 'SET_STATE',
      state: Map({
        vote: Map({
          pair: List.of('Trainspotting', '28 Days Later'),
          tally: Map({Trainspotting: 1})
        })
      })
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      vote: {
        pair: ['Trainspotting', '28 Days Later'],
        tally: {Trainspotting: 1}
      }
    }));
  });


  it('handles set state with JS loading', () => {
    const initialState = Map();
    const action = {
      type: 'SET_STATE',
      state: {
        vote: {
          pair: ['Trainspotting', '28 Days Later'],
          tally: {Trainspotting: 1}
        }
      }
    };
    const nextState = reducer(initialState, action);
  
    expect(nextState).to.equal(fromJS({
      vote: {
        pair: ['Trainspotting', '28 Days Later'],
        tally: {Trainspotting: 1}
      }
    }));


    it('handles set state without initial state', () => {
        const action = {
          type: 'SET_STATE',
          state: {
            vote: {
              pair: ['Trainspotting', '28 Days Later'],
              tally: {Trainspotting: 1}
            }
          }
        };
        const nextState = reducer(undefined, action);
      
        expect(nextState).to.equal(fromJS({
          vote: {
            pair: ['Trainspotting', '28 Days Later'],
            tally: {Trainspotting: 1}
          }
        }));
      });



      it('handles vote with assginement has voted', () => {
        const state = fromJS({
          vote: {
            pair: ['Trainspotting', '28 Days Later'],
            tally: {Trainspotting: 1}
          }
        });
        const action = {type: 'VOTE', entry: 'Trainspotting'};
        const nextState = reducer(state, action);
      
        expect(nextState).to.equal(fromJS({
          vote: {
            pair: ['Trainspotting', '28 Days Later'],
            tally: {Trainspotting: 1}
          },
          hasVoted: 'Trainspotting'
        }));
      })


      it('in case incorrect entry it dies not assign hasVoted() for VOTE', () => {
        const state = fromJS({
          vote: {
            pair: ['Trainspotting', '28 Days Later'],
            tally: {Trainspotting: 1}
          }
        });
        const action = {type: 'VOTE', entry: 'Sunshine'};
        const nextState = reducer(state, action);
      
        expect(nextState).to.equal(fromJS({
          vote: {
            pair: ['Trainspotting', '28 Days Later'],
            tally: {Trainspotting: 1}
          }
        }));
      });





});