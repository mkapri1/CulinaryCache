// auth.test.js
import { login } from './src/SellerLogin';

describe('Login functionality', () => {
  test('Valid user login', () => {
    const validUsername = 'validUser';
    const validPassword = 'validPassword';

    // Assuming login returns true for a successful login
    const result = login(validUsername, validPassword);

    expect(result).toBeTruthy();
  });

  test('Invalid user login', () => {
    const invalidUsername = 'invalidUser';
    const invalidPassword = 'invalidPassword';

    // Assuming login returns false for an unsuccessful login
    const result = login(invalidUsername, invalidPassword);

    expect(result).toBeFalsy();
  });
});
