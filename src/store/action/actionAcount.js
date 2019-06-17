import axios from 'axios'
export function getData() {
    return {
      type: 'FETCHING_DATA'
    }
  }
  
const apiUrlUser = 'http://5d08a7b5034e5000140106c4.mockapi.io/api/user';

export const fetchData = (data) => {
  return {
    type: 'FETCHING_DATA_USER',
    data
  }
};

export const fetchDataUser = () => {
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