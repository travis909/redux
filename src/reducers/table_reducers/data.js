import axios from "axios";

const dataReducer = (state = [], action) => {
  switch (action.type) {
    case 'SETDATA':
      return ( state = async () => {
        const result = await axios("https://api.tvmaze.com/search/shows?q=snow")
        (result.data)
      })
    default:
      return state;
  }
}

export default dataReducer;
