// src/__tests__/validators.test.js

import {
  validateName,
  validateEmail,
  validatePassword,
  validateConfirmPassword,
  validateDateOfBirth
} from './src/utils/validators';

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

  // Password Tests
  test('validatePassword - empty', () => {
    expect(validatePassword('')).toBe('Password is required');
  });

  test('validatePassword - no uppercase', () => {
    expect(validatePassword('password1!')).toBe('Password must contain an uppercase letter');
  });

  test('validatePassword - no lowercase', () => {
    expect(validatePassword('PASSWORD1!')).toBe('Password must contain a lowercase letter');
  });

  test('validatePassword - no number', () => {
    expect(validatePassword('Password!')).toBe('Password must contain a number');
  });

  test('validatePassword - no special char', () => {
    expect(validatePassword('Password1')).toBe('Password must contain a special character');
  });

  test('validatePassword - valid', () => {
    expect(validatePassword('Password1!')).toBe('');
  });

  // Confirm Password
  test('validateConfirmPassword - empty', () => {
    expect(validateConfirmPassword('Password1!', '')).toBe('Confirm password is required');
  });

  test('validateConfirmPassword - mismatch', () => {
    expect(validateConfirmPassword('Password1!', 'Password2!')).toBe('Passwords do not match');
  });

  test('validateConfirmPassword - match', () => {
    expect(validateConfirmPassword('Password1!', 'Password1!')).toBe('');
  });
  // Date of Birth Tests
  test('validateDateOfBirth - empty', () => {
    expect(validateDateOfBirth('')).toBe('Date of birth is required');
  });

  test('validateDateOfBirth - wrong format', () => {
    expect(validateDateOfBirth('2020-12-01')).toBe('Date must be in dd/mm/yyyy format');
  });

  test('validateDateOfBirth - future date', () => {
    expect(validateDateOfBirth('01/01/2100')).toBe('Date of birth cannot be in the future');
  });

  test('validateDateOfBirth - under 13', () => {
    const recentYear = new Date().getFullYear() - 10;
    expect(validateDateOfBirth(`01/01/${recentYear}`)).toBe('You must be at least 13 years old');
  });

  test('validateDateOfBirth - valid', () => {
    expect(validateDateOfBirth('01/01/2000')).toBe('');
  });
});