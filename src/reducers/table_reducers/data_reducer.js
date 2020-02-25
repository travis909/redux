const dataReducer = (state = [], action) => {
  switch (action.type) {
    case 'SETDATA':
      return [
        ...state,
        {
          data: action.data,
        }
      ];
    default:
      return state;
  }
}



export default dataReducer;