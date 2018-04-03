import makeStore from './src/store';
import startServer from './src/server';

export const store = makeStore();
startServer(store); //use npm run start  to run the server


store.dispatch({
  type: 'SET_ENTRIES',
  entries: require('./entries.json')
});
store.dispatch({type: 'NEXT'});




