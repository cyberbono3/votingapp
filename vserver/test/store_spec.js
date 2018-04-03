import {Map, fromJS} from 'immutable';
import {expect} from 'chai';


import makeStore from '../src/store';


describe('store', () => {

  it('store made by reducer', () => {
    const store = makeStore();
    //get state returns current state
    expect(store.getState()).to.equal(Map());


      //passes the actios to the store
    store.dispatch({
      type: 'SET_ENTRIES',
      entries: ['Trainspotting', '28 Days Later']
    });
    expect(store.getState()).to.equal(fromJS({
      entries: ['Trainspotting', '28 Days Later']
    }));
  });

});