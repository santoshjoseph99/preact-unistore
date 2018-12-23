const { createElement, div, p, button } = require('preact-hyperscript');
const { render, Component } = require('preact');
const h = createElement;
import createStore from 'unistore'
import { Provider, connect } from 'unistore/preact'

let store = createStore();
let actions = store => ({});

const App = connect('', actions)(
  () => {
    return (
      div([ ])
    );
  }
);

render(
  h(Provider, { store: store }, [
    div(
      [
        h(App),
      ])]),
  document.getElementById('app')
);