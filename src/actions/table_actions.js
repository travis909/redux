import axios from 'axios';

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



export const setcol = () => { return { type: 'SETCOL' }; }