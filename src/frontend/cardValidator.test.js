// cardValidator.test.js
import { validateCard } from './cardValidator';

describe('Card validation functionality', () => {
  test('Valid card input', () => {
    const validCardNumber = '1234567812345670';

    // Assuming validateCard returns true for a valid card
    const result = validateCard(validCardNumber);

    expect(result).toBeTruthy();
  });

  test('Invalid card input (wrong length)', () => {
    const invalidCardNumber = '123456781234567';

    // Assuming validateCard returns false for an invalid card
    const result = validateCard(invalidCardNumber);

    expect(result).toBeFalsy();
  });

  test('Invalid card input (non-numeric characters)', () => {
    const invalidCardNumber = '1234-5678-1234-5678';

    // Assuming validateCard returns false for an invalid card
    const result = validateCard(invalidCardNumber);

    expect(result).toBeFalsy();
  });

  // Add more test cases based on your validation requirements
});
