import { FETCH_TASK_SUCCESS } from './actionType';

const initalState = {
  tasks: [],
};

export default function counterReducer(state = initalState, action) {
  switch (action.type) {
    case FETCH_TASK_SUCCESS:
      return {
        ...state,
        tasks: action.payload,
      };

    default:
      return state;
  }
}
