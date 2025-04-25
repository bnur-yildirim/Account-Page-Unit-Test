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

  // Email Tests
      test('validateEmail - empty', () => {
        expect(validateEmail('')).toBe('Email is required');
      });
    
      test('validateEmail - invalid format', () => {
        expect(validateEmail('test@wrong')).toBe('Invalid email format');
      });
    
      test('validateEmail - valid', () => {
        expect(validateEmail('test@example.com')).toBe('');
      });
});
