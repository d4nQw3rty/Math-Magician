import operate from './operate';

describe('Test operation', () => {
  test('if adition is correct', () => {
    const numberOne = 25;
    const numberTwo = 75;
    const operation = '+';
    expect(operate(numberOne, numberTwo, operation)).toBe('100');
  });

  test('if substraction is correct', () => {
    const numberOne = 25;
    const numberTwo = 75;
    const operation = '-';
    expect(operate(numberOne, numberTwo, operation)).toBe('-50');
  });

  test('if multiplication is correct', () => {
    const numberOne = -9;
    const numberTwo = -2;
    const operation = 'x';
    expect(operate(numberOne, numberTwo, operation)).toBe('18');
  });

  test('if division work properly with number two not 0', () => {
    const numberOne = 800;
    const numberTwo = -2;
    const operation = '÷';
    expect(operate(numberOne, numberTwo, operation)).toBe('-400');
  });

  test('if division work properly with number two = 0', () => {
    const numberOne = 800;
    const numberTwo = 0;
    const operation = '÷';
    expect(operate(numberOne, numberTwo, operation)).toBe("Can't divide by 0.");
  });
});
