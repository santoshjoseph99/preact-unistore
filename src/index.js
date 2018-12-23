const { createElement, div, p, button } = require('preact-hyperscript');
const { render, Component } = require('preact');
const h = createElement;
import createStore from 'unistore'
import { Provider, connect } from 'unistore/preact'

let store = createStore({ count: 0, data: {count2: 1 } });
let actions = store => ({
  increment(state) {
    return { count: state.count + 1 }
  },
  increment2(state) {
    return {
      data: {
          count2: state.data.count2 + 1,
        }
      }
  },
});

const App = connect('count', actions)(
  ({ count, increment }) => {
    return (
      div([
        p('.count', count),
        button('.button', { onClick: increment }, '+'),
      ])
    );
  }
);

const App2 = connect(function(s) { return s.data; }, actions)(class MyComponent extends Component {
  constructor() {
    super();
  }

  render({ count2, increment2 }) {
    return (
      div([
        p('.count', count2),
        button('.button', { onClick: increment2 }, '+'),
      ])
    );
  }
});

render(
  h(Provider, { store: store }, [
    div(
      [
        h(App),
        h(App2)
      ])]),
  document.getElementById('app')
);