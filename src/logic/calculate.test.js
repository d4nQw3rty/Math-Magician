import calculate from './calculate';
import operate from './operate';

describe('testing calculate component', () => {
  test('testing if calculate is working properly', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };
    expect(calculate(obj, 'AC')).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  test('testing operations', () => {
    const obj = {
      total: 1,
      next: 0,
      operation: '÷',
    };

    const test3 = operate(obj.total, obj.next, obj.operation);

    expect(test3).toMatch("Can't divide by 0.");
  });
});
