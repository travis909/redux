import axios from 'axios';

// const url = 'https://jsonplaceholder.typicode.com/posts/1';

export const setdata = (url) => {
  console.log('retrieving data from - ' + url)
  return {
    type: 'SETDATA',
    payload: () => {
      axios.get(url)
        .then(res => {
          return res.data.data
      })
    }
  } 
}

export const FETCH_DATA = 'FETCH_DATA';

export const fetchData = (data) => {
  return {
    type: FETCH_DATA,
    data
  }
};

export const fetchAllData = (url) => {
  return (dispatch) => {
    return axios.get(url)
      .then(response => {
        dispatch(fetchData(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const setcol = () => { return { type: 'SETCOL' }; }