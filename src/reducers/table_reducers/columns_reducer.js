const columnsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_COLUMNS':
      return [
        ...state,
        {
          columns: action.columns,
        }
      ];
    default:
      return state;
  }
}

export default columnsReducer;