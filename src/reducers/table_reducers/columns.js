const columnsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SETCOL':
      return (x) => state + [{Header: x, accessor: 'item.'+x}]
    default:
      return state;
  }
}

export default columnsReducer;
