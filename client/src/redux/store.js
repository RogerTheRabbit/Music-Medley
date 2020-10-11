import { createStore } from 'react-redux'

import rootReducer from './rootReducer';

const store = createStore(rootReducer);

export default store;
