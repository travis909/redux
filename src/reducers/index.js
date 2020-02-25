import columnsReducer from './table_reducers/columns_reducer';
import dataReducer from './table_reducers/data_reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  columns   :   columnsReducer,
  data      :   dataReducer,
});

export default rootReducer;
