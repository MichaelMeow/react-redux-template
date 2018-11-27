import defaultState from './defaultState';

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'CLICK':
      const { numberOfClicks } = action;
      let newState = Object.assign({}, state, {
        numberOfClicks: numberOfClicks + 1
      });
      return newState;
    default:
      return state;
  }
};
