import { legacy_createStore as createStore } from 'redux';

const reducer = (state, action) => {
  switch (action.type) {
    case 'BOTAO_CLICADO': {
      const newState = { ...state };
      return newState;
    }

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
