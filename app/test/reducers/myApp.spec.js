import expect from 'expect';
import myApp from '../../ui/reducers/myApp';

describe('myApp reducer', () => {
  it('should return a initial state if state is not set', () => {
    expect(myApp(undefined, {})).toEqual({
      count: 0
    });
  });

  it('should increment the counter property', () => {
    const stateBefore = {
      count: 0
    };
    const stateAfter = {
      count: 1
    };
    expect(myApp(stateBefore, { type: 'INCREMENT' })).toEqual(stateAfter);
  });

  it('should decrement the counter property', () => {
    const stateBefore = {
      count: 1
    };
    const stateAfter = {
      count: 0
    };
    expect(myApp(stateBefore, { type: 'DECREMENT' })).toEqual(stateAfter);
  });
});
