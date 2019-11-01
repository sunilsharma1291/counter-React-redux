import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import * as Actions from './actions';
import counter from './reducers';
import Counter from './components/Counter'

const store = createStore(counter);
const rootEl = document.getElementById('root');
const {INCREMENT, DECREMENT} = Actions;

// Define Action Creators
const incrementState = () => {
    store.dispatch(INCREMENT);
} 

const decrementState = () => {
    store.dispatch(DECREMENT);
} 

const render = () => ReactDOM.render(
    <Counter 
        value = {store.getState()}
        onIncrement = {incrementState}
        onDecrement = {decrementState}
    />,
    rootEl
);

render();
store.subscribe(render);
