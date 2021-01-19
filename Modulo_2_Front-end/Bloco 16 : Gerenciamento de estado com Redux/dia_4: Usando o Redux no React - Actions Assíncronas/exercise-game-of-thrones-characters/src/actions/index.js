import charAPI from '../services/charAPI';

export const REQUEST_DATA = 'REQUEST_DATA';
export const GET_DATA = 'GET_DATA';
export const FAILED_DATA = 'FAILED_DATA';

const requestData = () => ({ type: REQUEST_DATA });

const getData = (data) => ({
  type: GET_DATA,
  payload: data,
});

const failedData = (error) => ({
  type: FAILED_DATA,
  payload: error,
});

export function fetchData(name) {
  return async (dispatch) => {
    try {
      dispatch(requestData());
      const data = await charAPI(name);
      dispatch(getData(data[0]));
    } catch (error) {
      console.log(error);
      dispatch(failedData(error));
    }
  }
}
