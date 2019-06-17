import axios from 'axios'
export function getData() {
    return {
      type: 'FETCHING_DATA'
    }
  }
  
const apiUrlUser = 'https://5c317daad18a50001463d41d.mockapi.io/api/oder';

export const fetchData = (data) => {
  return {
    type: 'FETCHING_DATA_ODER',
    data
  }
};

export const fetchDataOder = () => {
  return (dispatch) => {
    dispatch(getData())
    return axios.get(apiUrlUser)
      .then(response => {
        dispatch(fetchData(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};