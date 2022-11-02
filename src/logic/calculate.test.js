import calculate from './calculate';
import operate from './operate';

describe ('testing calculate component', () => {
  test ('testing if calculate is working properly', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    }
    const test1 = calculate(obj, 'AC');
    expect(obj.total).toBeNull;
    expect(obj.next).toBeNull;
    expect(obj.operation).toBeNull;
  })
  test ('testing if buttons working properly', () => {
    const obj = {
      total: null,
      next: 0,
      operation: null,
    }
    const test2 = calculate(obj, '0');
    expect(obj.next).toEqual(0);
    expect(obj.total).toBeNull;
    expect(obj.operation).toBeNull;
  })
  test ('testing operations', () => {
    const obj = {
      total: 1,
      next: 0,
      operation: '÷',
    }
    const test3 = operate(1, 0, '÷')
    expect(test3).toMatch("Can't divide by 0.");
  })
})