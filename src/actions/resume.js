export const REQUEST_RESUME = "REQUEST_RESUME"; 
export const RECEIVE_RESUME = "RECEIVE_RESUME";
export const fetchData = (state) => (dispatch) => {
  fetch('/data/resume.json').then(r => r.json()).then(data => {
    dispatch(receiveResume(data));
  })
};

const receiveResume = (data) => ({type: RECEIVE_RESUME, data})