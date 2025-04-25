// src/__tests__/validators.test.js

import {
  validateName,
  validateEmail,
  validatePassword,
  validateConfirmPassword,
  validateDateOfBirth
} from '../utils/validators';

describe('Validation Tests', () => {
  // Name Tests
  test('validateName - empty', () => {
    expect(validateName('')).toBe('Name is required');
  });

  test('validateName - too short', () => {
    expect(validateName('A')).toBe('Name must be at least 2 characters');
  });

  test('validateName - invalid characters', () => {
    expect(validateName('Al1ce')).toBe('Name must contain only letters');
  });

  test('validateName - valid name', () => {
    expect(validateName('Süleyman')).toBe('');
  });
});
