// get usertoken from localstorage
const getTokenFromLocalStorage = localStorage.getItem('customer')
  ? JSON.parse(localStorage.getItem('customer'))
  : null;

// header for authntication
export const config = {
  headers: {
    Authorization: `Bearer ${
      getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ''
    }`,
    Accept: 'application/json',
  },
};
