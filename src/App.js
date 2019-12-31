import React from 'react';
import Counter from './Counter'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const INITIAL_STATE = {
  count: 0
}

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      }
    case "DECREMENT":
      return {
        count: state.count - 1
      }
    case "RESET":
      return {
        count: 0
      }
    default:
      return state
  }
}

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>App Component</h1>
        </header>
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
