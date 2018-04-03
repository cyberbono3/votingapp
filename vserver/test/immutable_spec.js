import {expect} from 'chai';
import {List, Map} from 'immutable';


//api immutable https://facebook.github.io/immutable-js/docs/#/

describe('immutability', () =>{
   
   describe('a tree', () => {
       
      let addMovie = (currentState, movie) => currentState.update('movies', movies => movies.push(movie));
       
       
      it('is immutable', () => {
      let state = Map({
        movies: List.of('Trainspotting', '28 Days Later')
      });
      let nextState = addMovie(state, 'Sunshine');
           
        expect(nextState).to.equal(Map({
        movies: List.of(
          'Trainspotting',
          '28 Days Later',
          'Sunshine'
        )
      }));
      expect(state).to.equal(Map({
        movies: List.of(
          'Trainspotting',
          '28 Days Later'
        )
      }));
    });

  });

});