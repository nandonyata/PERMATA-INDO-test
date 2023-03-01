import { baseUrl, FETCH_CATEGORY_SUCCESS, FETCH_TASK_SUCCESS } from './actionType';

export const fetchTaskSuccess = (payload) => {
  return {
    type: FETCH_TASK_SUCCESS,
    payload,
  };
};

export const fetchTask = () => {
  return (dispatch) => {
    return fetch(baseUrl + '/tasks', {
      method: 'GET',
      headers: {
        access_token: localStorage.access_token,
      },
    })
      .then((response) => {
        if (!response.ok) throw new Error('Something went wrong!');
        return response.json();
      })
      .then((res) => {
        // console.log(res);
        dispatch(fetchTaskSuccess(res));
      })
      .catch((err) => console.log(err));
  };
};

export const fetchCategorySuccess = (payload) => {
  return {
    type: FETCH_CATEGORY_SUCCESS,
    payload,
  };
};

export const fetchCategory = () => {
  return (dispatch) => {
    return fetch(baseUrl + '/categories', {
      method: 'GET',
      headers: {
        access_token: localStorage.access_token,
      },
    })
      .then((response) => {
        if (!response.ok) throw new Error('Something went wrong!');
        return response.json();
      })
      .then((res) => {
        // console.log(res);
        dispatch(fetchCategorySuccess(res));
      })
      .catch((err) => console.log(err));
  };
};
