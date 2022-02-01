// counter.store.js
import React from 'react';
import { observable, action, makeObservable } from 'mobx';

class CounterStore {
  @observable count = 0;

  constructor() {
    makeObservable(this)
  }

  @action.bound
  increment() {
    this.count += 1;
  }

  @action.bound
  decrement() {
    this.count -= 1;
  }
}

// Instantiate the counter store.
const counterStore = new CounterStore();

// Create a React Context with the counter store instance.
export const CounterStoreContext = React.createContext(counterStore);
export const useCounterStore = () => React.useContext(CounterStoreContext)
