import { FETCH_CATEGORY_SUCCESS, FETCH_TASK_SUCCESS } from './actionType';

const initalState = {
  tasks: [],
  categories: [],
};

export default function counterReducer(state = initalState, action) {
  switch (action.type) {
    case FETCH_TASK_SUCCESS:
      return {
        ...state,
        tasks: action.payload,
      };

    case FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: action.payload,
      };

    default:
      return state;
  }
}
