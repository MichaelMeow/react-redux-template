import reducer from './../../src/reducers/reducer';

describe('reducer', () => {

  test('Should return default state if no action type is recognized', () => {
      expect(reducer({}, { type: null })).toEqual({});
    });

    test('Should add one using numberOfClicks method', () => {
      let action;
      action = {
        type: 'CLICK',
        numberOfClicks: 2
      };
      expect(reducer({}, action)).toEqual({
        numberOfClicks: 3
      });
    });
});
