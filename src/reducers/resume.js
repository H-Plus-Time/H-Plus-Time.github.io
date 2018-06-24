
import { RECEIVE_RESUME } from '../actions/resume.js';
const resume = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_RESUME:
      console.log(action);
      console.log(state);
      return action.data;
    default:
      return state;
  }
};

export default resume;
