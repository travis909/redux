import counterReducer from './counter';
import loggedReducer from './isLogged';
import columnsReducer from './table_reducers/columns';
import dataReducer from './table_reducers/data';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  counter   :   counterReducer,
  logged    :   loggedReducer,
  columns   :   columnsReducer,
  data      :   dataReducer,
});

export default rootReducer;
