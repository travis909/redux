import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const fetchData = (data) => { return { type: FETCH_DATA, data } }

export const fetchAllData = (url) => {
  return (dispatch) => {
    return axios.get(url)
      .then(response => {
        let attributes = response.data.data.map(element => element.attributes)
        dispatch(fetchData(attributes))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const SET_COLUMNS = 'SET_COLUMNS';
export const setColumns = (columns) => { return { type: 'SET_COLUMNS', columns } }

export const createColumns = (list) => { 
  // list is an array of column headers to be changed to { Header: list[i], attributes: `column.${list[i].toLoweCase()}`}
  // return will be an array of these classes
  const column_setter = (el) => { return { Header: el, accessor: `item.${el.toLowerCase()}` } }
  return(dispatch) => {
    dispatch(setColumns(list.map((el) => column_setter(el))))
  }
}