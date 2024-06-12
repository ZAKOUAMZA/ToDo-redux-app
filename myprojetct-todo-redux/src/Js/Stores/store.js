import { createStore } from 'redux';
import rootReducer from '../Reducers/taskReducer';

const store = createStore(rootReducer);

export default store;
