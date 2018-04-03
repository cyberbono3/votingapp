import {createStore} from 'redux';
import reducer from './reducer';

//store aggregates all parts of out application

export default function makeStore() {
  return createStore(reducer);
}