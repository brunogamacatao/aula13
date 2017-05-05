import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// importa o root reducer
import rootReducer from './reducers/index';

// importa os dados
import comments from './data/comments';
import posts from './data/posts';

// cria um objeto para os dados padrão
const defaultState = {
  posts,
  comments
};

const store = createStore(rootReducer, defaultState);
export const history = syncHistoryWithStore(browserHistory, store);

export default store;